import { Schema, model, models } from "mongoose";
import { IUser } from "@interfaces/User";
import { FlightHistorySchema } from "./FlightHIstory";

export const UserSchema = new Schema<IUser>({
  name: { type: String, required: true, unique: false },
  surname: { type: String, required: true, unique: false },
  password: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  flightHistory: { type: [FlightHistorySchema], required: false, default: [] },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
