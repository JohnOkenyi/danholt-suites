'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 bg-[#2a2a3e]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1 text-lg md:text-xl font-light">
              <span className="text-white">Danholt</span>
              <span className="text-[#d4af37]">Suites</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#d4af37] text-sm font-light hover:text-[#e5c158] transition-colors">
                Home
              </Link>
              <Link href="/rooms" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                Rooms
              </Link>
              <Link href="/facilities" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                Facilities
              </Link>
              <Link href="/dining" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                Dining
              </Link>
              <Link href="/contact" className="text-white/80 text-sm font-light hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            {/* Book Now Button (Desktop) */}
            <Link
              href="/booking"
              className="hidden md:block bg-[#d4af37] hover:bg-[#e5c158] text-[#1a1a2e] px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2a2a3e]/98 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-[#d4af37] text-base font-light py-2">
                Home
              </Link>
              <Link href="/rooms" className="block text-white/80 text-base font-light py-2">
                Rooms
              </Link>
              <Link href="/facilities" className="block text-white/80 text-base font-light py-2">
                Facilities
              </Link>
              <Link href="/dining" className="block text-white/80 text-base font-light py-2">
                Dining
              </Link>
              <Link href="/contact" className="block text-white/80 text-base font-light py-2">
                Contact
              </Link>
              <Link
                href="/booking"
                className="block bg-[#d4af37] text-[#1a1a2e] px-6 py-3 rounded-full text-base font-medium text-center mt-4"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-[calc(100vh-5rem)] items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight max-w-5xl"
        >
          Here is a tribute to good living!
        </motion.h1>
      </div>
    </section>
  );
}
