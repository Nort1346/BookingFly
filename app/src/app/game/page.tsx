"use client";
import Container from "@/components/Containter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Form: React.FC = () => {
  return (
    <>
      <Navbar sticky />
      <Container>
        <h1>Gra</h1>
      <Footer />
      </Container>
    </>
  );
};

export default Form;
