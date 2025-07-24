"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { ReservationForm } from "@/components/reservations/ReservationForm"

export function ReservationsPage() {
  return (
    <div className="pt-20">
      <Section background="black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-4"
        >
          <h1 className="text-5xl font-bold mb-4">Make a Reservation</h1>
          <p className="text-xl text-gray-300 font-script">Book your table for an unforgettable dining experience</p>
        </motion.div>
      </Section>

      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <ReservationForm />
        </div>
      </Section>
    </div>
  )
}
