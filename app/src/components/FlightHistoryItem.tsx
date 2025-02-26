import FlightHistory from "@/interfaces/FlightHistory";
import { findAirlineLogo } from "@/utils/airlines";
import { toTitleCase } from "@/utils/toTitleCase";
import Image from "next/image";
import React from "react";

const FlightHistoryItem: React.FC<{
  flightHistory: FlightHistory;
}> = ({ flightHistory }) => { 
  const flightData = flightHistory.flightDetails;
  const departureDate = new Date(flightData.departureTime);
  const arrivalDate = new Date(flightData.arrivalTime);

  return (
    <div className="flex w-full items-center pr-0 md:pr-4 bg-neutral-500/20 rounded h-auto md:h-32 md:flex-row flex-col mb-3">
      <div className="md:w-1/5 w-full md:h-full h-32 my-0 flex justify-center relative aspect-square">
        <Image
          src={findAirlineLogo(flightData.airline) as string}
          alt={`${flightData.airline} logo`}
          fill
          className="object-cover md:rounded-tr-none md:rounded-l rounded-tl rounded-l-none rounded-tr border-1"
        />
      </div>

      <div className="flex flex-row mx-4 ml-0 space-x-4 items-center justify-center md:w-2/5 w-full md:mt-0 mt-6">
        <div className="font-bold text-lg">{departureDate.toLocaleDateString()} - {arrivalDate.toLocaleDateString()}</div>
      </div>

      <div className="flex flex-col ml-0 items-center md:items-start justify-start md:w-2/5 w-full md:mt-0 mt-3 md:mb-0 mb-6">
        <div className="font-bold p-0 m-0">Klasa: <span className="text-blue-500">{toTitleCase(flightHistory.seatClass)}</span></div>
        <div className="font-bold p-0 m-0">Miejsca: <span className="text-blue-500">{toTitleCase(flightHistory.seats.toString())}</span></div>
      </div>
    </div>
  );
};

export default FlightHistoryItem;
