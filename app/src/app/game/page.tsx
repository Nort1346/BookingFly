import Container from "@/components/Containter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Game: React.FC = () => {
  return (
    <>
      <Navbar sticky />
      <Container>
        <h1 className="text-center font-extrabold text-3xl mt-6">Gra Flappy Plane</h1>
      </Container>
      <div className="w-full h-96 sm:h-screen m-0 sm:mx-auto max-w-[900px] max-h-[700px] mb-14 px-2">
        <iframe
          src={process.env.GAME_URI}
          className="rounded-lg w-full h-full"
        ></iframe>
      </div>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default Game;
