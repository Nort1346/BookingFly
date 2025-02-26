"use client";
import Container from "@/components/Containter";
import FlightHistoryItem from "@/components/FlightHistoryItem";
import Footer from "@/components/Footer";
import LoadingCircle from "@/components/LoadingCircle";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import FlightHistoryData from "@/interfaces/FlightHistory";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FlightHistory: React.FC = () => {
  const [flights, setFlights] = useState<FlightHistoryData[] | null>(null);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const loadFlights = async () => {
      const request = await fetch("/api/flightsHistory");
      if (!request.ok) return;
      const data: FlightHistoryData[] = await request.json();
      setFlights(data);
    };
    loadFlights();
  });

  useEffect(() => {
    if (!loading && !user) router.push("/");
  }, [user, loading, router]);

  return (
    <>
      <Navbar sticky />
      <Container>
        <h1 className="text-3xl font-extrabold text-center my-6">
          Historia Lotów
        </h1>
        <div>
          {flights ? (
            flights?.map((flight) => (
              <FlightHistoryItem key={flight.flightId} flightHistory={flight} />
            ))
          ) : (
            <LoadingCircle />
          )}
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default FlightHistory;
