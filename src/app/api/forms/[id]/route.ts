import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/models/Form";
import ResponseModel from "@/models/Response";
import Activity from "@/models/Activity";
import { generateSlug } from "@/lib/utils";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;
    const form = await Form.findOne({ _id: id, userId: session.user.id }).lean();

    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    return NextResponse.json({ form });
  } catch (error) {
    console.error("Get form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const form = await Form.findOneAndUpdate(
      { _id: id, userId: session.user.id },
      { $set: body },
      { new: true }
    ).lean();

    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    if (body.status === "published") {
      await Activity.create({
        userId: session.user.id,
        type: "form_published",
        message: `Published form "${form.title}"`,
        formId: form._id,
        formTitle: form.title,
      });
    } else {
      await Activity.create({
        userId: session.user.id,
        type: "form_updated",
        message: `Updated form "${form.title}"`,
        formId: form._id,
        formTitle: form.title,
      });
    }

    return NextResponse.json({ form });
  } catch (error) {
    console.error("Update form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;

    const form = await Form.findOneAndDelete({ _id: id, userId: session.user.id });

    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    // Delete all responses for this form
    await ResponseModel.deleteMany({ formId: id });

    await Activity.create({
      userId: session.user.id,
      type: "form_deleted",
      message: `Deleted form "${form.title}"`,
      formTitle: form.title,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Duplicate form
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;
    const body = await req.json();

    if (body.action === "duplicate") {
      const original = await Form.findOne({ _id: id, userId: session.user.id }).lean();
      if (!original) {
        return NextResponse.json({ error: "Form not found" }, { status: 404 });
      }

      const newForm = await Form.create({
        title: `${original.title} (Copy)`,
        description: original.description,
        slug: generateSlug(`${original.title} Copy`),
        fields: original.fields,
        status: "draft",
        userId: session.user.id,
        category: original.category,
        tags: original.tags,
        coverImage: original.coverImage,
        isFavorite: false,
        responses: 0,
        views: 0,
      });

      await Activity.create({
        userId: session.user.id,
        type: "form_created",
        message: `Duplicated form "${original.title}"`,
        formId: newForm._id,
        formTitle: newForm.title,
      });

      return NextResponse.json({ form: newForm }, { status: 201 });
    }

    if (body.action === "favorite") {
      const form = await Form.findOneAndUpdate(
        { _id: id, userId: session.user.id },
        { $set: { isFavorite: body.isFavorite } },
        { new: true }
      ).lean();

      return NextResponse.json({ form });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Patch form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
