import { NextResponse } from "next/server";
import Session from "@/models/Session";
import jwt from "jsonwebtoken";
import { connect } from "@/lib/mongodb";

export async function GET(req: Request) {
  await connect();

  const cookie = req.headers.get("cookie");
  if (!cookie) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);

    const session = await Session.findOne({ token }).populate(
      "userId",
      "-password"
    );

    if (!session || session.expiresAt.getTime() < Date.now()) {
      return NextResponse.json({ error: "Session expired" }, { status: 401 });
    }

    return NextResponse.json(session.userId);
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
