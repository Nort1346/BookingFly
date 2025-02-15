"use client";
import Container from "@/components/Containter";
import Navbar from "@/components/Navbar";
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
        <span>{reservationData?.origin}</span>
      </Container>
    </>
  );
};

export default Reservation;
