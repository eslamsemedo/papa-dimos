"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { MenuCategoryTabs } from "@/components/menu/MenuCategoryTabs"
import { MenuCard } from "@/components/menu/MenuCard"
import menuData from "@/data/menu.json"

export function MenuPage() {
  // const { menuData } = useMenu()
  const [activeCategory, setActiveCategory] = useState(0)

  if (!menuData) {
    return <div>Loading...</div>
  }

  const currentCategory = menuData.categories[activeCategory]

  return (
    <div className="pt-20">
      <section className="bg-gray-900 text-white section-padding">
        <div className="max-w-7xl mx-auto py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4 text-white">
              Our <span className="text-yellow-400">Menu</span>
            </h1>
            <p className="text-xl text-yellow-400 font-script">Authentic Italian flavors crafted with love</p>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <MenuCategoryTabs
          categories={menuData.categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="mt-12">
          {currentCategory.subcategories ? (
            currentCategory.subcategories.map((subcategory, index) => (
              <motion.div
                key={subcategory.name_en}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-yellow-400 pb-2 bg-yellow-50 px-4 py-2 rounded-lg">
                  {subcategory.name_en}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subcategory.items.map((item) => (
                    <MenuCard key={item.name_en} item={item} currency={menuData.currency} />
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.items?.map((item) => (
                  <MenuCard key={item.name_en} item={item} currency={menuData.currency} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </Section>
    </div>
  )
}
