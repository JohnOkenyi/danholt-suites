'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const RoomsPage = () => {
  const rooms = [
    { id: 1, name: 'Standard Room', price: '₦10,000', image: '/images/standard-room.jpg', capacity: '1-2 guests', description: 'Comfortable accommodation with essential amenities' },
    { id: 2, name: 'Deluxe Room', price: '₦15,000', image: '/images/deluxe-room.jpg', capacity: '2-3 guests', description: 'Premium room with enhanced comfort and views' },
    { id: 3, name: 'Executive Suite', price: '₦20,000', image: '/images/executive-suite.jpg', capacity: '3-4 guests', description: 'Spacious suite with luxury amenities and premium service' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-semibold mb-4 text-center">Luxury Rooms & Suites</h1>
          <p className="text-xl text-center text-gray-600 mb-16">Experience comfort and elegance in our beautifully appointed accommodations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="relative h-64 w-full">
                  <Image src={room.image} alt={room.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{room.capacity}</p>
                  <p className="text-gray-700 mb-4">{room.description}</p>
                  <p className="text-amber-600 font-bold text-xl mb-6">{room.price}/night</p>
                  <Link href="/booking">
                    <button className="w-full bg-[#1a1a2e] text-white py-3 rounded-lg hover:bg-[#2a2a4e] transition-colors duration-200 font-semibold">Book Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RoomsPage;
