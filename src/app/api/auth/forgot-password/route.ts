import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import OTP from "@/models/OTP";
import { sendOTP } from "@/lib/email";

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await connectDB();

    const user = await User.findOne({ email });

    // For security reasons, we do not explicitly say if the user does not exist.
    // But since it's an OTP, if the user doesn't exist, we could just return success
    // and do nothing, or send them an email saying they don't have an account.
    // For simplicity, we'll just check if user exists.
    if (!user) {
      return NextResponse.json({ error: "No account found with this email" }, { status: 404 });
    }

    // Delete existing reset OTPs for this email
    await OTP.deleteMany({ email, type: "reset" });

    // Generate new OTP
    const otpCode = generateOTP();
    await OTP.create({
      email,
      otp: otpCode,
      type: "reset",
    });

    // Send Email
    await sendOTP(email, otpCode, "reset");

    return NextResponse.json(
      { message: "Password reset OTP sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
