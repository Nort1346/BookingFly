"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Containter";
import checkFlight from "@/utils/checkFlight";
import { FlightData } from "@/interfaces/FlightData";
import { SeatClass } from "@/types/SeatClass";
import { toTitleCase } from "@/utils/toTitleCase";
import LoadingCircle from "@/components/LoadingCircle";
import { useAuthContext } from "@/context/AuthContext";
import { useMessageModal } from "@/context/MessageModalContext";
import { MessageModalType } from "@/enums/MessageModalType";

const Checkout: React.FC = () => {
  const [flight, setFlight] = useState<FlightData | null>(null);
  const [seatClass, setSeatClass] = useState<string>("economy");
  const { user, loading } = useAuthContext();
  const { showModal } = useMessageModal();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const seatCount = useRef<HTMLSelectElement | null>(null);
  const bookFlight = async () => {
    const data = {
      flightId: flight?.flightId,
      seats: parseInt(seatCount?.current?.value as string),
      seatClass: seatClass,
    };

    const request = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (request.status == 200) {
      router.push("/");
    } else {
      showModal(
        MessageModalType.DANGER,
        "Nie można zarezerwować lotu!",
        "Już rezerwowałeś ten lot!"
      );
    }
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
    const seatClassParam = searchParams.get("seatClass");
    if (seatClassParam) setSeatClass(seatClassParam);
    loadFlight();
  }, [params.slug, router, searchParams]);

  useEffect(() => {
    if (!loading && !user) return router.push("/");
  }, [loading, user, router]);

  return (
    <>
      <Navbar sticky />
      <Container>
        {flight ? (
          <>
            <h1 className="text-3xl font-extrabold text-center my-3 mb-6">
              Rezerwacja lotu
            </h1>
            <div className="flex flex-col md:flex-row justify-around mb-5 md:mb-10">
              <div className="flex flex-col my-3 md:my-0">
                <div className="font-extrabold text-2xl text-center">
                  {flight?.origin.toString()}
                </div>
                <div className="font-extrabold text-xl text-blue-500 text-center">
                  {flight?.departureTime.toLocaleTimeString()}
                </div>
              </div>

              <div className="flex flex-col my-3 md:my-0">
                <div className="font-extrabold text-2xl text-center">
                  {flight?.destination.toString()}
                </div>
                <div className="font-extrabold text-xl text-blue-500 text-center">
                  {flight?.arrivalTime.toLocaleTimeString()}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-x-0 md:space-x-1 font-semibold my-2 justify-center md:justify-start">
              <div className="text-center">Linie lotnicze:</div>
              <div className="text-center text-blue-400 font-bold">
                {flight?.airline}
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-1 font-semibold my-2 justify-center md:justify-start">
              <div className="text-center">Klasa:</div>
              <div className="text-center text-blue-400 font-bold">
                {toTitleCase(seatClass)}
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <label htmlFor="seatCount" className="font-semibold">
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
                Rezerwuj za{" "}
                {flight?.economyClass?.[seatClass as SeatClass].price}{" "}
                {flight?.currency}
              </button>
            </div>
          </>
        ) : (
          <LoadingCircle visible={true} />
        )}
        <Footer />
      </Container>
    </>
  );
};

export default Checkout;
