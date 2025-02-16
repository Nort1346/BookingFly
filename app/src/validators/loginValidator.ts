import { z } from "zod";

const loginValidator = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export default loginValidator;
