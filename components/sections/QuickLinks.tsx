"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { UtensilsCrossed, Gift, Clock, MapPin } from "lucide-react"

export function QuickLinks() {
  const links = [
    {
      icon: UtensilsCrossed,
      title: "Our Menu",
      description: "Explore our authentic Italian dishes",
      href: "/menu",
      bgColor: "bg-green-600",
    },
    {
      icon: Gift,
      title: "Special Offers",
      description: "Check out our latest promotions",
      href: "/offers",
      bgColor: "bg-red-600",
    },
    {
      icon: Clock,
      title: "Make Reservation",
      description: "Book your table in advance",
      href: "/reservations",
      bgColor: "bg-yellow-500",
    },
  ]

  return (
    <section className="bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 pt-5 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Access</h2>
          <p className="text-gray-700 text-lg">Everything you need at your fingertips</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={link.href} className="block">
                <div className="bg-white h-[130px] sm:h-[150px] md:h-[160px] lg:h-[180px] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group transform hover:-translate-y-2 flex flex-col items-center justify-center">
                  <div
                    className={`${link.bgColor} p-3 sm:p-4 md:p-5 rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <link.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{link.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
