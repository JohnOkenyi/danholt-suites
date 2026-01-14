'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-semibold mb-8 text-center">Book Your Stay</h1>
          <div className="bg-white rounded-lg shadow-lg p-12">
            <p className="text-lg text-center text-gray-700 mb-8">Thank you for choosing Danholt Suites. Our team will contact you shortly to confirm your reservation.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-lg px-4 py-3" required />
                <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-lg px-4 py-3" required />
                <input type="tel" placeholder="Phone Number" className="border border-gray-300 rounded-lg px-4 py-3" required />
                <input type="date" className="border border-gray-300 rounded-lg px-4 py-3" required />
              </div>
              <textarea placeholder="Special Requests" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3"></textarea>
              <div className="flex gap-4 justify-center">
                <Link href="/">
                  <button type="button" className="bg-gray-400 text-white px-8 py-3 rounded-lg hover:bg-gray-500">Back Home</button>
                </Link>
                <button type="submit" className="bg-[#1a1a2e] text-white px-8 py-3 rounded-lg hover:bg-[#2a2a4e]">Submit Booking</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookingPage;
