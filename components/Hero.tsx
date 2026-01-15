'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/hero-1.jpg', // Image 1: Three people at hotel entrance
  '/hero-2.jpg', // Image 2: Family sitting indoors
  '/hero-3.jpg', // Image 3: Hotel exterior with courtyard
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 opacity-0 hover:opacity-100 transition-opacity group"
        aria-label="Previous image"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-6 h-6 text-white" />
        </div>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 opacity-0 hover:opacity-100 transition-opacity group"
        aria-label="Next image"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors">
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      </button>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2b2d42]'
            : 'bg-[#2b2d42]/95 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1 text-xl font-light">
              <span className="text-white">Danholt</span>
              <span className="text-[#d4af37]">Suites</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
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
              className="hidden md:block bg-[#d4af37] hover:bg-[#e4b63a] text-[#2b2d42] px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105"
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
          <div className="md:hidden bg-[#2b2d42]/98 backdrop-blur-sm border-t border-white/10">
            <div className="px-6 py-6 space-y-4">
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
                className="block bg-[#d4af37] text-[#2b2d42] px-6 py-3 rounded-full text-base font-medium text-center mt-4"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-screen items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl drop-shadow-lg"
        >
          Here is a tribute to good living!
        </motion.h1>
      </div>
    </section>
  );
}
