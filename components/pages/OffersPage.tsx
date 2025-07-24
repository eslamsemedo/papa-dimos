"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { OfferCarousel } from "@/components/offers/OfferCarousel"

export function OffersPage() {
  // const { offers } = useOffers()

  const offers = [
    {
      id: "1",
      title: "2-for-1 Pizza Tuesdays",
      description: "Buy any large pizza and get a medium pizza of equal or lesser value for free!",
      discount: "50% OFF",
      validUntil: "Every Tuesday",
      image: "/placeholder.svg?height=300&width=400",
      terms: [
        "Valid only on Tuesdays",
        "Dine-in only",
        "Cannot be combined with other offers",
        "Free pizza must be of equal or lesser value",
      ],
    },
    {
      id: "2",
      title: "Family Feast Deal",
      description: "Perfect for families! Get 2 large pizzas, garlic bread, and 4 soft drinks.",
      discount: "25% OFF",
      validUntil: "December 31, 2024",
      image: "/placeholder.svg?height=300&width=400",
      terms: [
        "Valid for dine-in and takeaway",
        "Minimum 4 people",
        "Available all week",
        "Advance booking recommended",
      ],
    },
    {
      id: "3",
      title: "Happy Hour Pasta",
      description: "All pasta dishes at special prices during our happy hour!",
      discount: "30% OFF",
      validUntil: "Daily 3-6 PM",
      image: "/placeholder.svg?height=300&width=400",
      terms: ["Valid Monday to Friday", "3:00 PM - 6:00 PM only", "Dine-in only", "Excludes seafood pasta"],
    },
    {
      id: "4",
      title: "Weekend Brunch Special",
      description: "Start your weekend right with our special brunch menu and fresh juices.",
      discount: "20% OFF",
      validUntil: "Weekends Only",
      image: "/placeholder.svg?height=300&width=400",
      terms: ["Saturday and Sunday only", "10:00 AM - 2:00 PM", "Includes fresh juice", "Reservation required"],
    },
  ]

  return (
    <div className="pt-20">
      <Section background="black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-4"
        >
          <h1 className="text-5xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl text-gray-300 font-script">Don't miss our amazing deals and promotions</p>
        </motion.div>
      </Section>

      <Section background="white">
        <OfferCarousel offers={offers} />
      </Section>
    </div>
  )
}
