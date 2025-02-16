import { NextResponse } from "next/server";
import Session from "@/models/Session";
import { connect } from "@/lib/mongodb";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  await connect();

  const token = req.headers
    .get("cookie")
    ?.split("; ")
    .find((cookie) => cookie.startsWith("token="))
    ?.split("=")[1];
  if (token) {
    await Session.findOneAndDelete({ token });
  }

  const cookieStore = await cookies();
  cookieStore.set("token", "", {
    expires: new Date(0),
  });

  return NextResponse.redirect(new URL("/", req.url));
}
