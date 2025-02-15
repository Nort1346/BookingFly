import { z } from "zod";

const contactValidator = z.object({
  email: z.string().min(1, "Email is required"),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

export default contactValidator;
