import { FlightData } from "@/interfaces/FlightData";
import { SeatClass } from "@/types/SeatClass";
import { toTitleCase } from "@/utils/toTitleCase";
import { useRouter } from "next/navigation";
import React from "react";

const FlightClassCard: React.FC<{
  flightData: FlightData | null;
  seatClass: SeatClass;
}> = ({ flightData, seatClass }) => {
  const route = useRouter();
  let buttonStyle: string;
  let priceStyle: string;

  switch (seatClass) {
    case "economy":
      buttonStyle = "bg-blue-600 hover:bg-blue-700";
      priceStyle = "text-blue-400";
      break;
    case "premium":
      buttonStyle = "bg-amber-600 hover:bg-amber-700";
      priceStyle = "text-amber-500";
      break;
    case "deluxe":
      buttonStyle = "bg-indigo-700 hover:bg-indigo-800";
      priceStyle = "text-indigo-500";
      break;
  }

  const redirectToCheckout = () => {
    if (!flightData?.flightId) return;
    const searchParams = new URLSearchParams();
    searchParams.append("seatClass", seatClass);
    route.push(`/checkout/${flightData.flightId}?${searchParams}`);
  };

  return (
    <div className="border border-gray-300 shadow-md rounded-lg p-6 w-80 bg-white dark:bg-neutral-900 dark:border-neutral-700">
      <div className="text-lg font-semibold text-gray-900 dark:text-white">
        {toTitleCase(seatClass)}
      </div>

      <div className={`${priceStyle} mt-4 text-xl font-bold`}>
        {flightData?.economyClass[seatClass].price} {flightData?.currency}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400">na osobę</div>

      <button
        className={`mt-6 w-full text-white font-semibold py-2 rounded-lg transition ${buttonStyle}`}
        disabled={flightData?.flightId == null}
        onClick={redirectToCheckout}
      >
        Wybierz
      </button>
    </div>
  );
};

export default FlightClassCard;
