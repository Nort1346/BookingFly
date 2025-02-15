import { IFlightHistory } from "./FlightHistory";

export interface IUser {
  name: string;
  surname: string;
  password: string;
  email: string;
  flightHistory?: IFlightHistory[];
}
