import { NextResponse } from "next/server";
import { authMiddleware } from "@/middleware/auth";
import { IUser } from "@/interfaces/User.model";
import Flight from "@/models/Flight";

export async function GET(request: Request) {
  const user: Response | IUser = await authMiddleware(request);
  if (user instanceof Response) {
    return user;
  }

  try {
    const updatedFlightHistory = await Promise.all(
      user.flightHistory.map(async (flightHistory) => {
        const flight = await Flight.findOne(
          {
            flightId: flightHistory.flightId,
          },
          {
            flightId: 1,
            airline: 1,
            origin: 1,
            destination: 1,
            departureTime: 1,
            arrivalTime: 1,
            currency: 1,
            economyClass: 1,
          }
        ).lean();
        return {
          flightId: flightHistory.flightId,
          seatClass: flightHistory.seatClass,
          seats: flightHistory.seats,
          flightDetails: flight || null,
        };
      })
    );

    return NextResponse.json(updatedFlightHistory, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
