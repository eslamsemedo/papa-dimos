import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import { Logo } from "@/components/ui/Logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-300 max-w-md">
              Authentic Italian cuisine crafted with love and tradition. Experience the taste of Italy in every bite at
              Papa Dimos Restaurant & Café.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/share/16sTAcyrMj/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors p-2 bg-red-600 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/papadimos12?igsh=ZDR4aGsxNzlkaHFu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors p-2 bg-green-600 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-white hover:text-yellow-400 transition-colors p-2 bg-orange-600 rounded-full">
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Dahar, Hurghada, Egypt
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-300 text-sm">+20 120 205 7797</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-300 text-sm">info@papadimos.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-500" />
                <div className="text-gray-300 text-sm">
                  <div>EveryDay: 11:00 AM - 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Papa Dimos Restaurant & Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
