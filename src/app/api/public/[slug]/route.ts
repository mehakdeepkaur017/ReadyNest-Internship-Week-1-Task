import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/models/Form";
import ResponseModel from "@/models/Response";
import Activity from "@/models/Activity";

// Public form submission endpoint
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params;

    const form = await Form.findOne({ slug, status: "published" });
    if (!form) {
      return NextResponse.json({ error: "Form not found or not published" }, { status: 404 });
    }

    const body = await req.json();
    // Support either direct data body (form mode) or nested {data, timeTaken} (quiz mode)
    const data = body.data || body;

    const session = await auth();
    const email = session?.user?.email;

    // Check limitOneResponse
    if (form.formSettings?.limitOneResponse) {
      if (!email) {
        return NextResponse.json(
          { error: "Authentication is required to submit this form. Please log in." },
          { status: 401 }
        );
      }
      const existingResponse = await ResponseModel.findOne({
        formId: form._id,
        "metadata.respondentEmail": email,
      });
      if (existingResponse) {
        return NextResponse.json(
          { error: "You have already submitted a response for this form." },
          { status: 403 }
        );
      }
    }

    // Basic server-side validation
    for (const field of form.fields) {
      if (field.required && (!data[field.id] || data[field.id] === "")) {
        return NextResponse.json(
          { error: `${field.label} is required` },
          { status: 400 }
        );
      }
    }

    // Quiz Mode Grading & Validations
    let quizResult = undefined;
    if (form.isQuizMode) {

      if (form.quizSettings?.requireAuth && !email) {
        return NextResponse.json(
          { error: "Authentication is required to take this quiz. Please log in." },
          { status: 401 }
        );
      }

      if (form.quizSettings?.maxAttempts > 0 && email) {
        const attemptCount = await ResponseModel.countDocuments({
          formId: form._id,
          "quizResult.respondentEmail": email,
        });

        if (attemptCount >= form.quizSettings.maxAttempts) {
          return NextResponse.json(
            { error: `You have reached the maximum attempt limit (${form.quizSettings.maxAttempts}) for this quiz.` },
            { status: 403 }
          );
        }
      }

      let score = 0;
      let totalMarks = 0;
      let correctAnswersCount = 0;
      let wrongAnswersCount = 0;
      const answersAnalysis = [];

      for (const field of form.fields) {
        const submitted = data[field.id];
        
        // Identify if a correct answer is set for this field
        const hasCorrectAnswer = field.correctAnswer !== undefined && field.correctAnswer !== null && field.correctAnswer !== "";
        if (!hasCorrectAnswer) {
          continue;
        }

        const fieldMarks = field.marks || 1;
        totalMarks += fieldMarks;

        let isCorrect = false;

        if (field.type === "checkbox") {
          const submittedArr = Array.isArray(submitted) ? submitted : submitted ? [submitted] : [];
          const correctArr = Array.isArray(field.correctAnswer)
            ? field.correctAnswer
            : typeof field.correctAnswer === "string"
              ? field.correctAnswer.split(",").map((s: string) => s.trim())
              : [];

          isCorrect = submittedArr.length === correctArr.length &&
            submittedArr.every((v: any) => correctArr.includes(v)) &&
            correctArr.every((v: any) => submittedArr.includes(v));
        } else if (field.type === "text" || field.type === "textarea" || field.type === "number") {
          const submittedVal = String(submitted || "").trim().toLowerCase();
          const correctArr = Array.isArray(field.correctAnswer)
            ? field.correctAnswer.map((s: any) => String(s).trim().toLowerCase())
            : typeof field.correctAnswer === "string"
              ? field.correctAnswer.split(",").map((s: string) => s.trim().toLowerCase())
              : [String(field.correctAnswer || "").trim().toLowerCase()];
              
          isCorrect = correctArr.includes(submittedVal);
        } else {
          isCorrect = String(submitted || "").trim().toLowerCase() === String(field.correctAnswer || "").trim().toLowerCase();
        }

        let scoreAwarded = 0;
        if (isCorrect) {
          scoreAwarded = fieldMarks;
          score += scoreAwarded;
          correctAnswersCount++;
        } else {
          if (form.quizSettings?.negativeMarking) {
            scoreAwarded = -(form.quizSettings.negativeMarkValue || 0);
            score += scoreAwarded;
          }
          wrongAnswersCount++;
        }

        answersAnalysis.push({
          fieldId: field.id,
          isCorrect,
          scoreAwarded,
          correctAnswers: field.correctAnswer,
          explanation: field.explanation || ""
        });
      }

      // Clamp score to 0 minimum
      score = Math.max(0, score);
      const percentage = totalMarks > 0 ? Math.round(((score / totalMarks) * 100) * 100) / 100 : 0;
      const passed = percentage >= (form.quizSettings?.passingPercentage || 40);

      quizResult = {
        score: Math.round(score * 100) / 100,
        totalMarks,
        percentage,
        correctAnswersCount,
        wrongAnswersCount,
        timeTaken: body.timeTaken || 0,
        passed,
        respondentEmail: email || "anonymous@formforge.com",
        respondentName: session?.user?.name || "Guest",
        answersAnalysis
      };
    }

    const candidateInfo = body.candidateInfo || undefined;

    const response = await ResponseModel.create({
      formId: form._id,
      data,
      candidateInfo,
      submittedAt: new Date(),
      metadata: {
        userAgent: req.headers.get("user-agent") || "",
        respondentEmail: email || "anonymous@formforge.com",
      },
      quizResult,
    });

    // Increment response count
    await Form.findByIdAndUpdate(form._id, { $inc: { responses: 1 } });

    // Log activity
    await Activity.create({
      userId: form.userId,
      type: "response_received",
      message: form.isQuizMode 
        ? `New quiz attempt by ${quizResult?.respondentName} for "${form.title}" (${quizResult?.score}/${quizResult?.totalMarks})`
        : `New response for "${form.title}"`,
      formId: form._id,
      formTitle: form.title,
    });

    return NextResponse.json({ success: true, responseId: response._id, quizResult }, { status: 201 });
  } catch (error) {
    console.error("Submit response error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Public form fetch
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params;

    const form = await Form.findOne({ slug, status: "published" })
      .select("title description fields slug coverImage themeSettings welcomeScreen successScreen isQuizMode quizSettings candidateInfoSettings headerSettings instructions formSettings")
      .lean();

    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    // Security check: strip out correct answers and explanations so students cannot find them in network inspect
    if (form.fields) {
      form.fields = form.fields.map((field: any) => {
        const { correctAnswer, explanation, ...rest } = field;
        return rest;
      });
    }

    // Increment view count
    await Form.findByIdAndUpdate(form._id, { $inc: { views: 1 } });

    // Check if the user has already responded if limitOneResponse is enabled OR quiz attempts are maxed
    let hasResponded = false;
    let attemptErrorMessage = "You have already submitted a response for this form. Multiple submissions are not allowed.";

    const session = await auth();
    const email = session?.user?.email;

    if (email) {
      if (form.formSettings?.limitOneResponse) {
        const existingResponse = await ResponseModel.findOne({
          formId: form._id,
          "metadata.respondentEmail": email,
        });
        if (existingResponse) {
          hasResponded = true;
          attemptErrorMessage = "You have already submitted a response for this form. Multiple submissions are not allowed.";
        }
      } else if (form.isQuizMode && form.quizSettings?.maxAttempts > 0) {
        const attemptCount = await ResponseModel.countDocuments({
          formId: form._id,
          "quizResult.respondentEmail": email,
        });
        if (attemptCount >= form.quizSettings.maxAttempts) {
          hasResponded = true;
          attemptErrorMessage = `You have reached the maximum attempt limit (${form.quizSettings.maxAttempts}) for this quiz.`;
        }
      }
    }

    return NextResponse.json({ form, hasResponded, attemptErrorMessage });
  } catch (error) {
    console.error("Get public form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
