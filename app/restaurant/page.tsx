'use client'

import Image from 'next/image'
import Link from 'next/link'

const menuItems = [
  {
    id: 1,
    name: 'Jollof Rice & Chicken',
    category: 'Main Course',
    description: 'Authentic Nigerian jollof rice served with grilled chicken',
    price: 3500,
    image: 'https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0006.jpg'
  },
  {
    id: 2,
    name: 'Egusi Soup with Pounded Yam',
    category: 'Main Course',
    description: 'Traditional Egusi soup with smooth pounded yam',
    price: 4000,
    image: 'https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0005.jpg'
  },
  {
    id: 3,
    name: 'Pepper Soup',
    category: 'Appetizer',
    description: 'Spicy Nigerian pepper soup with assorted meat',
    price: 2500,
    image: 'https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0003.jpg'
  },
  {
    id: 4,
    name: 'Suya Platter',
    category: 'Appetizer',
    description: 'Grilled spicy beef skewers with onions and peppers',
    price: 3000,
    image: 'https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0006.jpg'
  },
  {
    id: 5,
    name: 'Ofada Rice & Ayamase',
    category: 'Main Course',
    description: 'Local rice with designer stew',
    price: 3800,
    image: 'https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0005.jpg'
  },
  {
    id: 6,
    name: 'Chapman',
    category: 'Beverage',
    description: 'Refreshing Nigerian cocktail',
    price: 1500,
    image: 'https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0003.jpg'
  }
]

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://danholtsuites.com/wp-content/uploads/2024/12/IMG-20241213-WA0006.jpg"
          alt="Danholt Suites Restaurant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">Restaurant & Bar</h1>
          <p className="text-xl text-gray-200">Authentic Nigerian Cuisine</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Culinary Excellence</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience the rich flavors of Nigeria at our restaurant. From traditional dishes to contemporary 
            interpretations, our chefs use only the finest ingredients to create memorable dining experiences.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-800 text-center mb-12">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <p className="text-2xl font-bold text-amber-600">₦{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-gray-800 text-center mb-16">Dining Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Locally sourced, premium quality</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Chefs</h3>
              <p className="text-gray-600">Experienced professionals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Elegant Ambiance</h3>
              <p className="text-gray-600">Beautiful atmosphere</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">Reserve Your Table</h2>
          <p className="text-lg text-gray-600 mb-8">Join us for an unforgettable dining experience.</p>
          <Link href="/booking" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105">Make a Reservation</Link>
        </div>
      </section>
    </div>
  )
}