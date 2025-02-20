"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Containter";

const Checkout: React.FC = () => {
  const params = useParams();
  const slug = params.slug;
  return (
    <>
      <Navbar sticky />
      <Container>
        <h1>{slug}</h1>
        <Footer />
      </Container>
    </>
  );
};

export default Checkout;
