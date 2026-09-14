import type { Metadata } from "next"
import { HeroSection } from "@/components/home/HeroSection"
import { SourcingEdge } from "@/components/home/SourcingEdge"
import { SustainabilityMetrics } from "@/components/home/SustainabilityMetrics"
import { ProductCategories } from "@/components/home/ProductCategories"
import { ExportImportSection } from "@/components/home/ExportImportSection"
import { AggregatorAdvantage } from "@/components/home/AggregatorAdvantage"
import { CTASection } from "@/components/home/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Premium Paper & Board Trading | GL Trading Company",
  description: "GL Trading Company specializes in the trading of paper and board, including Duplex Board, FBB, and Kraft Paper, providing top-quality solutions globally.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Premium Paper & Board Trading | GL Trading Company",
    description: "GL Trading Company specializes in the trading of paper and board, including Duplex Board, FBB, and Kraft Paper.",
  }
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://gltradingcompany.com/#website",
              name: "GL Trading Company",
              url: "https://gltradingcompany.com"
            },
            {
              "@type": "WebPage",
              "@id": "https://gltradingcompany.com/#webpage",
              url: "https://gltradingcompany.com",
              name: "Premium Paper & Board Trading | GL Trading Company",
              isPartOf: { "@id": "https://gltradingcompany.com/#website" }
            }
          ]
        }}
      />
      <main className="flex-1 pt-20">
        <HeroSection />
        <SourcingEdge />
        <SustainabilityMetrics />
        <ProductCategories />
        <ExportImportSection />
        <AggregatorAdvantage />
        <CTASection />

      </main>
    </>
  )
}
