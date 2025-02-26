import Airlines from "@/enums/Airlines";
import { z } from "zod";

const flightValidator = z.object({
  airline: z
    .string()
    .refine((val) => Object.values(Airlines).includes(val as Airlines), {
      message: "Invalid airline",
    }),
  destination: z.string().min(1, "Destination is required"),
  origin: z.string().min(1, "Origin is required"),
  departureDate: z.string().refine((date) => !isNaN(new Date(date).getTime()), {
    message: "Invalid departure date",
  }),
  arrivalDate: z.string().refine((date) => !isNaN(new Date(date).getTime()), {
    message: "Invalid arrival date",
  }),
  currency: z.string().min(1, "Currency is required"),
  economyClass: z.object({
    economy: z.object({
      price: z.number().min(0, "Price must be a positive number"),
      seatsAvailable: z
        .number()
        .int()
        .min(0, "Seats available must be a non-negative integer"),
    }),
    premium: z.object({
      price: z.number().min(0, "Price must be a positive number"),
      seatsAvailable: z
        .number()
        .int()
        .min(0, "Seats available must be a non-negative integer"),
    }),
    deluxe: z.object({
      price: z.number().min(0, "Price must be a positive number"),
      seatsAvailable: z
        .number()
        .int()
        .min(0, "Seats available must be a non-negative integer"),
    }),
  }),
});

export default flightValidator;
