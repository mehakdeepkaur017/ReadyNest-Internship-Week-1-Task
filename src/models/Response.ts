import mongoose, { Schema, Document } from "mongoose";

export interface IResponse extends Document {
  formId: mongoose.Types.ObjectId;
  data: Record<string, unknown>;
  candidateInfo?: Record<string, string>;
  submittedAt: Date;
  metadata?: {
    userAgent?: string;
    ip?: string;
    respondentEmail?: string;
  };
  quizResult?: {
    score: number;
    totalMarks: number;
    percentage: number;
    correctAnswersCount: number;
    wrongAnswersCount: number;
    timeTaken: number; // in seconds
    passed: boolean;
    respondentEmail?: string;
    respondentName?: string;
    answersAnalysis: {
      fieldId: string;
      isCorrect: boolean;
      scoreAwarded: number;
      correctAnswers?: any;
      explanation?: string;
    }[];
  };
}

const ResponseSchema = new Schema<IResponse>(
  {
    formId: { type: Schema.Types.ObjectId, ref: "Form", required: true, index: true },
    data: { type: Schema.Types.Mixed, required: true },
    candidateInfo: { type: Schema.Types.Mixed, required: false },
    submittedAt: { type: Date, default: Date.now },
    metadata: {
      userAgent: { type: String },
      ip: { type: String },
      respondentEmail: { type: String },
    },
    quizResult: {
      type: {
        score: { type: Number, required: true },
        totalMarks: { type: Number, required: true },
        percentage: { type: Number, required: true },
        correctAnswersCount: { type: Number, required: true },
        wrongAnswersCount: { type: Number, required: true },
        timeTaken: { type: Number, required: true },
        passed: { type: Boolean, required: true },
        respondentEmail: { type: String },
        respondentName: { type: String },
        answersAnalysis: [{
          fieldId: { type: String, required: true },
          isCorrect: { type: Boolean, required: true },
          scoreAwarded: { type: Number, required: true },
          correctAnswers: { type: Schema.Types.Mixed },
          explanation: { type: String }
        }]
      },
      required: false
    }
  },
  { timestamps: true }
);

ResponseSchema.index({ formId: 1, submittedAt: -1 });

export default mongoose.models.Response || mongoose.model<IResponse>("Response", ResponseSchema);
