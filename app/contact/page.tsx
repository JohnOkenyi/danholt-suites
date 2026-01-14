'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-semibold mb-8 text-center">Get in Touch</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-amber-600 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-gray-700">#3 Iyabo, Obeyode Street<br />Dogbano, Jikwoyi, Abuja, Nigeria</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-amber-600 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-700"><a href="tel:+2347046080351" className="hover:text-amber-600">+234 704 608 0351</a></p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-amber-600 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-700"><a href="mailto:reservations@danholt.com" className="hover:text-amber-600">reservations@danholt.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
                <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
                <input type="text" placeholder="Subject" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
                <textarea placeholder="Message" rows={6} className="w-full border border-gray-300 rounded-lg px-4 py-3" required></textarea>
                <button type="submit" className="w-full bg-[#1a1a2e] text-white px-6 py-3 rounded-lg hover:bg-[#2a2a4e] transition-colors font-semibold">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
