import { Document } from "mongoose";

export interface IAirline extends Document {
  name: string;
  code: string;
}
