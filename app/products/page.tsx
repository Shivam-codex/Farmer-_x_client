import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 3.99,
    unit: "lb",
    farmer: "Green Valley Farm",
    image: "https://images.pexels.com/photos/27643476/pexels-photo-27643476/free-photo-of-red-tomatoes-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Vegetables",
  },
  {
    id: 2,
    name: "Fresh Eggs",
    price: 5.99,
    unit: "dozen",
    farmer: "Sunny Meadow Farm",
    image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Dairy & Eggs",
  },
  {
    id: 3,
    name: "Honey",
    price: 8.99,
    unit: "jar",
    farmer: "Bee Happy Apiaries",
    image: "/placeholder.svg?height=200&width=200",
    category: "Specialty",
  },
  {
    id: 4,
    name: "Organic Lettuce",
    price: 2.99,
    unit: "head",
    farmer: "Green Valley Farm",
    image: "/placeholder.svg?height=200&width=200",
    category: "Vegetables",
  },
  {
    id: 5,
    name: "Grass-fed Beef",
    price: 12.99,
    unit: "lb",
    farmer: "Happy Pastures",
    image: "/placeholder.svg?height=200&width=200",
    category: "Meat",
  },
  {
    id: 6,
    name: "Artisan Cheese",
    price: 7.99,
    unit: "piece",
    farmer: "Dairy Delights",
    image: "/placeholder.svg?height=200&width=200",
    category: "Dairy & Eggs",
  },
  {
    id: 7,
    name: "Fresh Apples",
    price: 2.49,
    unit: "lb",
    farmer: "Orchard Haven",
    image: "/placeholder.svg?height=200&width=200",
    category: "Fruits",
  },
  {
    id: 8,
    name: "Maple Syrup",
    price: 15.99,
    unit: "bottle",
    farmer: "Forest Sweets",
    image: "/placeholder.svg?height=200&width=200",
    category: "Specialty",
  },
]

export default function ProductsPage() {
  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-green-600 font-medium">
                  All Products
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <Link href={`/products?category=${category}`} className="hover:text-green-600">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <span className="text-xs text-gray-500">{product.category}</span>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-500">by {product.farmer}</p>
                    <p className="mt-2 font-bold">
                      ${product.price} / {product.unit}
                    </p>
                    <button className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

