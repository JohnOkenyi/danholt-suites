'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1a1a2e] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-3xl font-bold">
            <span className="text-white">Danholt</span>
            <span className="text-yellow-500 ml-2">Suites</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-yellow-500 transition-colors duration-200 font-medium">Home</Link>
          <Link href="/rooms" className="hover:text-yellow-500 transition-colors duration-200 font-medium">Rooms</Link>
          <Link href="/restaurant" className="hover:text-yellow-500 transition-colors duration-200 font-medium">Dining</Link>
          <Link href="/facilities" className="hover:text-yellow-500 transition-colors duration-200 font-medium">Facilities</Link>
          <Link href="/contact" className="hover:text-yellow-500 transition-colors duration-200 font-medium">Contact</Link>
          <Link href="/booking">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-200 hover:shadow-lg hover:glow">Book Now</button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#2a2a4e] px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="hover:text-yellow-500 transition-colors duration-200 font-medium py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/rooms" className="hover:text-yellow-500 transition-colors duration-200 font-medium py-2" onClick={() => setIsOpen(false)}>Rooms</Link>
          <Link href="/restaurant" className="hover:text-yellow-500 transition-colors duration-200 font-medium py-2" onClick={() => setIsOpen(false)}>Dining</Link>
          <Link href="/facilities" className="hover:text-yellow-500 transition-colors duration-200 font-medium py-2" onClick={() => setIsOpen(false)}>Facilities</Link>
          <Link href="/contact" className="hover:text-yellow-500 transition-colors duration-200 font-medium py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/booking" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-200">Book Now</button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;