'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-amber-600">Danholt Suites</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Home
            </Link>
            <Link href="/rooms" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Rooms & Suites
            </Link>
            <Link href="/amenities" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Amenities
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium transition">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Contact
            </Link>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link
              href="/booking"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-amber-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="block py-2 text-gray-700 hover:text-amber-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rooms & Suites
            </Link>
            <Link
              href="/amenities"
              className="block py-2 text-gray-700 hover:text-amber-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-amber-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-amber-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="block mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
