import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import loginValidator from "@/validators/loginValidator";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import jwt from "jsonwebtoken";
import Session from "@/models/Session";
import { IUser } from "@/interfaces/User";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    await connect();
    const data = await request?.json().catch(() => {});

    const validatedData = loginValidator.parse(data);

    const user: null | IUser = await User.findOne({
      email: validatedData.email,
    });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      validatedData.password,
      user.password
    );
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    await Session.create({
      userId: user._id,
      token,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    const response = NextResponse.json({ message: "Logged in successfully" });

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
