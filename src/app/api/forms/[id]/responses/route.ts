import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import ResponseModel from "@/models/Response";
import Form from "@/models/Form";

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

    // Verify form ownership
    const form = await Form.findOne({ _id: id, userId: session.user.id });
    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "20");
    const search = url.searchParams.get("search");
    const sortBy = url.searchParams.get("sortBy") || "submittedAt_desc";

    const query: Record<string, unknown> = { formId: id };
    if (search) {
      const orList: Record<string, any>[] = [
        { "candidateInfo.name": { $regex: search, $options: "i" } },
        { "candidateInfo.rollNumber": { $regex: search, $options: "i" } },
        { "candidateInfo.class": { $regex: search, $options: "i" } },
        { "candidateInfo.section": { $regex: search, $options: "i" } },
        { "candidateInfo.studentId": { $regex: search, $options: "i" } },
        { "candidateInfo.email": { $regex: search, $options: "i" } },
        { "candidateInfo.phone": { $regex: search, $options: "i" } },
        { "candidateInfo.institutionName": { $regex: search, $options: "i" } }
      ];

      // Add custom fields lookups
      if (form.candidateInfoSettings?.customFields) {
        form.candidateInfoSettings.customFields.forEach((cf: any) => {
          orList.push({ [`candidateInfo.${cf.id}`]: { $regex: search, $options: "i" } });
          orList.push({ "candidateInfo.customFields": { $elemMatch: { fieldId: cf.id, value: { $regex: search, $options: "i" } } } });
        });
      }

      // Add standard form fields lookups
      if (form.fields) {
        form.fields.forEach((f: any) => {
          orList.push({ [`data.${f.id}`]: { $regex: search, $options: "i" } });
        });
      }

      query.$or = orList;
    }

    // Determine sort ordering
    let sortObj: Record<string, any> = { submittedAt: -1 };
    if (sortBy === "submittedAt_asc") {
      sortObj = { submittedAt: 1 };
    } else if (sortBy === "score_desc") {
      sortObj = { "quizResult.score": -1, submittedAt: -1 };
    } else if (sortBy === "score_asc") {
      sortObj = { "quizResult.score": 1, submittedAt: -1 };
    } else if (sortBy.startsWith("candidate_")) {
      const match = sortBy.match(/^candidate_(.*)_(asc|desc)$/);
      if (match) {
        const [, fieldId, order] = match;
        sortObj = { [`candidateInfo.${fieldId}`]: order === "asc" ? 1 : -1, submittedAt: -1 };
      }
    }

    const [responses, total] = await Promise.all([
      ResponseModel.find(query)
        .collation({ locale: 'en', strength: 2 }) // Case-insensitive sorting (A-Z and a-z treated same)
        .sort(sortObj)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      ResponseModel.countDocuments(query),
    ]);

    return NextResponse.json({
      responses,
      total,
      pages: Math.ceil(total / limit),
      page,
    });
  } catch (error) {
    console.error("Get responses error:", error);
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
    const url = new URL(req.url);
    const responseId = url.searchParams.get("responseId");
    const bulkIds = url.searchParams.get("responseIds");
    const responseIds: string[] = [];
    if (responseId) responseIds.push(responseId);
    if (bulkIds) responseIds.push(...bulkIds.split(","));

    if (responseIds.length === 0) {
      return NextResponse.json({ error: "Response ID(s) required" }, { status: 400 });
    }

    // Verify form ownership
    const form = await Form.findOne({ _id: id, userId: session.user.id });
    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    await ResponseModel.deleteMany({ _id: { $in: responseIds } });
    
    // Decrement response count
    await Form.findByIdAndUpdate(id, { $inc: { responses: -responseIds.length } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete response error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
