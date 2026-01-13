import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RoomCard from '@/components/RoomCard'

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Suite',
      description: 'Spacious suite with stunning city views and premium amenities',
      price: 299,
      image: '/images/deluxe-suite.jpg',
      amenities: ['King Bed', 'City View', 'Mini Bar', 'Free WiFi', 'Room Service', 'Smart TV']
    },
    {
      id: 2,
      name: 'Executive Room',
      description: 'Perfect for business travelers with work desk and high-speed internet',
      price: 199,
      image: '/images/executive-room.jpg',
      amenities: ['Queen Bed', 'Work Desk', 'Coffee Machine', 'Free WiFi', 'Smart TV', 'Safe']
    },
    {
      id: 3,
      name: 'Presidential Suite',
      description: 'Ultimate luxury experience with separate living area',
      price: 599,
      image: '/images/presidential-suite.jpg',
      amenities: ['King Bed', 'Living Room', 'Jacuzzi', 'Butler Service', 'Balcony', 'Premium Bar']
    },
    {
      id: 4,
      name: 'Standard Room',
      description: 'Comfortable and affordable room with essential amenities',
      price: 149,
      image: '/images/standard-room.jpg',
      amenities: ['Double Bed', 'Free WiFi', 'TV', 'Air Conditioning', 'Private Bathroom']
    },
    {
      id: 5,
      name: 'Family Suite',
      description: 'Spacious suite perfect for families with connecting rooms',
      price: 399,
      image: '/images/family-suite.jpg',
      amenities: ['2 Bedrooms', 'Living Area', 'Kitchenette', 'Free WiFi', 'Kids Amenities']
    },
    {
      id: 6,
      name: 'Honeymoon Suite',
      description: 'Romantic suite with luxury amenities for special occasions',
      price: 499,
      image: '/images/honeymoon-suite.jpg',
      amenities: ['King Bed', 'Jacuzzi', 'Champagne', 'Rose Petals', 'City View', 'Premium Toiletries']
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/rooms-header.jpg"
            alt="Our Rooms"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Rooms & Suites</h1>
          <p className="text-xl md:text-2xl max-w-2xl">Discover the perfect accommodation for your stay</p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8">Check availability and special offers</p>
          <Link
            href="/booking"
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
