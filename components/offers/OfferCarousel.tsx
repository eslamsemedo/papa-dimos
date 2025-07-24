"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import Image from "next/image"

interface Offer {
  id: string
  title: string
  description: string
  discount: string
  validUntil: string
  image: string
  terms: string[]
}

interface OfferCarouselProps {
  offers: Offer[]
}

export function OfferCarousel({ offers }: OfferCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length)
  }

  return (
    <div className="relative p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
              <div className="absolute top-4 right-4 bg-italian-red text-white px-3 py-1 rounded-full font-bold">
                {offer.discount}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Valid until {offer.validUntil}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-black mb-2">Terms & Conditions:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {offer.terms.map((term, termIndex) => (
                    <li key={termIndex} className="flex items-start space-x-2">
                      <span className="text-italian-green">•</span>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
