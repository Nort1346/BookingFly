"use client";
import Container from "@/components/Containter";
import FlightItem from "@/components/FlightItem";
import Footer from "@/components/Footer";
import LoadingCircle from "@/components/LoadingCircle";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { FlightData } from "@/interfaces/FlightData";
import { SearchFlightData } from "@/types/SearchFlightData";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const Reservation: React.FC = () => {
  const params = useSearchParams();

  const destination = params.get("destination");
  const origin = params.get("origin");
  const departureDate = params.get("departureDate");
  const [flights, setFlights] = useState<FlightData[] | null>(null);

  const reservationData: SearchFlightData = useMemo(() => {
    return {
      destination,
      origin,
      departureDate: departureDate ? new Date(departureDate) : new Date(),
    };
  }, [destination, origin, departureDate]);

  useEffect(() => {
    const fetchFlights = async () => {
      setFlights(null);
      const fetchFlightsParams = new URLSearchParams();
      if (reservationData.destination)
        fetchFlightsParams.append("destination", reservationData.destination);
      if (reservationData.origin)
        fetchFlightsParams.append("origin", reservationData.origin);
      if (reservationData.departureDate)
        fetchFlightsParams.append(
          "departureDate",
          reservationData.departureDate.toISOString().split("T")[0]
        );

      const response = await fetch(`/api/flights?${fetchFlightsParams}`, {
        method: "GET",
      });
      const data = await response?.json();
      if (data) setFlights(data);
      console.log(data as FlightData[]);
    };

    fetchFlights();
  }, [reservationData]);

  return (
    <>
      <Navbar sticky />
      <Container>
        <SearchBar searchFlightData={reservationData} />
        <LoadingCircle visible={flights == null} />
        <div>
          {flights?.map((flight: FlightData) => (
            <FlightItem key={flight.flightId} flightData={flight} />
          ))}
          {flights?.length === 0 && (
            <p className="flex justify-center text-2xl font-bold h-80 items-center">
              Nie znaleziono lotów 🫤
            </p>
          )}
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Reservation;
