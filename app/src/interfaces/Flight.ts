import { Document } from "mongoose";
export interface IFlight extends Document {
  flightId: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  currency: string;
  economyClass: {
    economy: {
      price: number;
      seatsAvailable: number;
    };
    premium: {
      price: number;
      seatsAvailable: number;
    };
    deluxe: {
      price: number;
      seatsAvailable: number;
    };
  };
}
