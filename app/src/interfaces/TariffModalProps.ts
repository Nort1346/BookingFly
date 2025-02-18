import { FlightData } from "next/dist/server/app-render/types";
import { ModalProps } from "./ModalProps";

export interface TariffModalProps extends ModalProps {
  flightData: FlightData | null;
}
