import type { Metadata } from "next"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { DuplexBoardHero } from "@/components/products/DuplexBoardHero"
import { DuplexVariantsList } from "@/components/products/DuplexVariantsList"
import { ProductCTA } from "@/components/products/ProductCTA"
import { DuplexTrustSection } from "@/components/products/DuplexTrustSection"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Duplex Paper Board Solutions",
  description: "High-quality Duplex Paper Board for packaging and printing applications, offered by GL Trading Company.",
  alternates: {
    canonical: "/duplex-paper-board",
  },
  openGraph: {
    title: "Duplex Paper Board Solutions | GL Trading Company",
    description: "High-quality Duplex Paper Board for packaging and printing applications, offered by GL Trading Company.",
    url: "/duplex-paper-board",
  }
}

export default function DuplexPaperBoardPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gltradingcompany.com/duplex-paper-board/#webpage",
              url: "https://gltradingcompany.com/duplex-paper-board",
              name: "Duplex Paper Board Solutions | GL Trading Company",
              description: "High-quality Duplex Paper Board for packaging and printing applications."
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gltradingcompany.com/duplex-paper-board/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Products",
                  item: "https://gltradingcompany.com/products"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Duplex Paper Board",
                  item: "https://gltradingcompany.com/duplex-paper-board"
                }
              ]
            },
            {
              "@type": "Product",
              "@id": "https://gltradingcompany.com/duplex-paper-board/#product",
              name: "Duplex Paper Board",
              image: "https://gltradingcompany.com/duplex-board.jpg",
              description: "High-quality Duplex Paper Board for packaging and printing applications.",
              offers: {
                "@type": "Offer",
                url: "https://gltradingcompany.com/contact",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                description: "Call for price"
              }
            }
          ]
        }}
      />
      <div className="flex max-w-container-max mx-auto w-full pt-20">
        <ProductSidebar />
        <main className="flex-1 min-w-0 px-margin-mobile md:px-margin-desktop py-12 bg-surface-bright paper-texture min-h-screen">
          <ProductCategoryMobileNav />
          <DuplexBoardHero />
          <DuplexVariantsList />
          <ProductCTA />
          <DuplexTrustSection />
        </main>
      </div>
    </>
  )
}
