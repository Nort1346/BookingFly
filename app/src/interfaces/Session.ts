import { Schema, Document } from "mongoose";

export interface ISession extends Document {
  userId: Schema.Types.ObjectId;
  token: string;
  expiresAt: Date;
}
