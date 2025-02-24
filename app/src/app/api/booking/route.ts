import { NextResponse } from "next/server";
import { authMiddleware } from "@/middleware/auth";
import bookValidator from "@/validators/bookValidator";
import { IUser } from "@/interfaces/User.model";
import { z } from "zod";
import Flight from "@/models/Flight";
import { IFlight } from "@/interfaces/Flight.model";
import FlightHistory from "@/models/FlightHistory";

export async function POST(request: Request) {
  const user: Response | IUser = await authMiddleware(request);
  if (user instanceof Response) {
    return user;
  }

  try {
    const data = await request?.json().catch(() => {});
    const validatedData = bookValidator.parse(data);

    const flight: IFlight | null = await Flight.findOne({
      flightId: validatedData.flightId,
      departureTime: { $gt: new Date() },
    });

    if (!flight) {
      return NextResponse.json(
        {
          message:
            "The flight does not exist or is no longer available for booking",
        },
        { status: 400 }
      );
    }

    if (
      user.flightHistory?.find(
        (ele) => ele.flightId === validatedData.flightId
      ) != null
    ) {
      return NextResponse.json(
        { message: "You have booked this flight already" },
        { status: 409 }
      );
    }

    const newFlightHistory = await FlightHistory.create(validatedData);
    user.flightHistory?.push(newFlightHistory);
    await user.save();

    return NextResponse.json(
      { message: "Flight booked successfully" },
      { status: 200 }
    );
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
