import { ISession } from "@/interfaces/Session.model";
import { model, models, Schema } from "mongoose";
import User from "./User";

export const SessionSchema = new Schema<ISession>({
  userId: { type: Schema.Types.ObjectId, ref: User, required: true },
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

const Session =
  models.Session || model<ISession>("Session", SessionSchema);

export default Session;
