"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { OfferCarousel } from "@/components/offers/OfferCarousel"

export function OffersPage() {

  const offers = [
    {
      id: "5",
      title: "Triple Deal — 3 Pizzas",
      description: "3 medium pizzas for 380 EGP or 3 large pizzas for 470 EGP.",
      discount: "Bundle price",
      validUntil: "Until further notice",
      image: "/offers/triple.jpeg",
      terms: [
        "Excludes seafood items",
        "Prices in Egyptian Pounds (EGP)",
        "Delivery available: +201015189828",
        "Location: Hurghada – Al Dahar, in front of the courthouse",
      ],
    },
    {
      id: "6",
      title: "Super Offer",
      description:
        "2 pieces pane or crispy + fries + macaroni béchamel + tahina + pickles + bread.",
      discount: "20% OFF (175 → 140 EGP)",
      validUntil: "Until further notice",
      image: "/offers/super.jpg",
      terms: [
        "Prices in Egyptian Pounds (EGP)",
        "Excludes seafood items",
        "Delivery available: +201015189828",
        "Location: Hurghada – Al Dahar, in front of the courthouse",
      ],
    },
    {
      id: "7",
      title: "Double Deal — 2 Pizzas",
      description:
        "2 medium pizzas for 290 EGP or 2 large pizzas for 350 EGP (regular dough only).",
      discount: "Special bundle price",
      validUntil: "Until further notice",
      image: "/offers/douple.jpeg",
      terms: [
        "Regular dough only",
        "Prices in Egyptian Pounds (EGP)",
        "Delivery: +201015189828",
        "Location: Hurghada – Al Dahar, in front of the courthouse",
      ],
    },
    {
      id: "8",
      title: "Mega Offer",
      description:
        "Charcoal-grilled chicken + 2 samosa pieces + stuffed veggies plate + tahina + pickles + baladi salad + basmati rice + bread.",
      discount: "350 EGP bundle price",
      validUntil: "Until further notice",
      image: "/offers/mega.jpeg",
      terms: [
        "Prices in Egyptian Pounds (EGP)",
        "Delivery: +201015189828",
        "Location: Hurghada – Al Dahar, in front of the courthouse",
      ],
    },
    {
      id: "9",
      title: "Big Dimos Offer",
      description:
        "Half charcoal-grilled chicken + goulash with minced meat + 1 samosa + large macaroni béchamel + fries + tahina + pickles + bread.",
      discount: "175 EGP (was 250 EGP)",
      validUntil: "Until further notice",
      image: "/offers/bigdimos.jpeg",
      terms: [
        "Prices in Egyptian Pounds (EGP)",
        "Delivery: +201015189828",
        "Location: Hurghada – Al Dahar, in front of the courthouse",
      ],
    },
    {
      id: "10",
      title: "Golden Offer",
      description:
        "Mozzarella roll sandwich of your choice (Shish Tawook, Chicken Fajita, Crispy Chicken, or Oriental Sausage) + fries + coleslaw + Pepsi.",
      discount: "150 EGP (was 170 EGP)",
      validUntil: "Until further notice",
      image: "/offers/golden.jpeg",
      terms: [
        "Prices in Egyptian Pounds (EGP)",
        "Delivery: +201015189828",
        "Location: Hurghada – Al Dahar, in front of the courthouse",
      ],
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
