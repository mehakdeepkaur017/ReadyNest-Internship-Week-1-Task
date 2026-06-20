import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/models/Form";
import Activity from "@/models/Activity";
import { generateSlug } from "@/lib/utils";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const url = new URL(req.url);
    const status = url.searchParams.get("status");
    const search = url.searchParams.get("search");
    const favorite = url.searchParams.get("favorite");
    const category = url.searchParams.get("category");
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "20");

    const query: Record<string, unknown> = { userId: session.user.id };

    if (status && status !== "all") query.status = status;
    if (favorite === "true") query.isFavorite = true;
    if (category) query.category = category;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const [forms, total] = await Promise.all([
      Form.find(query)
        .sort({ updatedAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Form.countDocuments(query),
    ]);

    return NextResponse.json({
      forms,
      total,
      pages: Math.ceil(total / limit),
      page,
    });
  } catch (error) {
    console.error("Get forms error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const body = await req.json();
    const { title, description, fields, status, category, tags, coverImage, isQuizMode, quizSettings } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const slug = generateSlug(title);

    const form = await Form.create({
      title,
      description: description || "",
      slug,
      fields: fields || [],
      status: status || "draft",
      userId: session.user.id,
      category: category || "",
      tags: tags || [],
      coverImage: coverImage || "",
      isFavorite: false,
      responses: 0,
      views: 0,
      isQuizMode: isQuizMode || false,
      quizSettings: quizSettings || undefined,
    });

    await Activity.create({
      userId: session.user.id,
      type: "form_created",
      message: `Created form "${title}"`,
      formId: form._id,
      formTitle: title,
    });

    return NextResponse.json({ form }, { status: 201 });
  } catch (error) {
    console.error("Create form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
