import React from "react";
import { FaPlane } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between p-10 my-15 gap-3">
      <div className="flex flex-col align-middle justify-center">
        <FaPlane className="w-20 h-20" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Kontakt</span>
        <span>Email: contact@bookingfly.com</span>
        <span>Telefon: 123-456-789</span>
        <span>Adres: 1234 Main St, Austin, Texas 78701</span>
      </div>
      <div className="flex flex-col">
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
