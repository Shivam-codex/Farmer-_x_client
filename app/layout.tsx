import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ShoppingCart, User, Menu } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Farmer-to-Market | Fresh Local Produce",
  description: "Connect directly with local farmers and buy fresh produce without middlemen",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600">
              FarmDirect
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-green-600">
                Home
              </Link>
              <Link href="/products" className="hover:text-green-600">
                Products
              </Link>
              <Link href="/farmers" className="hover:text-green-600">
                Farmers
              </Link>
              <Link href="/about" className="hover:text-green-600">
                About
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/account" className="p-2 hover:bg-gray-100 rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                <span className="absolute top-0 right-0 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </Link>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-gray-100 border-t">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">FarmDirect</h3>
                <p className="text-gray-600">
                  Connecting farmers and consumers directly for fresher food and fairer prices.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products" className="text-gray-600 hover:text-green-600">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/farmers" className="text-gray-600 hover:text-green-600">
                      Farmers
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-green-600">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-green-600">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">For Farmers</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/farmers/join" className="text-gray-600 hover:text-green-600">
                      Join as a Farmer
                    </Link>
                  </li>
                  <li>
                    <Link href="/farmers/resources" className="text-gray-600 hover:text-green-600">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link href="/farmers/faq" className="text-gray-600 hover:text-green-600">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <address className="not-italic text-gray-600">
                  <p>123 Farm Lane</p>
                  <p>Harvest City, CA 95123</p>
                  <p className="mt-2">info@farmdirect.com</p>
                  <p>(555) 123-4567</p>
                </address>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} FarmDirect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'