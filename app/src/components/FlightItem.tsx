import { FlightData } from "@/interfaces/FlightData";
import { findAirlineLogo } from "@/utils/airlines";
import Image from "next/image";
import React from "react";
import { FaPlane } from "react-icons/fa";
import { TbPoint } from "react-icons/tb";

const FlightItem: React.FC<{
  flightData: FlightData;
  onReserveClick: () => void;
}> = ({ flightData, onReserveClick }) => {
  const departureDate = new Date(flightData.departureTime);
  const departureTime = `${departureDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${departureDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  const arrivalDate = new Date(flightData.arrivalTime);
  const arrivalTime = `${arrivalDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${arrivalDate.getMinutes().toString().padStart(2, "0")}`;

  return (
    <div className="flex w-full items-center bg-neutral-500/20 p-4 rounded h-auto md:h-40 md:flex-row flex-col mb-3">
      <div className="w-1/5 md:my-0 my-6 flex justify-center">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          <Image
            src={findAirlineLogo(flightData.airline) as string}
            width={300}
            height={300}
            alt={`${flightData.airline} logo`}
            className="w-full h-full object-cover rounded-full border-2"
          />
        </div>
      </div>

      <div className="flex flex-row mx-4 ml-0 space-x-4 items-center justify-center md:w-3/5 w-full md:my-0 my-6">
        <div className="flex flex-col items-center">
          <div className="font-semibold text-xl text-blue-500">
            {flightData.origin}
          </div>
          <div className="text-lg font-bold">{departureTime}</div>
        </div>

        <div className="hidden flex-row items-center w-40 sm:flex">
          <FaPlane className="mr-1 w-12 h-12" />
          <div className="border-t-2 border-dashed w-full h-0"></div>
          <TbPoint className="w-12 h-12" />
        </div>

        <div className="flex flex-col items-center">
          <div className="font-semibold text-xl text-blue-500">
            {flightData.destination}
          </div>
          <div className="text-lg font-bold">{arrivalTime}</div>
        </div>
      </div>

      <div className="w-full md:w-1/5 md:my-0 my-6 flex justify-center">
        <button className="btn" onClick={onReserveClick}>
          Rezerwuj od{" "}
          <strong>
            {flightData.economyClass.economy.price} {flightData.currency}
          </strong>
        </button>
      </div>
    </div>
  );
};

export default FlightItem;
