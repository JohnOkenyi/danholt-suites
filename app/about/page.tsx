import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/about-header.jpg"
            alt="About Us"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Danholt Suites</h1>
          <p className="text-xl md:text-2xl max-w-2xl">Redefining luxury hospitality</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded with a vision to create an unparalleled hospitality experience, Danholt Suites has been 
              a symbol of luxury and comfort for travelers seeking the finest accommodations. Our commitment to 
              excellence and attention to detail has made us a preferred choice for discerning guests from around the world.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Located in the heart of the city, Danholt Suites combines timeless elegance with modern amenities 
              to provide our guests with an exceptional stay. From our meticulously designed rooms to our 
              world-class service, every aspect of your experience is crafted to exceed expectations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe that true luxury lies in the details. That's why our dedicated team works tirelessly 
              to ensure every moment of your stay is memorable, comfortable, and uniquely tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from the quality of our rooms 
                to the warmth of our hospitality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">💖</div>
              <h3 className="text-2xl font-semibold mb-4">Guest Satisfaction</h3>
              <p className="text-gray-600">
                Your comfort and satisfaction are our top priorities. We go above and beyond to ensure 
                every guest feels valued and cared for.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to sustainable practices and environmental responsibility in all our 
                operations to preserve our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/team-1.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-amber-600 mb-2">General Manager</p>
              <p className="text-gray-600 text-sm">Leading our team with 20 years of hospitality experience</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/team-2.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-amber-600 mb-2">Guest Relations Director</p>
              <p className="text-gray-600 text-sm">Ensuring every guest has an exceptional experience</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/team-3.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">David Martinez</h3>
              <p className="text-amber-600 mb-2">Head Chef</p>
              <p className="text-gray-600 text-sm">Creating culinary masterpieces for our guests</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/team-4.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Emma Williams</h3>
              <p className="text-amber-600 mb-2">Spa & Wellness Manager</p>
              <p className="text-gray-600 text-sm">Dedicated to your relaxation and rejuvenation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl mb-8">Join us and discover what makes Danholt Suites special</p>
          <a
            href="/booking"
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition inline-block"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
