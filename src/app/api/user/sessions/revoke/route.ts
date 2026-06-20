import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import DeviceSession from "@/models/DeviceSession";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { jti } = await req.json();

    if (!jti) {
      return NextResponse.json({ error: "Session ID required" }, { status: 400 });
    }

    await connectDB();

    // Ensure they can only revoke their own sessions
    const updated = await DeviceSession.findOneAndUpdate(
      { jti, userId: session.user.id },
      { isRevoked: true },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: "Session not found or not owned by user" }, { status: 404 });
    }

    return NextResponse.json({ message: "Session revoked successfully" }, { status: 200 });
  } catch (error) {
    console.error("Revoke session error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
