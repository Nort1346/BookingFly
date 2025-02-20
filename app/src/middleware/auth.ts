import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Session from "@/models/Session";
import { connect } from "@/lib/mongodb";

export async function authMiddleware(req: Request) {
  await connect();

  const cookie = req.headers.get("cookie");
  if (!cookie) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const token = cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);

    const session = await Session.findOne({ token }).populate(
      "userId",
      "-password"
    );

    if (!session || session.expiresAt.getTime() < Date.now()) {
      return new Response(JSON.stringify({ error: "Session expired" }), {
        status: 401,
      });
    }

    return session.userId;
  } catch (error) {
    console.error("JWT error:", error);
    return new Response(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
    });
  }
}
