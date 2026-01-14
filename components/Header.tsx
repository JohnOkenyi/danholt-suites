'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a1a2e] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-white">Danholt</span>
              <span className="text-yellow-400 ml-2">Suites</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/rooms" className="hover:text-yellow-400 transition-colors">Rooms</Link>
            <Link href="/dining" className="hover:text-yellow-400 transition-colors">Dining</Link>
            <Link href="/facilities" className="hover:text-yellow-400 transition-colors">Facilities</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
          </nav>

          {/* Book Now Button */}
          <Link href="/booking" className="hidden md:block bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-yellow-400">Home</Link>
            <Link href="/rooms" className="block py-2 hover:text-yellow-400">Rooms</Link>
            <Link href="/dining" className="block py-2 hover:text-yellow-400">Dining</Link>
            <Link href="/facilities" className="block py-2 hover:text-yellow-400">Facilities</Link>
            <Link href="/contact" className="block py-2 hover:text-yellow-400">Contact</Link>
            <Link href="/booking" className="block bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center">
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}