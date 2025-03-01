"use client";
import { LOCATIONS } from "@/constants/locations";
import { SearchFlightData } from "@/types/SearchFlightData";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const SearchBar: React.FC<{ searchFlightData?: SearchFlightData | null }> = ({
  searchFlightData,
}) => {
  const originRef: React.RefObject<HTMLSelectElement | null> = useRef(null);
  const destinationRef: React.RefObject<HTMLSelectElement | null> =
    useRef(null);
  const departureDateRef: React.RefObject<HTMLInputElement | null> =
    useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (originRef.current)
      originRef.current.value = searchFlightData?.origin || "";
    if (destinationRef.current)
      destinationRef.current.value = searchFlightData?.destination || "";
    if (departureDateRef.current) {
      const formattedDate = searchFlightData?.departureDate
        ? new Date(searchFlightData.departureDate).toISOString().split("T")[0]
        : new Date(Date.now()).toISOString().split("T")[0];
      departureDateRef.current.value = formattedDate;
    }
  }, [searchFlightData]);

  const redirectToFlights = () => {
    const origin = originRef.current?.value ?? "";
    const destination = destinationRef.current?.value ?? "";
    const departureDate = departureDateRef.current?.value ?? "";

    if (!departureDate) return;

    const queryParams = new URLSearchParams({
      origin: origin,
      destination: destination,
      departureDate: departureDate,
    });

    router.push(`/flights?${queryParams.toString()}`);
  };

  const options = LOCATIONS.map((location) => ({
    value: location,
    label: location,
  }));

  return (
    <>
      <div className="space-y-4 my-8">
        <h2 className="font-extrabold text-3xl text-white flex justify-center">
          Szukaj Lotów
        </h2>
        <div className="flex flex-col">
          <label
            htmlFor="fromDestination"
            className="mb-2 font-medium text-gray-300"
          >
            Z:
          </label>
          <select
            ref={originRef}
            name="origin"
            defaultValue={""}
            className="py-3 px-4 block w-full shadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-800 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600"
          >
            <option value="" disabled>
              Wybierz miasto
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="toDestination"
            className="mb-2 font-medium text-gray-300"
          >
            Do:
          </label>
          <select
            ref={destinationRef}
            name="destination"
            defaultValue={""}
            className="py-3 px-4 block w-fullshadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-800 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600"
          >
            <option value="" disabled>
              Wybierz miasto
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="startDate" className="mb-2 font-medium text-gray-300">
            Wylot:
          </label>
          <input
            type="date"
            ref={departureDateRef}
            name="startDate"
            min={new Date().toISOString().split("T")[0]}
            className="py-3 px-4 block w-full shadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-800 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600"
          />
        </div>
        <button className="btn" onClick={redirectToFlights}>
          Szukaj
        </button>
      </div>
    </>
  );
};

export default SearchBar;
