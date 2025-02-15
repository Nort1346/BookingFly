import { Schema, model, models } from "mongoose";
import { IContact } from "@/interfaces/Contact";

export const ContactSchema = new Schema<IContact>({
  email: { type: String, required: true, unique: false },
  title: { type: String, required: true, unique: false },
  content: { type: String, required: true, unique: false },
  createdAt: { type: Date, required: true, unique: false },
});

const Contact = models.Contact || model<IContact>("Contact", ContactSchema);

export default Contact;
