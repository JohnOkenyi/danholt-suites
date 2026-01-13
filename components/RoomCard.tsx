import Image from 'next/image'
import Link from 'next/link'

interface Room {
  id: number
  name: string
  description: string
  price: number
  image: string
  amenities: string[]
}

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="relative h-64">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.map((amenity, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold text-amber-600">${room.price}</span>
            <span className="text-gray-500">/night</span>
          </div>
          <Link
            href={`/rooms/${room.id}`}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
