"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaGamepad,
  FaMailBulk,
  FaPlaneDeparture,
  FaUser,
} from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";
import UserDropdown from "./UserDropdown";
import { useLoginModal } from "@/context/LoginModalContext";

const Navbar: React.FC<{ sticky?: boolean }> = ({ sticky = false }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { showModal } = useLoginModal();
  const { user } = useAuthContext();
  const OFFSET: number = 40;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > OFFSET) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      if (Math.abs(window.scrollY - lastScrollY) >= OFFSET)
        setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {sticky && <div className="h-24" />}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-black/50 backdrop-blur-md p-4 shadow-lg rounded-xl z-20 border border-white/20 transition-all duration-500 ease-in-out
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
              <span className="hidden sm:inline">Loty</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-white hover:text-gray-300 space-x-2"
            >
              <FaMailBulk />
              <span className="hidden sm:inline">Kontakt</span>
            </Link>
            <Link
              href="/game"
              className="flex items-center text-white hover:text-gray-300 space-x-2"
            >
              <FaGamepad />
              <span className="hidden sm:inline">Gra</span>
            </Link>
            <button
              className={`${
                !user ? "flex" : "hidden"
              } items-center text-white hover:text-gray-300 space-x-2`}
              onClick={showModal}
            >
              <FaUser />
              <span className="hidden sm:inline">Zaloguj się</span>
            </button>
            <UserDropdown />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
