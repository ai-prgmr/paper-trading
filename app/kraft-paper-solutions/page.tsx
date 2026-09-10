import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { KraftHero } from "@/components/products/KraftHero"
import { KraftProductsList } from "@/components/products/KraftProductsList"
import { KraftSustainabilityCommitment } from "@/components/products/KraftSustainabilityCommitment"
import { ProductCTA } from "@/components/products/ProductCTA"
import { Footer } from "@/components/layout/Footer"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Kraft Paper Solutions",
  description: "Durable and sustainable Kraft Paper solutions for your packaging needs, by GL Trading Company.",
  alternates: {
    canonical: "/kraft-paper-solutions",
  },
  openGraph: {
    title: "Kraft Paper Solutions | GL Trading Company",
    description: "Durable and sustainable Kraft Paper solutions for your packaging needs, by GL Trading Company.",
    url: "/kraft-paper-solutions",
  }
}

export default function KraftPaperPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Kraft Paper",
          description: "Durable and sustainable Kraft Paper solutions for your packaging needs.",
          url: "https://gltradingcompany.com/kraft-paper-solutions",
          brand: {
            "@type": "Brand",
            name: "GL Trading Company"
          }
        }}
      />
      <Navbar />
      <div className="flex max-w-container-max mx-auto w-full pt-20">
        <ProductSidebar />
        <main className="flex-1 min-w-0 px-margin-mobile md:px-margin-desktop py-12 bg-surface-bright paper-texture min-h-screen">
          <ProductCategoryMobileNav />
          <KraftHero />
          <KraftProductsList />
          <KraftSustainabilityCommitment />
          <ProductCTA />
        </main>
      </div>
      <Footer />
    </div>
  )
}
