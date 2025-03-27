import Link from "next/link"
import { FeaturedProducts } from "@/components/featured-products"
import { FarmerHighlights } from "@/components/farmer-highlights"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            href="/products"
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            Browse All Products
          </Link>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-200 after:via-green-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-green-900 after:dark:via-[#01ff01] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className="text-4xl font-bold text-center">
          Farm Fresh <span className="text-green-600">Direct to You</span>
        </h1>
      </div>

      <FeaturedProducts />
      <FarmerHighlights />
      <HowItWorks />
    </main>
  )
}

