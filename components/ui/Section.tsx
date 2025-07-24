import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: "white" | "gray" | "black" | "cream"
}

export function Section({ children, className, background = "white" }: SectionProps) {
  const backgrounds = {
    white: "bg-white text-gray-900",
    gray: "bg-gray-100 text-gray-900",
    black: "bg-gray-900 text-white",
    cream: "bg-yellow-50 text-gray-900",
  }

  return (
    <section className={cn("section-padding", backgrounds[background], className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}
