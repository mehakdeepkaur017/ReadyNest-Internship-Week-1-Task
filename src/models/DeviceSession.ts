import mongoose, { Schema, Document } from "mongoose";

export interface IDeviceSession extends Document {
  userId: mongoose.Types.ObjectId;
  jti: string;
  os: string;
  browser: string;
  deviceType: string;
  isRevoked: boolean;
  lastActive: Date;
  createdAt: Date;
  updatedAt: Date;
}

const DeviceSessionSchema = new Schema<IDeviceSession>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    jti: { type: String, required: true, unique: true },
    os: { type: String, default: "Unknown OS" },
    browser: { type: String, default: "Unknown Browser" },
    deviceType: { type: String, default: "Desktop" },
    isRevoked: { type: Boolean, default: false },
    lastActive: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.DeviceSession || mongoose.model<IDeviceSession>("DeviceSession", DeviceSessionSchema);
