import Link from "next/link"
import { ChefHat } from "lucide-react"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3">
        <Image src="/logo.jpeg" alt="Papa Dimos Logo" width={100} height={100} className="h-12 w-12 rounded-full" />
      <div>
        <h1 className="text-2xl font-bold text-white">Papa Dimos</h1>
        <p className="text-sm font-script text-italian-green">Restaurant & Café</p>
      </div>
    </Link>
  )
}
