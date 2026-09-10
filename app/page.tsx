import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { HeroSection } from "@/components/home/HeroSection"
import { ManufacturingEdge } from "@/components/home/ManufacturingEdge"
import { SustainabilityMetrics } from "@/components/home/SustainabilityMetrics"
import { ProductCategories } from "@/components/home/ProductCategories"
import { AggregatorAdvantage } from "@/components/home/AggregatorAdvantage"
import { CTASection } from "@/components/home/CTASection"
import { Footer } from "@/components/layout/Footer"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Premium Paper & Board Manufacturing | GL Trading Company",
  description: "GL Trading Company specializes in the trading of paper and board, including Duplex Board, FBB, and Kraft Paper, providing top-quality solutions globally.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Premium Paper & Board Manufacturing | GL Trading Company",
    description: "GL Trading Company specializes in the trading of paper and board, including Duplex Board, FBB, and Kraft Paper.",
  }
}

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "GL Trading Company",
          url: "https://gltradingcompany.com"
        }}
      />
      <Navbar />
      <main className="flex-1 pt-20">
        <HeroSection />
        <ManufacturingEdge />
        <SustainabilityMetrics />
        <ProductCategories />
        <AggregatorAdvantage />
        <CTASection />

      </main>
      <Footer />
    </div>
  )
}
