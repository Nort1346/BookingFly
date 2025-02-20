import Container from "@/components/Containter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Game: React.FC = () => {
  return (
    <>
      <Navbar sticky />
      <div className="w-full h-screen m-0 sm:mx-auto max-w-[900px] max-h-[700px] my-14">
        <iframe
          src={process.env.GAME_URI}
          className="rounded-lg w-full h-full scale-75 2xl:scale-110 lg:scale-100 md:scale-75"
        ></iframe>
      </div>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default Game;
