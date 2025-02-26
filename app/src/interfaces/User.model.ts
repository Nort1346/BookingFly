import { Document } from "mongoose";
import { IFlightHistory } from "./FlightHistory.model";

export interface IUser extends Document {
  name: string;
  surname: string;
  password: string;
  email: string;
  flightHistory: IFlightHistory[];
}
