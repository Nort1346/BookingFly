import { Document } from "mongoose";

export interface IContact extends Document {
  email: string;
  title: string;
  content: string;
  createdAt: Date;
}
