'use client'

import Image from 'next/image'
import Link from 'next/link'

const facilities = [
  {
    id: 1,
    name: 'Conference Hall',
    description: 'State-of-the-art conference facilities with seating for up to 500 guests. Perfect for corporate events, seminars, and celebrations.',
    capacity: '500 people',
    features: ['Audio/Visual Equipment', 'High-Speed WiFi', 'Air Conditioning', 'Catering Services'],
    image: 'https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0003.jpg'
  },
  {
    id: 2,
    name: 'Football Pitch',
    description: 'Professional 5-aside football pitch with artificial turf and floodlights for evening matches.',
    capacity: '10-12 players',
    features: ['Artificial Turf', 'Floodlights', 'Changing Rooms', 'Equipment Storage'],
    image: 'https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0005.jpg'
  },
  {
    id: 3,
    name: 'Children\'s Playground',
    description: 'Safe and fun playground area for children with modern equipment and shaded seating for parents.',
    capacity: 'All ages',
    features: ['Modern Equipment', 'Safety Surfacing', 'Shaded Areas', 'Secure Fencing'],
    image: 'https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0006.jpg'
  }
]

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0003.jpg" alt="Danholt Suites Facilities" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">Our Facilities</h1>
          <p className="text-xl text-gray-200">World-Class Amenities for Every Occasion</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">More Than Just Accommodation</h2>
          <p className="text-lg text-gray-600 leading-relaxed">At Danholt Suites, we offer comprehensive facilities designed to meet all your needs. From business meetings to recreational activities, we have everything you need for a complete and enjoyable stay.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {facilities.map((facility, index) => (
            <div key={facility.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image src={facility.image} alt={facility.name} fill className="object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">{facility.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">Capacity: {facility.capacity}</span>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-amber-600 mr-2">✓</span>{feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">Ready to Book Our Facilities?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us to reserve our facilities for your next event or activity.</p>
          <Link href="/contact" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105">Get in Touch</Link>
        </div>
      </section>
    </div>
  )
}