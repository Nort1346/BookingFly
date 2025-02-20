import { SeatClass } from "@/types/SeatClass";
import { Document } from "mongoose";

export interface IFlightHistory extends Document {
  flightId: string;
  seatClass: SeatClass;
  seats: number;
}
