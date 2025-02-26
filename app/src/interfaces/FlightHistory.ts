import { SeatClass } from "@/types/SeatClass";
import { FlightData } from "./FlightData";

export default interface FlightHistory {
  flightId: string;
  seatClass: SeatClass;
  seats: number;
  flightDetails: FlightData;
}
