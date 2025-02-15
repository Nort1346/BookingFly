import React from "react";
import { FaPlane } from "react-icons/fa";

const Footer: React.FC = () => {

  return (
    <footer className="flex justify-between p-10 my-15 gap-3">
      <div className="flex flex-col align-middle justify-center">
        <FaPlane className="w-20 h-20" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">O nas</span>
        <span>Cos tam</span>
        <span>Cos tam</span>
        <span>Cos tam</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Contact</span>
        <span>Cos tam</span>
        <span>Cos tam</span>
        <span>Cos tam</span>
      </div>
    </footer>
  );
};

export default Footer;
