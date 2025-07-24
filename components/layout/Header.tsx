"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Logo } from "@/components/ui/Logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Offers", href: "/offers" },
    { name: "About", href: "/about" },
    { name: "Reservations", href: "/reservations" },
  ]

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden min-[820px]:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-yellow-400 ${
                  pathname === item.href ? "text-yellow-400" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number */}
          <a href="tel:+201015189828" className="cursor-pointer">

          <div className="hidden min-[820px]:flex items-center space-x-2 bg-green-600 px-4 py-2 rounded-lg">
            <Phone className="h-4 w-4 text-white" />
            <span className="text-sm text-white font-medium max-[950px]:hidden">+201015189828</span>
          </div>
          </a>

          {/* Mobile menu button */}
          <button
            className="min-[820px]:hidden text-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="min-[820px]:hidden pb-4 bg-gray-900">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 hover:text-yellow-400 ${
                    pathname === item.href ? "text-yellow-400" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:+201015189828" className="cursor-pointer">

              <div className="flex items-center space-x-2 w-fit  border-t border-gray-700 bg-green-600 px-4 py-2 rounded-lg">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-sm text-white">+201015189828</span>
              </div>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
