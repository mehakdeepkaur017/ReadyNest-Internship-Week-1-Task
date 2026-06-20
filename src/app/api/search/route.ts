import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/models/Form";
import { templates } from "@/lib/templates";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] });
    }

    await connectDB();

    // Search forms
    const forms = await Form.find({
      userId: session.user.id,
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    })
      .select("title description slug")
      .limit(5)
      .lean();

    const formResults = forms.map((f) => ({
      type: "form" as const,
      id: f._id.toString(),
      title: f.title,
      description: f.description || "",
      url: `/dashboard/forms/${f._id}`,
    }));

    // Search templates
    const templateResults = templates
      .filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.description.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 3)
      .map((t) => ({
        type: "template" as const,
        id: t.id,
        title: t.title,
        description: t.description,
        url: `/dashboard/templates`,
      }));

    return NextResponse.json({
      results: [...formResults, ...templateResults],
    });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
