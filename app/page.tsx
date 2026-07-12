import { Navbar } from "@/components/layout/Navbar"
import { HeroSection } from "@/components/home/HeroSection"
import { ManufacturingEdge } from "@/components/home/ManufacturingEdge"
import { SustainabilityMetrics } from "@/components/home/SustainabilityMetrics"
import { ProductCategories } from "@/components/home/ProductCategories"
import { AggregatorAdvantage } from "@/components/home/AggregatorAdvantage"
import { CTASection } from "@/components/home/CTASection"
import { CertifiedExcellence } from "@/components/home/CertifiedExcellence"
import { Footer } from "@/components/layout/Footer"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        <HeroSection />
        <ManufacturingEdge />
        <SustainabilityMetrics />
        <ProductCategories />
        <AggregatorAdvantage />
        <CTASection />
        <CertifiedExcellence />
      </main>
      <Footer />
    </div>
  )
}
