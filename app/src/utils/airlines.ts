import AirlinesEnum from "@/enums/Airlines";
import { Airline } from "@/interfaces/Airline";

const airlines: Airline[] = [
  { name: AirlinesEnum.NORT_FLY, code: "NFY", logo: "/assets/NortFly.webp" },
  { name: AirlinesEnum.SUPERMANN, code: "SMN", logo: "/assets/SUPERMANN.webp" },
  { name: AirlinesEnum.LOT, code: "LOT", logo: "/assets/LOT.jpg" },
];

export const findAirlineLogo = (name: string): string | undefined =>
  airlines.find((airline) => airline.name === name)?.logo;
