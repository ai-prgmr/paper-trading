import type { Metadata } from "next"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { CopierHero } from "@/components/products/CopierHero"
import { CopierList } from "@/components/products/CopierList"
import { ProductCTA } from "@/components/products/ProductCTA"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Copier Paper Solutions",
  description: "High-quality A3 and A4 Copier Paper (70-100 GSM) for office and commercial use, provided by GL Trading Company.",
  alternates: {
    canonical: "/copier",
  },
  openGraph: {
    title: "Copier Paper Solutions | GL Trading Company",
    description: "High-quality A3 and A4 Copier Paper (70-100 GSM) for office and commercial use, provided by GL Trading Company.",
    url: "/copier",
  }
}

export default function CopierPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Copier Paper",
          description: "High-quality A3 and A4 Copier Paper (70-100 GSM) for office and commercial use.",
          url: "https://gltradingcompany.com/copier",
          brand: {
            "@type": "Brand",
            name: "GL Trading Company"
          }
        }}
      />
      <div className="flex max-w-container-max mx-auto w-full pt-20">
        <ProductSidebar />
        <main className="flex-1 min-w-0 px-margin-mobile md:px-margin-desktop py-12 bg-surface-bright paper-texture min-h-screen">
          <ProductCategoryMobileNav />
          <CopierHero />
          <CopierList />
          <ProductCTA />
        </main>
      </div>
    </>
  )
}
