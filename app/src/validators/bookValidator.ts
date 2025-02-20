import { z } from "zod";

const bookValidator = z.object({
  flightId: z.string().min(1, "FlightId is required"),
  seats: z.number().min(1, "Minimum seats is 1").max(10, "Maximum seats is 10"),
  seatClass: z.enum(["economy", "premium", "deluxe"]),
});

export default bookValidator;
