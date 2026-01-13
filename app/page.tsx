import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RoomCard from '@/components/RoomCard'

export default function Home() {
  const featuredRooms = [
    {
      id: 1,
      name: 'Deluxe',
      price: 15000,
      currency: '₦',
      image: '/images/rooms/deluxe.jpg',
    },
    {
      id: 2,
      name: 'Executive Deluxe',
      price: 20000,
      currency: '₦',
      image: '/images/rooms/executive-deluxe.jpg',
    },
    {
      id: 3,
      name: 'Standard',
      price: 10000,
      currency: '₦',
      image: '/images/rooms/standard.jpg',
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Check-in/Check-out */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/playground-hero.jpg"
            alt="Danholt Suites Playground"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="bg-black/70 p-8 rounded-lg flex gap-4 text-white">
            <div className="flex flex-col items-center">
              <label className="text-sm mb-2">CHECK-IN</label>
              <input 
                type="date" 
                className="bg-transparent border-b border-white text-white text-center pb-2 outline-none"
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="text-sm mb-2">CHECK-OUT</label>
              <input 
                type="date" 
                className="bg-transparent border-b border-white text-white text-center pb-2 outline-none"
              />
            </div>
            <Link 
              href="/rooms" 
              className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded text-sm font-semibold self-end transition"
            >
              CHECK<br/>AVAILABILITY
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-sm mb-2 tracking-wider">DANHOLT SUITES</p>
            <h2 className="text-4xl font-light mb-6">Here is a tribute to good living!</h2>
            <p className="text-gray-600 leading-relaxed">
              Danholt Suites is a home away from home where comfort is guaranteed, our services are top-notch. 
              Our luxurious suites are well equipped with modern facilities in a serene environment. We also have 
              a world class 5-aside football pitch, we provide internet service and 24 hour electricity supply, 
              well-spaced conference hall with a sitting capacity of up to 500 people and an affordable children's 
              playground. We offer delicious cuisines from our restaurant and exotic drinks from our bar. 
              Welcome to DANHOLT SUITES we are located at #3 Iyabo Okeyode street, beside Collinear hospital, 
              Jikwoyi Phase 3, Abuja.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/hotel-exterior.jpg"
              alt="Danholt Suites Building"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Sports Facilities Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 order-2 md:order-1">
              <Image
                src="/images/sports-facility.jpg"
                alt="Sports Facilities"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-400 text-xs mb-2 tracking-wider">WORLD CLASS SPORTS FACILITIES</p>
              <h3 className="text-3xl font-light mb-4">World Class Sports Facilities</h3>
              <p className="text-gray-600 leading-relaxed">
                We have a mini stadium capable of hosting football, lawn tennis and athletics, etc.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 text-xs mb-2 tracking-wider">ULTRA MODERN FURNISHING</p>
              <h3 className="text-3xl font-light mb-4">Ultra Modern Furnishing</h3>
              <p className="text-gray-600 leading-relaxed">
                Danholt Suites is outfitted with best of furnishing, every piece carefully selected to 
                portray luxury and elegance
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/room-interior.jpg"
                alt="Modern Furnishing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm text-center mb-2 tracking-wider">DANHOLT SUITES</p>
          <h2 className="text-4xl font-light text-center mb-12">Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm text-center mb-2 tracking-wider">DANHOLT SUITES</p>
          <h2 className="text-4xl font-light text-center mb-12">Unpretentious Luxury</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Modern Furnishing</h3>
              <p className="text-gray-600 text-sm">Exquisite furnishing that embody luxury.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Free WIFI</h3>
              <p className="text-gray-600 text-sm">Free uninterrupted WIFI connection.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Serene</h3>
              <p className="text-gray-600 text-sm">Danholt Suites is located at Jikwoyi, a quiet and peaceful location at the heart of Abuja.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Mini Bar</h3>
              <p className="text-gray-600 text-sm">Outfitted with an Exclusive Mini Bar</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">24/7 Electricity</h3>
              <p className="text-gray-600 text-sm">Enjoy 24/7 Uninterupted Power Supply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm text-center mb-2 tracking-wider">GET IN TOUCH</p>
          <h2 className="text-4xl font-light text-center mb-12">Drop Us A Line</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-2"><strong>Address:</strong></p>
              <p className="text-gray-600 mb-4">#3 Iyabo, Obeyode Street (Beside Collinear Hospital) Dogbano, Jikwoyi, Phase 3</p>
              <p className="mb-2"><strong>City:</strong></p>
              <p className="text-gray-600 mb-4">Abuja</p>
              <p className="text-2xl font-bold text-amber-600">07046080351</p>
            </div>
            <div>
              {/* Contact form will be added later */}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Link key={i} href="/gallery" className="relative h-24 block hover:opacity-75 transition">
                <Image
                  src={`/images/gallery/${i}.jpg`}
                  alt={`Gallery image ${i}`}
                  fill
                  className="object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
