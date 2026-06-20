import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Form from "@/models/Form";
import { auth } from "@/lib/auth";

export async function PATCH(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { formIds, status } = await req.json();

    if (!Array.isArray(formIds) || formIds.length === 0) {
      return NextResponse.json({ error: "No forms selected" }, { status: 400 });
    }

    if (!["draft", "published", "archived"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    await connectDB();

    const result = await Form.updateMany(
      { _id: { $in: formIds }, userId: session.user.id },
      { $set: { status, updatedAt: new Date() } }
    );

    return NextResponse.json({ 
      message: `${result.modifiedCount} forms updated successfully`,
      updatedCount: result.modifiedCount
    }, { status: 200 });
  } catch (error) {
    console.error("Bulk forms update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { formIds } = await req.json();

    if (!Array.isArray(formIds) || formIds.length === 0) {
      return NextResponse.json({ error: "No forms selected" }, { status: 400 });
    }

    await connectDB();

    const result = await Form.deleteMany({
      _id: { $in: formIds },
      userId: session.user.id
    });

    return NextResponse.json({ 
      message: `${result.deletedCount} forms deleted successfully`,
      deletedCount: result.deletedCount
    }, { status: 200 });
  } catch (error) {
    console.error("Bulk forms delete error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
