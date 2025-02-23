"use client";
import Container from "@/components/Containter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const flightHistory: React.FC = () => {
  return (
    <>
      <Navbar sticky />
      <Container>
        <h1 className="text-3xl font-extrabold text-center my-6">
          Historia Lotów
        </h1>
        <Footer />
      </Container>
    </>
  );
};

export default flightHistory;
