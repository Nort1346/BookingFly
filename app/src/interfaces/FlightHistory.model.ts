import { SeatClass } from "@/types/SeatClass";
import { Document } from "mongoose";
import { FlightData } from "./FlightData";

export interface IFlightHistory extends Document {
  flightId: string;
  seatClass: SeatClass;
  seats: number;
  flightDetails?: FlightData
}
