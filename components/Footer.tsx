import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a2e] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              <span>Danholt</span>
              <span className="text-yellow-500 ml-2">Suites</span>
            </h3>
            <p className="text-gray-400">Where every moment is crafted with intention. Experience luxury redefined.</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-yellow-500 transition-colors">Rooms</Link></li>
              <li><Link href="/facilities" className="hover:text-yellow-500 transition-colors">Facilities</Link></li>
              <li><Link href="/restaurant" className="hover:text-yellow-500 transition-colors">Dining</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/booking" className="hover:text-yellow-500 transition-colors">Room Reservations</Link></li>
              <li><Link href="/booking" className="hover:text-yellow-500 transition-colors">Restaurant Booking</Link></li>
              <li><Link href="/facilities" className="hover:text-yellow-500 transition-colors">Facility Rentals</Link></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Concierge Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-yellow-500 flex-shrink-0 mt-1" />
                <span>
                  #3 Iyabo, Obeyode Street<br />
                  Dogbano, Jikwoyi, Abuja
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-500 flex-shrink-0" />
                <a href="tel:07046080351" className="hover:text-yellow-500 transition-colors">07046080351</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-yellow-500 flex-shrink-0" />
                <a href="mailto:reservations@danholt.com" className="hover:text-yellow-500 transition-colors">reservations@danholt.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            © {currentYear} Danholt Suites. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;