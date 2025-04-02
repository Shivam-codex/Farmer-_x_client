"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Book, Leaf, Droplets, Sun, Calendar, ArrowRight } from "lucide-react"

// Sample resources data
const resources = [
  {
    id: 1,
    title: "Organic Farming Basics",
    category: "Farming Techniques",
    description: "Learn the fundamentals of organic farming practices and how to implement them on your farm.",
    image: "/images/resources/organic-farming.jpg",
    date: "May 15, 2023",
    readTime: "8 min read",
    icon: <Leaf className="h-6 w-6 text-green-600" />
  },
  {
    id: 2,
    title: "Water Conservation Methods",
    category: "Sustainability",
    description: "Discover effective techniques for conserving water on your farm while maintaining crop health.",
    image: "/images/resources/water-conservation.jpg",
    date: "June 2, 2023",
    readTime: "6 min read",
    icon: <Droplets className="h-6 w-6 text-blue-600" />
  },
  {
    id: 3,
    title: "Seasonal Planting Guide",
    category: "Planning",
    description: "A comprehensive guide to what to plant and when throughout the growing season.",
    image: "/images/resources/seasonal-planting.jpg",
    date: "April 10, 2023",
    readTime: "10 min read",
    icon: <Calendar className="h-6 w-6 text-orange-600" />
  },
  {
    id: 4,
    title: "Sustainable Pest Management",
    category: "Farming Techniques",
    description: "Natural and eco-friendly approaches to managing pests without harmful chemicals.",
    image: "/images/resources/pest-management.jpg",
    date: "July 18, 2023",
    readTime: "7 min read",
    icon: <Leaf className="h-6 w-6 text-green-600" />
  },
  {
    id: 5,
    title: "Soil Health Improvement",
    category: "Sustainability",
    description: "Techniques to improve soil quality and fertility for better crop yields.",
    image: "/images/resources/soil-health.jpg",
    date: "March 5, 2023",
    readTime: "9 min read",
    icon: <Droplets className="h-6 w-6 text-blue-600" />
  },
  {
    id: 6,
    title: "Greenhouse Management",
    category: "Planning",
    description: "Tips for maintaining optimal conditions in your greenhouse for year-round growing.",
    image: "/images/resources/greenhouse.jpg",
    date: "August 22, 2023",
    readTime: "8 min read",
    icon: <Sun className="h-6 w-6 text-yellow-600" />
  }
]

// Categories for filtering
const categories = [
  { id: "all", name: "All Resources", icon: <Book className="h-5 w-5" /> },
  { id: "farming-techniques", name: "Farming Techniques", icon: <Leaf className="h-5 w-5" /> },
  { id: "sustainability", name: "Sustainability", icon: <Droplets className="h-5 w-5" /> },
  { id: "planning", name: "Planning", icon: <Calendar className="h-5 w-5" /> }
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter resources based on search term and category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = activeCategory === "all" || 
                           resource.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Farmer Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access guides, articles, and tips to help you grow your farming business and improve your practices.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-md ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">{resource.icon}</span>
                    <span className="text-sm text-gray-500">{resource.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{resource.date}</span>
                    <span>{resource.readTime}</span>
                  </div>
                  <Link 
                    href={`/resources/${resource.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No resources found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest farming tips, market updates, and resources directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 