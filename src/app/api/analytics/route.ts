import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/models/Form";
import ResponseModel from "@/models/Response";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const userId = session.user.id;

    const formIds = await Form.find({ userId }).distinct("_id");

    // Responses over time (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const responsesOverTime = await ResponseModel.aggregate([
      {
        $match: {
          formId: { $in: formIds },
          submittedAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$submittedAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Fill in missing days
    const filledResponses = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const found = responsesOverTime.find((r) => r._id === dateStr);
      filledResponses.push({
        date: dateStr,
        count: found ? found.count : 0,
      });
    }

    // Form performance
    const forms = await Form.find({ userId })
      .select("title responses views")
      .sort({ responses: -1 })
      .limit(10)
      .lean();

    const formPerformance = forms.map((f) => ({
      name: f.title.length > 20 ? f.title.substring(0, 20) + "..." : f.title,
      responses: f.responses || 0,
      views: f.views || 0,
    }));

    // Completion rate
    const totalViews = forms.reduce((sum, f) => sum + (f.views || 0), 0);
    const totalResponses = forms.reduce((sum, f) => sum + (f.responses || 0), 0);
    const completionRate = totalViews > 0 ? Math.round((totalResponses / totalViews) * 100) : 0;

    // Popular forms
    const popularForms = forms
      .filter((f) => (f.responses || 0) > 0)
      .slice(0, 5)
      .map((f) => ({
        name: f.title,
        responses: f.responses || 0,
      }));

    // Daily activity (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dailyResponses = await ResponseModel.aggregate([
      {
        $match: {
          formId: { $in: formIds },
          submittedAt: { $gte: sevenDaysAgo },
        },
      },
      {
        $group: {
          _id: { $dayOfWeek: "$submittedAt" },
          count: { $sum: 1 },
        },
      },
    ]);

    const dailyActivity = days.map((day, idx) => {
      const found = dailyResponses.find((r) => r._id === idx + 1);
      return { day, count: found ? found.count : 0 };
    });

    return NextResponse.json({
      responsesOverTime: filledResponses,
      formPerformance,
      completionRate,
      popularForms,
      dailyActivity,
    });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
