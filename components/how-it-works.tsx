import { Leaf, ShoppingBag, Truck } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Farmers List Products</h3>
            <p className="text-gray-600">
              Local farmers list their fresh produce, dairy, meat, and other products directly on our platform.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <ShoppingBag className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Customers Shop</h3>
            <p className="text-gray-600">
              Browse products by category, farm, or location. Add items to your cart and checkout securely.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <Truck className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Delivery or Pickup</h3>
            <p className="text-gray-600">
              Choose between local delivery or pickup at designated locations. Enjoy farm-fresh products!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

