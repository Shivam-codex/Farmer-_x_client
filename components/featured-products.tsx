import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 3.99,
    unit: "lb",
    farmer: "Green Valley Farm",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Fresh Eggs",
    price: 5.99,
    unit: "dozen",
    farmer: "Sunny Meadow Farm",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Honey",
    price: 8.99,
    unit: "jar",
    farmer: "Bee Happy Apiaries",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Organic Lettuce",
    price: 2.99,
    unit: "head",
    farmer: "Green Valley Farm",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function FeaturedProducts() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-500">by {product.farmer}</p>
                  <p className="mt-2 font-bold">
                    ${product.price} / {product.unit}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

