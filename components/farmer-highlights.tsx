import Image from "next/image"
import Link from "next/link"

const farmers = [
  {
    id: 1,
    name: "Green Valley Farm",
    description: "Family-owned organic farm specializing in vegetables and herbs.",
    location: "Greenfield, CA",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Sunny Meadow Farm",
    description: "Free-range poultry and eggs from happy chickens.",
    location: "Sunnyvale, OR",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Bee Happy Apiaries",
    description: "Sustainable honey production with a focus on bee conservation.",
    location: "Honeyton, WA",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function FarmerHighlights() {
  return (
    <section className="w-full py-12 bg-green-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Meet Our Farmers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {farmers.map((farmer) => (
            <Link key={farmer.id} href={`/farmers/${farmer.id}`} className="group">
              <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                <Image
                  src={farmer.image || "/placeholder.svg"}
                  alt={farmer.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{farmer.name}</h3>
                  <p className="text-sm text-gray-500">{farmer.location}</p>
                  <p className="mt-2 text-sm">{farmer.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/farmers"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700"
          >
            View All Farmers
          </Link>
        </div>
      </div>
    </section>
  )
}

