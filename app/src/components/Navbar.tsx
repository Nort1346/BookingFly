"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMailBulk, FaPlaneDeparture } from 'react-icons/fa';

const Navbar: React.FC<{ sticky?: boolean }> = ({ sticky = false }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {sticky && <div className="h-24" />}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-black/50 backdrop-blur-md p-4 shadow-lg rounded-xl z-50 border border-white/20 transition-all duration-500 ease-in-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container text-lg mx-auto flex justify-between items-center">
          <div className="text-white font-extrabold text-lg">
            <Link href="/">BookingFly</Link>
          </div>
          <div className="space-x-4 flex items-center">
            <Link
              href="/flights"
              className="flex items-center text-white hover:text-gray-300 space-x-2"
            >
              <FaPlaneDeparture />
              <span>Loty</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-white hover:text-gray-300 space-x-2"
            >
              <FaMailBulk />
              <span>Kontakt</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
