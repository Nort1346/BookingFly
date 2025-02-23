import React from "react";
import { FaPlane } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-5 md:p-10 my-6 md:my-15 gap-3">
      <div className="flex flex-col items-center justify-center text-center mb-5 md:w-1/3 md:mb-0">
        <span className="font-extrabold">BookingFly</span>
        <FaPlane className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <div className="flex flex-col justify-center text-center md:w-1/3 break-all">
        <span className="font-bold">Kontakt</span>
        <span>Email: contact@bookingfly.com</span>
        <span>Telefon: 123-456-789</span>
        <span>Adres: 1234 Main St, Austin, Texas 78701</span>
      </div>
      <div className="flex flex-col justify-center text-center md:w-1/3">
        <span className="font-bold">Social Media</span>
        <span>
          <a
            href="https://facebook.com/bookingfly"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </span>
        <span>
          <a
            href="https://twitter.com/bookingfly"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </span>
        <span>
          <a
            href="https://linkedin.com/company/bookingfly"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
