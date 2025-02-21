"use server";
import { IFlight } from "@/interfaces/Flight.model";
import { FlightData } from "@/interfaces/FlightData";
import { connect } from "@/lib/mongodb";
import Flight from "@/models/Flight";

const checkFlight = async (flightId: string) => {
  connect();
  const flight: IFlight | null = await Flight.findOne({ flightId: flightId });
  if (!flight) return null;

  if (flight.departureTime <= new Date()) {
    return null;
  }

  return JSON.stringify(flight as FlightData);
};

export default checkFlight;
