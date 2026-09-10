import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { BoxBoardHero } from "@/components/products/BoxBoardHero"
import { BoxBoardList } from "@/components/products/BoxBoardList"
import { BoxBoardTrustSection } from "@/components/products/BoxBoardTrustSection"
import { ProductCTA } from "@/components/products/ProductCTA"
import { Footer } from "@/components/layout/Footer"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Box Board Solutions",
  description: "Premium Box Board materials ideal for rigid packaging and premium boxes, provided by GL Trading Company.",
  alternates: {
    canonical: "/box-board",
  },
  openGraph: {
    title: "Box Board Solutions | GL Trading Company",
    description: "Premium Box Board materials ideal for rigid packaging and premium boxes, provided by GL Trading Company.",
    url: "/box-board",
  }
}

export default function BoxBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Box Board",
          description: "Premium Box Board materials ideal for rigid packaging and premium boxes.",
          url: "https://gltradingcompany.com/box-board",
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
          <BoxBoardHero />
          <BoxBoardList />
          <BoxBoardTrustSection />
          <ProductCTA />
        </main>
      </div>
      <Footer />
    </div>
  )
}
