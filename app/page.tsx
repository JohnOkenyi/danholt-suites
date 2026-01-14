'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoomCard from '@/components/RoomCard';

interface Room {
  id: number;
  name: string;
  price: number;
  currency?: string;
  image: string;
  description?: string;
  amenities?: string[];
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const heroImages = [
    '/images/hotel-exterior.jpg',
    '/images/rooms/deluxe.jpg',
    '/images/sports-facility.jpg',
  ];

  const featuredRooms: Room[] = [
    {
      id: 1,
      name: 'Deluxe',
      price: 15000,
      currency: '₦',
      image: '/images/rooms/deluxe.jpg',
      description: 'Luxurious suites with modern facilities',
      amenities: ['Air Conditioning', 'Free WiFi', 'Mini Bar', 'Smart TV'],
    },
    {
      id: 2,
      name: 'Executive Deluxe',
      price: 20000,
      currency: '₦',
      image: '/images/rooms/executive-deluxe.jpg',
      description: 'Premium suite with exclusive amenities',
      amenities: ['Air Conditioning', 'Free WiFi', 'Jacuzzi', '24/7 Service'],
    },
    {
      id: 3,
      name: 'Standard',
      price: 10000,
      currency: '₦',
      image: '/images/rooms/standard.jpg',
      description: 'Comfortable room for your stay',
      amenities: ['Air Conditioning', 'Free WiFi', 'Shower', 'Work Desk'],
    },
  ];

  const promises = [
    {
      title: 'Personalized Service',
      description: 'Every preference remembered',
    },
    {
      title: '24/7 Concierge',
      description: 'Always at your service',
    },
    {
      title: 'Seamless Experience',
      description: 'From booking to checkout',
    },
    {
      title: 'Exclusive Access',
      description: 'Members-only privileges',
    },
  ];

  const amenities = [
    { icon: '🛏️', title: 'Luxury Rooms', description: '' },
    { icon: '🍽️', title: 'Nigerian Cuisine', description: '' },
    { icon: '⚽', title: 'Sports Facilities', description: '' },
    { icon: '⚡', title: '24/7 Electricity', description: '' },
    { icon: '📡', title: 'Free WiFi', description: '' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />

      {/* Hero Section with Slideshow */}
      <section className="relative h-[85vh] overflow-hidden bg-black">
        {/* Image Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Hotel view ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-semibold mb-6 drop-shadow-lg">
            Here is a tribute to good living!
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-2xl font-light mb-4 drop-shadow-lg">
              True luxury isn't designed.
            </p>
            <p className="text-lg md:text-2xl font-light drop-shadow-lg">
              It's felt.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Amenities Cards Section */}
      <section className="py-20 px-4 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-amber-500 text-sm mb-8 tracking-widest font-semibold">
            WHERE EVERY NEED IS ANTICIPATED
          </p>
          <h2 className="text-center text-white text-3xl md:text-4xl font-light mb-16">
            Before you even ask.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-[#2a2a3e] rounded-3xl p-8 text-center text-white hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-lg font-semibold">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 text-sm mb-4 tracking-widest font-semibold">
            THE DANHOLT SUITES PROMISE
          </p>
          <h2 className="text-center text-4xl md:text-5xl font-light mb-4 text-gray-900">
            Excellence in every detail.
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            At Danholt Suites, service stops imitating and starts caring.
          </p>

          {/* Promise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="text-center hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {promise.title}
                </h3>
                <p className="text-gray-600">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 text-sm mb-4 tracking-widest font-semibold">
            DISCOVER
          </p>
          <h2 className="text-center text-4xl md:text-5xl font-light mb-16 text-gray-900">
            Crafted Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Rooms Card */}
            <Link
              href="/rooms"
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64 bg-gray-300 overflow-hidden">
                <Image
                  src="/images/rooms/deluxe.jpg"
                  alt="Rooms & Suites"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Rooms & Suites
                </h3>
                <p className="text-gray-600 mb-4">
                  Luxurious suites with modern facilities in a serene environment
                </p>
                <span className="text-amber-600 font-semibold hover:text-amber-700">
                  Explore →
                </span>
              </div>
            </Link>

            {/* Restaurant Card */}
            <Link
              href="/restaurant"
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64 bg-gray-300 overflow-hidden">
                <Image
                  src="/images/restaurant.jpg"
                  alt="Restaurant & Bar"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Restaurant & Bar
                </h3>
                <p className="text-gray-600 mb-4">
                  Delicious Nigerian cuisines and exotic drinks
                </p>
                <span className="text-amber-600 font-semibold hover:text-amber-700">
                  Explore →
                </span>
              </div>
            </Link>

            {/* Sports Card */}
            <Link
              href="/facilities"
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64 bg-gray-300 overflow-hidden">
                <Image
                  src="/images/sports-facility.jpg"
                  alt="Sports & Facilities"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Sports & Facilities
                </h3>
                <p className="text-gray-600 mb-4">
                  World class 5-aside football pitch and conference hall
                </p>
                <span className="text-amber-600 font-semibold hover:text-amber-700">
                  Explore →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-24 px-4 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            This is the next evolution of hospitality,
          </h2>
          <p className="text-2xl text-gray-700 mb-12 font-light">
            where luxury becomes personal.
          </p>
          <p className="text-xl text-gray-600 mb-4 font-light">
            The future of hospitality isn't impersonal.
          </p>
          <p className="text-3xl text-gray-900 font-semibold">
            It's human.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/booking"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
