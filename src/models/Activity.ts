import mongoose, { Schema, Document } from "mongoose";

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId;
  type: "form_created" | "form_published" | "response_received" | "form_updated" | "form_deleted" | "form_archived";
  message: string;
  formId?: mongoose.Types.ObjectId;
  formTitle?: string;
  createdAt: Date;
}

const ActivitySchema = new Schema<IActivity>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    type: {
      type: String,
      enum: ["form_created", "form_published", "response_received", "form_updated", "form_deleted", "form_archived"],
      required: true,
    },
    message: { type: String, required: true },
    formId: { type: Schema.Types.ObjectId, ref: "Form" },
    formTitle: { type: String },
  },
  { timestamps: true }
);

ActivitySchema.index({ userId: 1, createdAt: -1 });

export default mongoose.models.Activity || mongoose.model<IActivity>("Activity", ActivitySchema);
