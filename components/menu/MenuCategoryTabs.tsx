"use client"

import { motion } from "framer-motion"

interface Category {
  name_en: string
  name_ar: string
}

interface MenuCategoryTabsProps {
  categories: Category[]
  activeCategory: number
  onCategoryChange: (index: number) => void
}

export function MenuCategoryTabs({ categories, activeCategory, onCategoryChange }: MenuCategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8 p-6">
      {categories.map((category, index) => (
        <motion.button
          key={category.name_en}
          onClick={() => onCategoryChange(index)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
            activeCategory === index
              ? "bg-italian-red text-white shadow-lg"
              : "bg-white text-charcoal hover:bg-italian-gold hover:text-charcoal border-2 border-italian-green"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.name_en}
        </motion.button>
      ))}
    </div>
  )
}
