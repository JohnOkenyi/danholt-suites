'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/images/hotel-exterior.jpg',
    '/images/rooms/deluxe.jpg',
    '/images/sports-facility.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-[#F5F5F0] min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#2a2a3e] text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-white text-2xl font-semibold">Danholt</span>
            <span className="text-[#D4AF37] text-2xl font-semibold">Suites</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="hover:text-[#D4AF37] transition">Home</Link>
            <Link href="/rooms" className="hover:text-[#D4AF37] transition">Rooms</Link>
            <Link href="/restaurant" className="hover:text-[#D4AF37] transition">Dining</Link>
            <Link href="/facilities" className="hover:text-[#D4AF37] transition">Facilities</Link>
            <Link href="/booking" className="bg-[#D4AF37] text-gray-900 px-6 py-2 rounded hover:bg-[#E5C158] transition">Book</Link>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={img}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover w-full h-full"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-white text-6xl md:text-7xl font-semibold leading-tight mb-8 drop-shadow-2xl max-w-5xl">
            Here is a tribute to good living!
          </h1>
          <div className="flex gap-2 justify-center mt-12">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 bg-white' : 'w-3 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="w-full py-32 px-6 bg-[#F5F5F0]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">True luxury isn't designed.</p>
          <p className="text-lg text-gray-600 leading-relaxed mb-16">It's felt.</p>
          <p className="text-base text-gray-500 leading-relaxed max-w-3xl mx-auto">It's the warmth of a genuine welcome. It's the anticipation of your unspoken needs. It's the thousand invisible gestures that make you feel at home.</p>
        </div>
      </section>

      {/* AMENITIES SECTION */}
      <section className="w-full py-32 px-6 bg-[#2a2a3e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-widest font-semibold mb-6">WHERE EVERY NEED IS ANTICIPATED</p>
            <h2 className="text-white text-4xl font-light">Before you even ask.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: '🛏️', label: 'Luxury Rooms' },
              { icon: '🍽️', label: 'Nigerian Cuisine' },
              { icon: '⚽', label: 'Sports Facilities' },
              { icon: '⚡', label: '24/7 Electricity' },
              { icon: '📡', label: 'Free WiFi' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1a1a2e] rounded-3xl p-12 text-center text-white hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE SECTION */}
      <section className="w-full py-32 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gray-400 text-sm tracking-widest font-semibold mb-6">THE DANHOLT SUITES PROMISE</p>
            <h2 className="text-gray-900 text-5xl font-light mb-6">Excellence in every detail.</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">At Danholt Suites, service stops imitating and starts caring.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Personalized Service', desc: 'Every preference remembered' },
              { title: '24/7 Concierge', desc: 'Always at your service' },
              { title: 'Seamless Experience', desc: 'From booking to checkout' },
              { title: 'Exclusive Access', desc: 'Members-only privileges' },
            ].map((promise, idx) => (
              <div key={idx} className="text-center group hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-gray-900 text-xl font-semibold mb-3 group-hover:text-[#D4AF37]">{promise.title}</h3>
                <p className="text-gray-600">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE CARDS */}
      <section className="w-full py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gray-400 text-sm tracking-widest font-semibold mb-6">DISCOVER</p>
            <h2 className="text-gray-900 text-5xl font-light">Crafted Experiences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Rooms & Suites', desc: 'Luxurious suites with modern facilities in a serene environment', image: '/images/rooms/deluxe.jpg', href: '/rooms' },
              { title: 'Restaurant & Bar', desc: 'Delicious Nigerian cuisines and exotic drinks', image: '/images/restaurant.jpg', href: '/restaurant' },
              { title: 'Sports & Facilities', desc: 'World class 5-aside football pitch and conference hall', image: '/images/sports-facility.jpg', href: '/facilities' },
            ].map((exp, idx) => (
              <Link key={idx} href={exp.href} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden bg-gray-300">
                  <Image src={exp.image} alt={exp.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 bg-gray-50">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{exp.title}</h3>
                  <p className="text-gray-600 mb-6">{exp.desc}</p>
                  <span className="text-[#D4AF37] font-semibold hover:text-[#E5C158]">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NARRATIVE SECTION */}
      <section className="w-full py-32 px-6 bg-[#F5F5F0]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-gray-900 text-5xl font-light leading-tight mb-8">This is the next evolution of hospitality,</h2>
          <p className="text-gray-700 text-2xl font-light mb-12">where luxury becomes personal.</p>
          <p className="text-gray-600 text-xl font-light mb-6">The future of hospitality isn't impersonal.</p>
          <p className="text-gray-900 text-3xl font-semibold">It's human.</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/booking" className="inline-block px-12 py-4 bg-[#D4AF37] hover:bg-[#E5C158] text-gray-900 font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2a2a3e] text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white font-semibold mb-4">EXPLORE</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
                <li><Link href="/rooms" className="hover:text-[#D4AF37] transition">Rooms</Link></li>
                <li><Link href="/facilities" className="hover:text-[#D4AF37] transition">Facilities</Link></li>
                <li><Link href="/restaurant" className="hover:text-[#D4AF37] transition">Dining</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/booking" className="hover:text-[#D4AF37] transition">Room Reservations</Link></li>
                <li><Link href="/restaurant" className="hover:text-[#D4AF37] transition">Restaurant Booking</Link></li>
                <li><Link href="/facilities" className="hover:text-[#D4AF37] transition">Facility Rentals</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">CONTACT</h3>
              <ul className="space-y-2 text-sm">
                <li>#3 Iyabo, Obeyode Street</li>
                <li>Dogbano, Jikwoyi, Abuja</li>
                <li>07046080351</li>
                <li>reservations@danholt.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-sm">
            <p>© 2026 Danholt Suites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
