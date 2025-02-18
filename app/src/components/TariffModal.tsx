"use client";
import { TariffModalProps } from "@/interfaces/TariffModalProps";
import { useEffect, useState } from "react";
import FlightClassCard from "./FlightClassCard";

const TariffModal: React.FC<TariffModalProps> = ({
  isOpen,
  onClose,
  flightData,
}) => {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen && !shouldRender) {
      setShouldRender(true);
      setTimeout(() => setVisible(true), 10);
      document.body.classList.add("overflow-hidden");
    } else if (!isOpen && shouldRender) {
      setVisible(false);
      setTimeout(() => setShouldRender(false), 400);
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/0 backdrop-blur-sm transition-opacity duration-500 ease-out 
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`backdrop-blur-md bg-neutral-800 border border-neutral-600 p-6 rounded-lg md:w-full w-96 max-w-4xl transition-all duration-500 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h2 className="text-2xl font-extrabold flex justify-center mb-4">
          Wybierz taryfę
        </h2>

        <div className="flex md:flex-row flex-col gap-3 w-full items-center">
          <FlightClassCard flightData={flightData} seatClass={"economy"} />
          <FlightClassCard flightData={flightData} seatClass={"premium"} />
          <FlightClassCard flightData={flightData} seatClass={"deluxe"} />
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-white hover:text-gray-500"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default TariffModal;
