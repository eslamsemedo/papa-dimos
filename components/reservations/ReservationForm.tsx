"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, User, Phone, Mail } from "lucide-react"

interface ReservationData {
  date: string
  time: string
  partySize: string
  name: string
  phone: string
  email: string
  specialRequests: string
}

export function ReservationForm() {
  const [formData, setFormData] = useState<ReservationData>({
    date: "",
    time: "",
    partySize: "",
    name: "",
    phone: "",
    email: "",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <div className="bg-gradient-to-r from-italian-green to-olive-green text-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Reservation Confirmed!</h2>
          <p className="text-lg mb-4">Thank you, {formData.name}! Your reservation has been successfully submitted.</p>
          <p className="text-sm opacity-90">We'll contact you at {formData.phone || "+201015189828"} to confirm your booking.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-italian-gold"
    >
      <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">Reservation Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            <Calendar className="inline h-4 w-4 mr-2 text-italian-green" />
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-gold focus:border-italian-gold transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            <Clock className="inline h-4 w-4 mr-2 text-italian-green" />
            Time
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-gold focus:border-italian-gold transition-colors"
          >
            <option value="">Select time</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="21:00">9:00 PM</option>
            <option value="22:00">10:00 PM</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-charcoal mb-2">
          <Users className="inline h-4 w-4 mr-2 text-italian-green" />
          Party Size
        </label>
        <select
          name="partySize"
          value={formData.partySize}
          onChange={handleChange}
          required
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-gold focus:border-italian-gold transition-colors"
        >
          <option value="">Select party size</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num.toString()}>
              {num} {num === 1 ? "person" : "people"}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            <User className="inline h-4 w-4 mr-2 text-italian-green" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-gold focus:border-italian-gold transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            <Phone className="inline h-4 w-4 mr-2 text-italian-green" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-gold focus:border-italian-gold transition-colors"
            placeholder="+201015189828"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-charcoal mb-2">
          <Mail className="inline h-4 w-4 mr-2 text-italian-green" />
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-gold focus:border-italian-gold transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-charcoal mb-2">Special Requests (Optional)</label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-gold focus:border-italian-gold transition-colors"
          placeholder="Any dietary restrictions, special occasions, or other requests..."
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg"
      //  variant="accent"
       >
        {isSubmitting ? "Submitting..." : "Make Reservation"}
      </Button>
    </motion.form>
  )
}
