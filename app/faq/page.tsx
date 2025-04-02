"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

// FAQ data
const faqs = [
  {
    id: 1,
    question: "How does the platform work?",
    answer: "Our platform connects local farmers directly with consumers. Farmers can list their products, set prices, and manage inventory. Consumers can browse products, place orders, and have fresh produce delivered to their doorstep. We handle the logistics and payment processing to make the experience seamless for both parties."
  },
  {
    id: 2,
    question: "How do I become a farmer partner?",
    answer: "To become a farmer partner, click on the 'Join as a Farmer' button and fill out the application form. Our team will review your application and contact you within 3-5 business days. We look for farmers who produce high-quality, fresh produce and are committed to sustainable farming practices."
  },
  {
    id: 3,
    question: "What are the benefits for farmers?",
    answer: "Farmers benefit from direct access to consumers, higher profit margins by eliminating middlemen, and a platform to showcase their products. We also provide marketing support, logistics assistance, and resources to help farmers grow their business and improve their farming practices."
  },
  {
    id: 4,
    question: "How do I place an order?",
    answer: "To place an order, browse our products, add items to your cart, and proceed to checkout. You can select your delivery time and payment method. Once your order is confirmed, we'll notify the farmer and arrange for delivery to your specified address."
  },
  {
    id: 5,
    question: "What payment methods are accepted?",
    answer: "We accept all major credit and debit cards, as well as digital payment methods like UPI, Google Pay, and Apple Pay. Payment is processed securely through our platform, and farmers receive their earnings after the delivery is confirmed."
  },
  {
    id: 6,
    question: "How is the quality of produce ensured?",
    answer: "We have strict quality standards for all products listed on our platform. Farmers must adhere to our guidelines for freshness, packaging, and handling. We also conduct regular inspections and collect customer feedback to maintain high quality standards."
  },
  {
    id: 7,
    question: "What is your delivery policy?",
    answer: "We offer delivery within 24-48 hours of order placement, depending on your location. Delivery is free for orders above a certain value, and a small fee applies for smaller orders. You can track your delivery status in real-time through your account."
  },
  {
    id: 8,
    question: "What is your refund policy?",
    answer: "If you're not satisfied with your order, you can request a refund within 24 hours of delivery. Please provide photos and details about the issue. Our customer service team will review your request and process the refund if approved."
  },
  {
    id: 9,
    question: "Do you offer organic products?",
    answer: "Yes, we offer a wide range of organic products from certified organic farms. You can filter products by 'organic' to see only organic options. All organic products are clearly labeled and come with certification details."
  },
  {
    id: 10,
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team through the 'Contact Us' page, by email at support@farmfresh.com, or by phone at 1-800-FARM-FRESH. Our team is available Monday to Saturday, 9 AM to 6 PM."
  }
]

// FAQ categories
const categories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General" },
  { id: "farmers", name: "For Farmers" },
  { id: "customers", name: "For Customers" },
  { id: "orders", name: "Orders & Delivery" },
  { id: "payments", name: "Payments & Refunds" }
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [openFaqId, setOpenFaqId] = useState<number | null>(null)

  // Filter FAQs based on search term and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    
    // In a real application, you would have category data for each FAQ
    // For now, we'll just use the search filter
    return matchesSearch
  })

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our platform, how it works, and how to get started.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
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
                className={`px-4 py-2 rounded-md ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map(faq => (
              <div key={faq.id} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaqId === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaqId === faq.id && (
                  <div className="p-4 bg-gray-50 border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No FAQs found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
} 