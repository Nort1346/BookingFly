import { NextResponse } from "next/server";
import Session from "@/models/Session";
import { connect } from "@/lib/mongodb";

export async function POST(req: Request) {
  await connect();

  const token = req.headers.get("cookie")?.split("=")[1];
  if (token) {
    await Session.findOneAndDelete({ token });
  }

  const response = NextResponse.json({ message: "Logged out successfully" });
  response.cookies.set("token", "", { expires: new Date(0) });

  return response;
}
