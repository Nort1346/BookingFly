"use client"
import Container from "@/components/Containter";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import React from "react";

const Reservation: React.FC = () => {
  const params = useSearchParams();
  const reservationData: ReservationData = {
    destination: params.get("destination"),
    origin: params.get("origin"),
    departureDate: new Date(params.get("departureDate") ?? ""),
    arrivalDate: new Date(params.get("arrivalDate") ?? "")
  };

  return (
    <>
      <Navbar />
      <Container>
        <span>{params.get("to")}</span>
      </Container>
    </>
  );
};

export default Reservation;
