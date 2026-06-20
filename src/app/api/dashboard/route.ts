import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/models/Form";
import ResponseModel from "@/models/Response";
import Activity from "@/models/Activity";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const userId = session.user.id;

    const [
      totalForms,
      totalResponses,
      publishedForms,
      draftForms,
      recentForms,
      recentActivity,
      formsWithResponses,
    ] = await Promise.all([
      Form.countDocuments({ userId }),
      ResponseModel.countDocuments({
        formId: { $in: await Form.find({ userId }).distinct("_id") },
      }),
      Form.countDocuments({ userId, status: "published" }),
      Form.countDocuments({ userId, status: "draft" }),
      Form.find({ userId }).sort({ updatedAt: -1 }).limit(5).lean(),
      Activity.find({ userId }).sort({ createdAt: -1 }).limit(10).lean(),
      Form.find({ userId }).select("title responses views").lean(),
    ]);

    const totalViews = formsWithResponses.reduce((sum, f) => sum + (f.views || 0), 0);
    const conversionRate = totalViews > 0 ? ((totalResponses / totalViews) * 100) : 0;

    return NextResponse.json({
      totalForms,
      totalResponses,
      publishedForms,
      draftForms,
      conversionRate: Math.round(conversionRate * 10) / 10,
      recentForms,
      recentActivity: recentActivity.map((a) => ({
        id: a._id.toString(),
        type: a.type,
        message: a.message,
        timestamp: a.createdAt,
        formId: a.formId?.toString(),
        formTitle: a.formTitle,
      })),
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
