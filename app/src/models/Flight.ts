import { Schema, model, models } from "mongoose";
import { IFlight } from "@interfaces/Flight";

export const FlightSchema = new Schema<IFlight>({
  flightId: { type: String, required: true, unique: true },
  airline: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  currency: { type: String, required: true },
  economyClass: {
    economy: {
      price: { type: Number, required: true },
      seatsAvailable: { type: Number, required: true },
    },
    premium: {
      price: { type: Number, required: true },
      seatsAvailable: { type: Number, required: true },
    },
    deluxe: {
      price: { type: Number, required: true },
      seatsAvailable: { type: Number, required: true },
    },
  },
});

const Flight = models.Flight || model<IFlight>("Flight", FlightSchema);

export default Flight;
