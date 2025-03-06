import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="relative bg-cover bg-center h-screen">
      <Image
        src="/assets/planeImage.jpg"
        alt="Plane Image"
        fill
        quality={100}
        className="absolute inset-0 z-0 object-cover"
      />
      <div className="absolute inset-0 backdrop-brightness-50 backdrop-opacity-65 backdrop-blur-sm"></div>
      <div className="container mx-auto flex flex-col justify-center items-center p-4 relative z-10 text-center h-full">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Mamy najlepsze oferty lotów
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">
          Komfort, bezpieczeństwo i niezapomniane podróże. Z nami każda podróż
          to wyjątkowa przygoda.
        </p>
        <Link
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
          href="/flights"
        >
          Zobacz nasze oferty
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
