import Image from "next/image";
import React, { ReactNode } from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between p-10 gap-3">
      <div className="flex flex-col">
        <Image
          src="/assets/logo.webp"
          width="100"
          height="100"
          alt="logo"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">O nas</span>
        <span>Cos tam</span>
        <span>Cos tam</span>
        <span>Cos tam</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">O nas</span>
        <span>Cos tam</span>
        <span>Cos tam</span>
        <span>Cos tam</span>
      </div>
    </footer>
  );
};

export default Footer;
