"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Containter";
import checkFlight from "@/utils/checkFlight";
import { FlightData } from "@/interfaces/FlightData";
import { SeatClass } from "@/types/SeatClass";

const Checkout: React.FC = () => {
  const [flight, setFlight] = useState<FlightData | null>(null);
  const [seatClass, setSeatClass] = useState<SeatClass>("economy");
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const seatCount = useRef<HTMLSelectElement | null>(null);
  const bookFlight = () => {
      
  };

  useEffect(() => {
    const loadFlight = async () => {
      const slug = params.slug;
      const flightData = await checkFlight(slug as string);
      if (flightData == null) {
        return router.push("/");
      }
      const newFlight = JSON.parse(flightData) as FlightData;

      if (typeof newFlight.departureTime == "string") {
        newFlight.departureTime = new Date(newFlight.departureTime);
      }
      if (typeof newFlight.arrivalTime == "string") {
        newFlight.arrivalTime = new Date(newFlight.arrivalTime);
      }

      setFlight(newFlight);
    };
    loadFlight();
    const seatClassParam = searchParams.get("seatClass");
    if (seatClassParam) setSeatClass("economy");
  }, []);

  return (
    <>
      <Navbar sticky />
      <Container>
        <div className="flex flex-col w-full">
          <div className="font-extrabold text-2xl">
            {flight?.origin.toString()}
          </div>
          <div className="font-extrabold text-xl text-blue-500">
            {flight?.departureTime.toLocaleTimeString()}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="font-extrabold text-2xl">
            {flight?.destination.toString()}
          </div>
          <div className="font-extrabold text-xl text-blue-500">
            {flight?.arrivalTime.toLocaleTimeString()}
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="seatCount" className="font-bold">
              Ilość miejsc
            </label>
            <select name="seatCount" ref={seatCount} className="input">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>

          <button className="btn" onClick={bookFlight}>
            Rezerwuj za {flight?.economyClass?.[seatClass].price}{" "}
            {flight?.currency}
          </button>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Checkout;
