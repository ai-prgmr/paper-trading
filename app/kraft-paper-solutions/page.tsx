import type { Metadata } from "next"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { KraftHero } from "@/components/products/KraftHero"
import { KraftProductsList } from "@/components/products/KraftProductsList"
import { KraftSustainabilityCommitment } from "@/components/products/KraftSustainabilityCommitment"
import { ProductCTA } from "@/components/products/ProductCTA"
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
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gltradingcompany.com/kraft-paper-solutions/#webpage",
              url: "https://gltradingcompany.com/kraft-paper-solutions",
              name: "Kraft Paper Solutions | GL Trading Company",
              description: "Durable and sustainable Kraft Paper solutions for your packaging needs."
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gltradingcompany.com/kraft-paper-solutions/#breadcrumb",
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
                  name: "Kraft Paper Solutions",
                  item: "https://gltradingcompany.com/kraft-paper-solutions"
                }
              ]
            },
            {
              "@type": "Product",
              "@id": "https://gltradingcompany.com/kraft-paper-solutions/#product",
              name: "Kraft Paper",
              image: "https://gltradingcompany.com/kraft-paper.jpg",
              description: "Durable and sustainable Kraft Paper solutions for your packaging needs.",
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
          <KraftHero />
          <KraftProductsList />
          <KraftSustainabilityCommitment />
          <ProductCTA />
        </main>
      </div>
    </>
  )
}
