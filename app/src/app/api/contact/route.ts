import { NextResponse } from "next/server";
import { z } from "zod";
import { connect } from "@/lib/mongodb";
import contactValidator from "@/validators/contactValidator";
import Contact from "@models/Contact";

export async function POST(request: Request) {
  try {
    await connect();
    const data = await request.json().catch(() => {});

    const validatedData = contactValidator.parse(data);

    const contact = new Contact({
      email: validatedData.email,
      title: validatedData.title,
      content: validatedData.content,
      createdAt: new Date(Date.now()),
    });

    await contact.save();

    return NextResponse.json({
      message: "Contact form sended successfully",
      contact,
    });
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
