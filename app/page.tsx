import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RoomCard from '@/components/RoomCard'

export default function Home() {
  const featuredRooms = [
    {
      id: 1,
      name: 'Deluxe Suite',
      description: 'Spacious suite with stunning city views',
      price: 299,
      image: '/images/deluxe-suite.jpg',
      amenities: ['King Bed', 'City View', 'Mini Bar', 'Free WiFi']
    },
    {
      id: 2,
      name: 'Executive Room',
      description: 'Perfect for business travelers',
      price: 199,
      image: '/images/executive-room.jpg',
      amenities: ['Queen Bed', 'Work Desk', 'Coffee Machine', 'Free WiFi']
    },
    {
      id: 3,
      name: 'Presidential Suite',
      description: 'Ultimate luxury experience',
      price: 599,
      image: '/images/presidential-suite.jpg',
      amenities: ['King Bed', 'Living Room', 'Jacuzzi', 'Butler Service']
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Danholt Suites"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Danholt Suites</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Experience luxury and comfort in the heart of the city</p>
          <Link href="/rooms" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Suites</h2>
          <p className="text-center text-gray-600 mb-12">Discover our luxurious accommodations</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">World-Class Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏊</div>
              <h3 className="text-xl font-semibold mb-2">Swimming Pool</h3>
              <p className="text-gray-600">Relax in our rooftop pool</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
              <p className="text-gray-600">Gourmet restaurant & bar</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💆</div>
              <h3 className="text-xl font-semibold mb-2">Spa & Wellness</h3>
              <p className="text-gray-600">Full-service spa treatments</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏋️</div>
              <h3 className="text-xl font-semibold mb-2">Fitness Center</h3>
              <p className="text-gray-600">24/7 modern gym facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8">Book your stay today and enjoy exclusive benefits</p>
          <Link href="/contact" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
