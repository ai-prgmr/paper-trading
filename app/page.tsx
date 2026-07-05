import { Navbar } from "@/components/layout/Navbar"
import { HeroSection } from "@/components/home/HeroSection"
import { ProductCategories } from "@/components/home/ProductCategories"
import { NationalFootprint } from "@/components/home/NationalFootprint"
import { CTASection } from "@/components/home/CTASection"
import { CertifiedExcellence } from "@/components/home/CertifiedExcellence"
import { Footer } from "@/components/layout/Footer"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        <HeroSection />
        <ProductCategories />
        <NationalFootprint />
        <CTASection />
        <CertifiedExcellence />
      </main>
      <Footer />
    </div>
  )
}
