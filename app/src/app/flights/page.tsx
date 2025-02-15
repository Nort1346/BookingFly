"use client";
import Container from "@/components/Containter";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { SearchFlightData } from "@/types/SearchFlightData";
import { useSearchParams } from "next/navigation";
import React from "react";

const Reservation: React.FC = () => {
  const params = useSearchParams();

  const destination = params.get("destination");
  const origin = params.get("origin");
  const departureDate = params.get("departureDate");

  const isEmpty = !destination && !origin && !departureDate;

  const reservationData: SearchFlightData | null = isEmpty
    ? null
    : {
        destination,
        origin,
        departureDate: departureDate ? new Date(departureDate) : null,
      };

  return (
    <>
      <Navbar sticky />
      <Container>
        <SearchBar searchFlightData={reservationData} />
        <span>{reservationData?.origin}</span>
      </Container>
    </>
  );
};

export default Reservation;
