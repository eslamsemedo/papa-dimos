"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Section } from "@/components/ui/Section"

export function StorySection() {
  return (
    <Section background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 1985 by Dimos Papadopoulos, Papa Dimos Restaurant & Café began as a small family kitchen with a
              big dream: to bring authentic Italian flavors to Cairo.
            </p>
            <p>
              What started as a humble trattoria has grown into one of Cairo's most beloved Italian restaurants, while
              never losing sight of our core values: fresh ingredients, traditional recipes, and warm hospitality.
            </p>
            <p>
              Today, Papa Dimos continues to be family-owned and operated, with recipes passed down through generations
              and a commitment to creating memorable dining experiences for every guest.
            </p>
            <p>
              Our mission is simple: to serve authentic Italian cuisine that brings people together, creating moments of
              joy and connection around our tables.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Papa Dimos in the kitchen"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="font-script text-italian-red text-lg">Est. 1985</p>
            <p className="text-sm text-gray-600">Family Tradition</p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
