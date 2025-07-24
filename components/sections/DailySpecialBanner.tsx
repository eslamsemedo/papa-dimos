"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function DailySpecialBanner() {
  return (
    <motion.section
      className="bg-red-600 text-white py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
          <h2 className="text-2xl font-bold text-white">Today's Special</h2>
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
        </div>
        <p className="text-lg font-script text-yellow-300">
          Authentic Lasagne Bolognese with fresh herbs - Only 145 EGP
        </p>
        <p className="text-sm mt-2 text-red-100">Available until 10 PM or while supplies last</p>
      </div>
    </motion.section>
  )
}
