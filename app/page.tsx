'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/images/hotel-exterior.jpg',
    '/images/deluxe-room.jpg',
    '/images/restaurant.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={heroImages[currentSlide]}
            alt="Danholt Suites"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-6xl font-semibold mb-4 animate-fadeIn">Here is a tribute to good living!</h1>
          <p className="text-xl font-light max-w-2xl">True luxury isn't designed. It's felt.</p>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Where every need is anticipated.</h2>
          <p className="text-lg text-gray-600">Before you even ask.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Luxury Rooms</h3>
            <p className="text-gray-700 leading-relaxed">Experience unparalleled comfort in our expertly designed suites, each offering modern amenities and serene ambiance.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Nigerian Cuisine</h3>
            <p className="text-gray-700 leading-relaxed">Savor authentic Nigerian culinary creations prepared by our world-class chefs using the finest ingredients.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Sports Facilities</h3>
            <p className="text-gray-700 leading-relaxed">Maintain your fitness with our state-of-the-art facilities including a 5-aside football pitch and more.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">24/7 Connectivity</h3>
            <p className="text-gray-700 leading-relaxed">Stay connected with complimentary high-speed WiFi and 24/7 electricity throughout your stay.</p>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-32 px-4 sm:px-8 lg:px-16 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-white mb-4">The Danholt Suites Promise.</h2>
            <p className="text-xl text-gray-300">Excellence in every detail.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#2a2a4e] p-8 rounded-lg hover:transform hover:translate-y-[-8px] transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Personalized Service</h3>
              <p className="text-gray-400">Every preference remembered</p>
            </div>
            <div className="bg-[#2a2a4e] p-8 rounded-lg hover:transform hover:translate-y-[-8px] transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Concierge</h3>
              <p className="text-gray-400">Always at your service</p>
            </div>
            <div className="bg-[#2a2a4e] p-8 rounded-lg hover:transform hover:translate-y-[-8px] transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Seamless Experience</h3>
              <p className="text-gray-400">From booking to checkout</p>
            </div>
            <div className="bg-[#2a2a4e] p-8 rounded-lg hover:transform hover:translate-y-[-8px] transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Exclusive Access</h3>
              <p className="text-gray-400">Members-only privileges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crafted Experiences Section */}
      <section className="py-32 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Crafted Experiences</h2>
            <p className="text-xl text-gray-600">DISCOVER</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/rooms">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer h-full">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/deluxe-room.jpg"
                    alt="Rooms & Suites"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Rooms & Suites</h3>
                  <p className="text-gray-600 mb-6">Luxurious suites with modern facilities in a serene environment</p>
                  <span className="text-amber-600 font-semibold hover:text-amber-700">Explore →</span>
                </div>
              </div>
            </Link>
            <Link href="/restaurant">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer h-full">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/restaurant.jpg"
                    alt="Restaurant & Bar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Restaurant & Bar</h3>
                  <p className="text-gray-600 mb-6">Delicious Nigerian cuisines and exotic drinks</p>
                  <span className="text-amber-600 font-semibold hover:text-amber-700">Explore →</span>
                </div>
              </div>
            </Link>
            <Link href="/facilities">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer h-full">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/sports-facility.jpg"
                    alt="Sports & Facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Sports & Facilities</h3>
                  <p className="text-gray-600 mb-6">World class 5-aside football pitch and conference hall</p>
                  <span className="text-amber-600 font-semibold hover:text-amber-700">Explore →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-32 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">This is the next evolution of hospitality,</h2>
          <p className="text-xl text-gray-600 mb-12">where luxury becomes personal.</p>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">The future of hospitality isn't impersonal. It's human.</p>
          <Link href="/booking">
            <button className="bg-[#1a1a2e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a2a4e] transition-colors duration-300 glow-on-hover">
              Book Your Stay
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;