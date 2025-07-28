"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <Image
        src="/hero2.png"
        alt="Restaurant background"
        fill
        style={{ objectFit: "cover", opacity: 0.4 }}
        priority
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Welcome to <span className="text-red-400">Papa</span> <span className="text-green-400" >Dimos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-script text-yellow-400">Authentic Italian Cuisine Since 1985</p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-yellow-50">
            Experience the true taste of Italy with our traditional recipes, fresh ingredients, and warm hospitality in
            the heart of Hurghada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
                View Our Menu
              </Button>
            </Link>
            <Link href="/offers">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                View Offers
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
