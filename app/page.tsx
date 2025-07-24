import { HeroSection } from "@/components/sections/HeroSection"
import { DailySpecialBanner } from "@/components/sections/DailySpecialBanner"
import { QuickLinks } from "@/components/sections/QuickLinks"
import { FeaturedMenu } from "@/components/sections/FeaturedMenu"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DailySpecialBanner />
      <QuickLinks />
      <FeaturedMenu />
    </main>
  )
}
