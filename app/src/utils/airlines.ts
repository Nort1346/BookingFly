import { Airlines } from "@/constants/airlines";
import { Airline } from "@/interfaces/Airline";

const airlines: Airline[] = [
  { name: Airlines.NORT_FLY, code: "NFY", logo: "/assets/NortFly.webp" },
  { name: Airlines.SUPERMANN, code: "SMN", logo: "/assets/SUPERMANN.webp" },
  { name: Airlines.LOT, code: "LOT", logo: "/assets/LOT.jpg" },
];

export const findAirlineLogo = (name: string): string | undefined =>
  airlines.find((airline) => airline.name === name)?.logo;
