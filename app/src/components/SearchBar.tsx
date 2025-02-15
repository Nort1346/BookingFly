"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const SearchBar: React.FC = () => {
  const originRef: React.RefObject<HTMLInputElement | null> = useRef(null);
  const destinationRef: React.RefObject<HTMLInputElement | null> = useRef(null);
  const departureDateRef: React.RefObject<HTMLInputElement | null> = useRef(null);
  const router = useRouter();

  const redirectToFlights = () => {
    const origin = originRef.current?.value;
    const destination = destinationRef.current?.value ?? "";
    const departureDate = departureDateRef.current?.value ?? "";

    if (!origin || !destination || !departureDate) return;

    const queryParams = new URLSearchParams({
      origin: origin,
      destination: destination,
      departureDate: departureDate,
    });

    router.push(`/flights?${queryParams.toString()}`);
  };

  return (
    <>
      <div className="space-y-4 my-8">
        <h2 className="font-extrabold text-xl flex justify-center">Szukaj Lotów</h2>
        <div className="flex flex-col">
          <label
            htmlFor="fromDestination"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Z:
          </label>
          <input
            type="text"
            ref={originRef}
            name="origin"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="toDestination"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Do:
          </label>
          <input
            type="text"
            ref={destinationRef}
            name="destination"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="startDate"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Wylot:
          </label>
          <input
            type="date"
            ref={departureDateRef}
            name="startDate"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
