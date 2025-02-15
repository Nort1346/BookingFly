import { NextResponse } from "next/server";
import Flight from "@/models/Flight";
import flightValidator from "@/validators/flightValidator";
import { z } from "zod";
import { generateFlightId } from "@/utils/generateFlightId";
import { connect } from "@/lib/mongodb";

export async function GET() {
  await connect();
  const flights = await Flight.find();
  return NextResponse.json(flights);
}

export async function POST(request: Request) {
  try {
    await connect();
    const data = await request.json();

    const validatedData = flightValidator.parse(data);

    const flight = new Flight({
      flightId: generateFlightId(),
      airline: validatedData.airline,
      origin: validatedData.origin,
      destination: validatedData.destination,
      departureTime: new Date(validatedData.departureDate),
      arrivalTime: new Date(validatedData.arrivalDate),
      currency: validatedData.currency,
      economyClass: validatedData.economyClass,
    });

    await flight.save();

    return NextResponse.json({
      message: "Flight created successfully",
      flight,
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
