"use client"
import Container from "@/components/Containter";
import Navbar from "@/components/Navbar";
import React from "react";

const Form: React.FC = () => {
  return (
    <>
      <Navbar sticky />
      <Container>
        <h1>Formularz kontaktowy</h1>
      </Container>
    </>
  );
};

export default Form;
