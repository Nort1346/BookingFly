import { NextRequest, NextResponse } from "next/server";
import Flight from "@/models/Flight";
import flightValidator from "@/validators/flightValidator";
import { z } from "zod";
import { generateFlightId } from "@/utils/generateFlightId";
import { connect } from "@/lib/mongodb";
import getFlightsValidator from "@/validators/getFlightsValidator";

export async function GET(request: NextRequest) {
  try {
    await connect();
    const searchParams = request.nextUrl.searchParams;

    const validatedData = getFlightsValidator.parse({
      origin: searchParams.get("origin") || undefined,
      destination: searchParams.get("destination") || undefined,
      departureDate: searchParams.get("departureDate") || undefined,
    });

    console.log(validatedData);
    const cleanedCriteria = Object.fromEntries(
      Object.entries(validatedData || {}).filter(
        ([, value]) => value !== undefined
      )
    );

    console.log(cleanedCriteria);

    const flights = await Flight.find(cleanedCriteria).limit(50);
    return NextResponse.json(flights);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connect();
    const data = await request?.json().catch(() => {});

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
