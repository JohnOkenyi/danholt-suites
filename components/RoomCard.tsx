import Image from 'next/image'
import Link from 'next/link'

interface Room {
  id: number
  name: string
  price: number
  image: string
  currency?: string
  description?: string
  amenities?: string[]
}}

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        
        {/* Amenities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {room.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center">
                <span className="text-amber-600 mr-2">✓</span>
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Price and Book Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600">From</p>
            <p className="text-2xl font-bold text-amber-600">₦{room.price.toLocaleString()}</p>
            <p className="text-xs text-gray-500">per night</p>
          </div>
          <Link
            href={`/booking?room=${room.id}`}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}