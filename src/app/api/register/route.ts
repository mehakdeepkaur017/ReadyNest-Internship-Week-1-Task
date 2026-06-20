import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/models/User";
import OTP from "@/models/OTP";
import { sendOTP } from "@/lib/email";

// Helper to generate 6 digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.isVerified) {
      return NextResponse.json({ error: "Email already registered and verified" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    let user = existingUser;

    if (!user) {
      user = await User.create({
        name,
        email,
        password: hashedPassword,
        isVerified: false,
      });
    } else {
      // Update password and name for unverified user attempting to register again
      user.password = hashedPassword;
      user.name = name;
      await user.save();
    }

    // Delete existing register OTPs for this email
    await OTP.deleteMany({ email, type: "register" });

    // Generate new OTP
    const otpCode = generateOTP();
    await OTP.create({
      email,
      otp: otpCode,
      type: "register",
    });

    // Send Email
    await sendOTP(email, otpCode, "register");

    return NextResponse.json(
      {
        message: "OTP sent successfully. Please verify your email.",
        email: user.email,
        requiresVerification: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
