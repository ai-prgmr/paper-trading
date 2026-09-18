import type { Metadata } from "next"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { KraftHero } from "@/components/products/KraftHero"
import { KraftProductsList } from "@/components/products/KraftProductsList"
import { kraftProducts } from "@/components/products/kraftData"
import { ProductCTA } from "@/components/products/ProductCTA"
import { KraftSustainabilityCommitment } from "@/components/products/KraftSustainabilityCommitment"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Kraft Paper Solutions | GL Trading Company",
  description: "Durable and sustainable Kraft Paper solutions for your packaging needs, offered by GL Trading Company.",
  alternates: {
    canonical: "/kraft-paper-solutions",
  },
  openGraph: {
    title: "Kraft Paper Solutions | GL Trading Company",
    description: "Durable and sustainable Kraft Paper solutions for your packaging needs.",
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
              "@type": "CollectionPage",
              "@id": "https://gltradingcompany.com/kraft-paper-solutions/#webpage",
              url: "https://gltradingcompany.com/kraft-paper-solutions",
              name: "Kraft Paper Solutions | GL Trading Company",
              description: "Durable and sustainable Kraft Paper solutions for your packaging needs.",
              breadcrumb: { "@id": "https://gltradingcompany.com/kraft-paper-solutions/#breadcrumb" },
              mainEntity: { "@id": "https://gltradingcompany.com/kraft-paper-solutions/#productlist" }
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
              "@type": "ItemList",
              "@id": "https://gltradingcompany.com/kraft-paper-solutions/#productlist",
              itemListElement: kraftProducts.map((v, i) => {
                return {
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Product",
                    "@id": `https://gltradingcompany.com/kraft-paper-solutions#${v.id}`,
                    name: v.title,
                    description: v.subtitle,
                    image: v.image.startsWith('/') ? `https://gltradingcompany.com${v.image}` : v.image,
                    url: `https://gltradingcompany.com/kraft-paper-solutions#${v.id}`,
                    brand: {
                      "@type": "Brand",
                      name: "GL Trading Company"
                    },
                    additionalProperty: [
                      { "@type": "PropertyValue", name: "Material", value: "Kraft Paper" },
                      { "@type": "PropertyValue", name: "GSM Range", value: v.gsm },
                      { "@type": "PropertyValue", name: "Eco Friendly", value: v.ecoText },
                      { "@type": "PropertyValue", name: "Usage", value: v.usage },
                      { "@type": "PropertyValue", name: "Color", value: v.color },
                      { "@type": "PropertyValue", name: "Shape", value: v.shape }
                    ]
                  }
                }
              })
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
