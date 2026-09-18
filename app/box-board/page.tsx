import type { Metadata } from "next"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { BoxBoardHero } from "@/components/products/BoxBoardHero"
import { BoxBoardList } from "@/components/products/BoxBoardList"
import { boxBoardProducts } from "@/components/products/boxBoardData"
import { ProductCTA } from "@/components/products/ProductCTA"
import { BoxBoardTrustSection } from "@/components/products/BoxBoardTrustSection"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Box Board (FBB/SBS) Solutions",
  description: "Premium Box Board (FBB/SBS) solutions for high-end packaging, offered by GL Trading Company.",
  alternates: {
    canonical: "/box-board",
  },
  openGraph: {
    title: "Box Board (FBB/SBS) Solutions | GL Trading Company",
    description: "Premium Box Board (FBB/SBS) solutions for high-end packaging.",
    url: "/box-board",
  }
}

export default function BoxBoardPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://gltradingcompany.com/box-board/#webpage",
              url: "https://gltradingcompany.com/box-board",
              name: "Box Board(FBB/SBS) Solutions | GL Trading Company",
              description: "Premium Box Board materials ideal for rigid packaging and premium boxes.",
              breadcrumb: { "@id": "https://gltradingcompany.com/box-board/#breadcrumb" },
              mainEntity: { "@id": "https://gltradingcompany.com/box-board/#productlist" }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gltradingcompany.com/box-board/#breadcrumb",
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
                  name: "Box Board",
                  item: "https://gltradingcompany.com/box-board"
                }
              ]
            },
            {
              "@type": "ItemList",
              "@id": "https://gltradingcompany.com/box-board/#productlist",
              itemListElement: boxBoardProducts.map((v, i) => {
                return {
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Product",
                    "@id": `https://gltradingcompany.com/box-board#${v.id}`,
                    name: v.title,
                    description: v.subtitle,
                    image: v.image.startsWith('/') ? `https://gltradingcompany.com${v.image}` : v.image,
                    url: `https://gltradingcompany.com/box-board#${v.id}`,
                    brand: {
                      "@type": "Brand",
                      name: "GL Trading Company"
                    },
                    additionalProperty: [
                      { "@type": "PropertyValue", name: "Material", value: v.specs.material },
                      { "@type": "PropertyValue", name: "GSM Range", value: v.specs.gsmRange },
                      { "@type": "PropertyValue", name: "Eco Friendly", value: v.specs.eco },
                      { "@type": "PropertyValue", name: "Usage", value: v.specs.usage },
                      { "@type": "PropertyValue", name: "Color", value: v.specs.color },
                      { "@type": "PropertyValue", name: "Shape", value: v.specs.shape }
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
          <BoxBoardHero />
          <BoxBoardList />
          <BoxBoardTrustSection />
          <ProductCTA />
        </main>
      </div>
    </>
  )
}
