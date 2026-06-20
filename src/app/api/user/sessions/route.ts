import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import DeviceSession from "@/models/DeviceSession";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const deviceSessions = await DeviceSession.find({
      userId: session.user.id,
      isRevoked: false,
    }).sort({ lastActive: -1 });

    return NextResponse.json({ sessions: deviceSessions }, { status: 200 });
  } catch (error) {
    console.error("Fetch sessions error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
