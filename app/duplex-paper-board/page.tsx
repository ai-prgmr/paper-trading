import type { Metadata } from "next"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { DuplexBoardHero } from "@/components/products/DuplexBoardHero"
import { DuplexVariantsList } from "@/components/products/DuplexVariantsList"
import { duplexVariants } from "@/components/products/duplexData"
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
              "@type": "CollectionPage",
              "@id": "https://gltradingcompany.com/duplex-paper-board/#webpage",
              url: "https://gltradingcompany.com/duplex-paper-board",
              name: "Duplex Paper Board Solutions | GL Trading Company",
              description: "High-quality Duplex Paper Board for packaging and printing applications.",
              breadcrumb: { "@id": "https://gltradingcompany.com/duplex-paper-board/#breadcrumb" },
              mainEntity: { "@id": "https://gltradingcompany.com/duplex-paper-board/#productlist" }
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
              "@type": "ItemList",
              "@id": "https://gltradingcompany.com/duplex-paper-board/#productlist",
              itemListElement: duplexVariants.map((v, i) => {
                return {
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Product",
                    "@id": `https://gltradingcompany.com/duplex-paper-board#${v.id}`,
                    name: v.title,
                    description: v.description,
                    image: v.image.startsWith('/') ? `https://gltradingcompany.com${v.image}` : v.image,
                    url: `https://gltradingcompany.com/duplex-paper-board#${v.id}`,
                    brand: {
                      "@type": "Brand",
                      name: "GL Trading Company"
                    },
                    additionalProperty: [
                      { "@type": "PropertyValue", name: "Material", value: "Duplex Board" },
                      { "@type": "PropertyValue", name: "GSM Range", value: v.gsm },
                      { "@type": "PropertyValue", name: "Eco Friendly", value: "Yes" },
                      { "@type": "PropertyValue", name: "Usage", value: v.usage },
                      { "@type": "PropertyValue", name: "Color", value: v.color },
                      { "@type": "PropertyValue", name: "Shape", value: v.type }
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
          <DuplexBoardHero />
          <DuplexVariantsList />
          <ProductCTA />
          <DuplexTrustSection />
        </main>
      </div>
    </>
  )
}
