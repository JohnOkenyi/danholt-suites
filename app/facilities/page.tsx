'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FacilitiesPage = () => {
  const facilities = [
    { id: 1, name: 'Conference Hall', capacity: '500 people', description: 'State-of-the-art conference facilities with full AV equipment' },
    { id: 2, name: '5-Aside Football Pitch', capacity: 'Full size', description: 'Professional football pitch for tournaments and recreational play' },
    { id: 3, name: "Children's Playground", capacity: 'All ages', description: 'Safe and fun playground with modern equipment' },
    { id: 4, name: 'Fitness Center', capacity: '50 people', description: 'Fully equipped gym with modern exercise machines' },
    { id: 5, name: 'Swimming Pool', capacity: '200 people', description: 'Olympic-sized swimming pool with professional coaches' },
    { id: 6, name: 'Event Grounds', capacity: '1000+ people', description: 'Large outdoor space for events and gatherings' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-semibold mb-4 text-center">World-Class Facilities</h1>
          <p className="text-xl text-center text-gray-600 mb-16">Experience our premium amenities and recreational spaces</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div key={facility.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-[#1a1a2e] to-[#2a2a4e]"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{facility.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">Capacity: {facility.capacity}</p>
                  <p className="text-gray-700">{facility.description}</p>
                  <button className="mt-4 w-full bg-[#1a1a2e] text-white px-4 py-2 rounded-lg hover:bg-[#2a2a4e] transition-colors">Book Now</button>
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

export default FacilitiesPage;
