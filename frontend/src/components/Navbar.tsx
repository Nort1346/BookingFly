import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black-200 p-4 shadow-md">
      <div className="container text-lg mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          BookingFly
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/reservation" className="text-white hover:text-gray-300">Reservation</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
