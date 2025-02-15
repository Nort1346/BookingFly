import { Schema, model, models } from "mongoose";
import { IAirline } from "@interfaces/Airline";

const AirlineSchema = new Schema<IAirline>({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true }
});

const Airline = models.Airline || model<IAirline>("Airline", AirlineSchema);

export default Airline;