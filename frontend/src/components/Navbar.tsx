import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black-200 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          BookingFly
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
