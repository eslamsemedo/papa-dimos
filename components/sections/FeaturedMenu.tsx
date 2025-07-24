"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FeaturedMenu() {
  const featured = [
    {
      name: "Papa Dimos Pizza Burger",
      description: "Our signature pizza with premium ingredients",
      // price: "210 EGP",
      image: "/pizzaburger.png",
    },
    {
      name: "Pasta Nigresko",
      description: "Traditional pasta with rich meat sauce",
      // price: "145 EGP",
      image: "/pasta.png",
    },
    {
      name: "Grill Chicken",
      description: "Crispy chicken with melted cheese",
      // price: "145 EGP",
      image: "/grill.png",
    },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Featured Dishes</h2>
          <p className="text-gray-600 text-lg">Taste our most popular creations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  {/* <span className="text-2xl font-bold text-italian-red">{dish.price}</span> */}
                  <span className="text-sm text-gray-500">Medium/Large</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
