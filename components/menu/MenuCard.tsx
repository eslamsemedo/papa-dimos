"use client"

import { motion } from "framer-motion"

interface MenuItem {
  name_en: string
  name_ar: string
  price?: number
  price_m?: number
  price_l?: number
}

interface MenuCardProps {
  item: MenuItem
  currency: string
}

export function MenuCard({ item, currency }: MenuCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-italian-green hover:border-italian-gold"
    >
      <h4 className="text-lg font-bold text-charcoal mb-2">{item.name_en}</h4>
      <p className="text-gray-600 text-sm mb-3 font-script">{item.name_ar}</p>

      <div className="flex justify-between items-center">
        {item.price ? (
          <span className="text-xl font-bold text-italian-red bg-warm-cream px-3 py-1 rounded-full">
            {item.price} {currency}
          </span>
        ) : (
          <div className="flex space-x-4">
            {item.price_m && (
              <span className="text-lg font-bold text-italian-red bg-warm-cream px-3 py-1 rounded-full">
                M: {item.price_m} {currency}
              </span>
            )}
            {item.price_l && (
              <span className="text-lg font-bold text-italian-red bg-warm-cream px-3 py-1 rounded-full">
                L: {item.price_l} {currency}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
