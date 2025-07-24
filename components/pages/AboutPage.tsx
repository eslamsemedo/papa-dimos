"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { StorySection } from "@/components/about/StorySection"
import { GoogleMapEmbed } from "@/components/about/GoogleMapEmbed"
import { Clock, MapPin, Phone, Mail } from "lucide-react"

export function AboutPage() {
  return (
    <div className="pt-20">
      <Section background="black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-4"
        >
          <h1 className="text-5xl font-bold mb-4">About Papa Dimos</h1>
          <p className="text-xl text-gray-300 font-script">
            A story of passion, tradition, and authentic Italian cuisine
          </p>
        </motion.div>
      </Section>
    <div className="w-[80%] m-auto py-8">

      <StorySection />

      <Section >
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black mb-6">Visit Our Restaurant</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-italian-green mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Location</h3>
                  <p className="text-gray-600">123 Italian Street, Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-italian-green mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Opening Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Thursday: 11:00 AM - 11:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 12:00 AM</p>
                    <p>Sunday: 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-italian-green mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Phone</h3>
                  <p className="text-gray-600">+20 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-italian-green mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-gray-600">info@papadimos.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GoogleMapEmbed />
          </motion.div>
        </div>
      </Section>
    </div>
    </div>
  )
}
