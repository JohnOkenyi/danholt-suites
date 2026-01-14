'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">About Danholt Suites</h1>
        
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            Welcome to Danholt Suites, your premier destination for luxury accommodation and exceptional hospitality experiences.
          </p>
          
          <p>
            With years of dedicated service, we pride ourselves on offering comfortable rooms, world-class amenities, and personalized service to make your stay unforgettable.
          </p>
          
          <p>
            Our commitment to excellence extends from our beautifully appointed rooms to our attentive staff who are always ready to exceed your expectations.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Luxury Rooms</h2>
            <p className="text-gray-700">Experience comfort in our elegantly designed rooms with premium amenities and modern facilities.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fine Dining</h2>
            <p className="text-gray-700">Enjoy exquisite cuisine at our restaurant, featuring both local and international dishes.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>
            <p className="text-gray-700">Access our state-of-the-art facilities including gym, spa, conference rooms, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
