import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 35,
    unit: "Kg",
    farmer: "Green Valley Farm",
    image: "https://images.pexels.com/photos/27643476/pexels-photo-27643476/free-photo-of-red-tomatoes-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Fresh Eggs",
    price: 119,
    unit: "dozen",
    farmer: "Sunny Meadow Farm",
    image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Honey",
    price: 99,
    unit: "250ml jar",
    farmer: "Bee Happy Apiaries",
    image: "https://media.istockphoto.com/id/598241944/photo/honey-in-jar-and-bunch-of-dry-lavender.jpg?b=1&s=612x612&w=0&k=20&c=dFdIOtzku7KAwjVjRKVxB7fXu2vdxDXkgGU5JMPE9UA=",
  },
  {
    id: 4,
    name: "Unripe Mangoes",
    price: 79,
    unit: "Piece",
    farmer: "Green Valley Farm",
    image: "https://images.pexels.com/photos/31331940/pexels-photo-31331940/free-photo-of-cluster-of-unripe-mangoes-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]

export function FeaturedProducts() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            // <Link key={product.id} href={`/products/${product.id}`} className="group">
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
                  ₹{product.price} / {product.unit}
                  </p>
                </div>
              </div>
            // </Link>
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

