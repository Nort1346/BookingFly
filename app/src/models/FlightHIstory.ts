import { Schema, model, models } from "mongoose";
import { IFlightHistory } from "@/interfaces/FlightHistory.model";

export const FlightHistorySchema = new Schema<IFlightHistory>({
  flightId: { type: String, required: true },
  seatClass: {
    type: String,
    enum: ["economy", "premium", "deluxe"],
    required: true,
  },
  seats: { type: Number, required: true, min: 1 },
});

const FlightHistory =
  models.FlightHistory ||
  model<IFlightHistory>("FlightHistory", FlightHistorySchema);

export default FlightHistory;
