import { FlightData } from "./FlightData";
import { ModalProps } from "./ModalProps";

export interface TariffModalProps extends ModalProps {
  flightData: FlightData | null;
}
