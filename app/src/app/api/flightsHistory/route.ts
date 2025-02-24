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
        const flight = await Flight.findOne({
          flightId: flightHistory.flightId,
        });
        if (flight) {
          flightHistory.flightDetails = flight;
        }
        return flightHistory;
      })
    );

    //flightDetails no visible, to fix
    return NextResponse.json(updatedFlightHistory, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
