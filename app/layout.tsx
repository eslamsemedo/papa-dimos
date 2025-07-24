import type React from "react"
import type { Metadata } from "next"
import { Poppins, Open_Sans, Caveat } from "next/font/google"
import "./globals.css"
import { AppLayout } from "@/components/layout/AppLayout"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-caveat",
})

export const metadata: Metadata = {
  title: "Papa Dimos Restaurant & Café - Authentic Italian Cuisine",
  description:
    "Experience authentic Italian cuisine at Papa Dimos Restaurant & Café. Fresh pasta, wood-fired pizza, and traditional Italian dishes in a warm, welcoming atmosphere.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} ${caveat.variable} antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
