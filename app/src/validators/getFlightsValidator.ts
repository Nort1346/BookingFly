import { z } from "zod";

const getFlightsValidator = z
  .object({
    origin: z.string(),
    destination: z.string(),
    departureDate: z
      .string()
      .optional()
      .refine((d) => !d || !isNaN(Date.parse(d)), {
        message: "Invalid date format",
      })
      .transform((d) => (d ? new Date(d) : undefined)),
  }).partial();

export default getFlightsValidator;
