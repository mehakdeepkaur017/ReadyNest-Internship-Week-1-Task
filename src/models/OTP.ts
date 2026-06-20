import mongoose, { Schema, Document } from "mongoose";

export interface IOTP extends Document {
  email: string;
  otp: string;
  type: "register" | "reset";
  createdAt: Date;
}

const OTPSchema = new Schema<IOTP>({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  type: { type: String, enum: ["register", "reset"], required: true },
  createdAt: { type: Date, default: Date.now, expires: 600 }, // 10 minutes TTL
});

export default mongoose.models.OTP || mongoose.model<IOTP>("OTP", OTPSchema);
