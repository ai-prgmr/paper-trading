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
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gltradingcompany.com/copier/#webpage",
              url: "https://gltradingcompany.com/copier",
              name: "Copier Paper Solutions | GL Trading Company",
              description: "High-quality A3 and A4 Copier Paper (70-100 GSM) for office and commercial use."
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gltradingcompany.com/copier/#breadcrumb",
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
                  name: "Copier Paper",
                  item: "https://gltradingcompany.com/copier"
                }
              ]
            },
            {
              "@type": "Product",
              "@id": "https://gltradingcompany.com/copier/#product",
              name: "Copier Paper",
              image: "https://gltradingcompany.com/copier-paper.jpg",
              description: "High-quality A3 and A4 Copier Paper (70-100 GSM) for office and commercial use.",
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
          <CopierHero />
          <CopierList />
          <ProductCTA />
        </main>
      </div>
    </>
  )
}
