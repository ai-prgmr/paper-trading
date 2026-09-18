import type { Metadata } from "next"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { CopierHero } from "@/components/products/CopierHero"
import { CopierList } from "@/components/products/CopierList"
import { ProductCTA } from "@/components/products/ProductCTA"
import { JsonLd } from "@/components/seo/JsonLd"
import { copierProducts } from "@/components/products/copierData"

export const metadata: Metadata = {
  title: "Copier Paper Solutions",
  description: "Premium A3 and A4 Copier Paper solutions for professional and commercial use, offered by GL Trading Company.",
  alternates: {
    canonical: "/copier",
  },
  openGraph: {
    title: "Copier Paper Solutions | GL Trading Company",
    description: "Premium A3 and A4 Copier Paper solutions for professional and commercial use.",
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
              "@type": "CollectionPage",
              "@id": "https://gltradingcompany.com/copier/#webpage",
              url: "https://gltradingcompany.com/copier",
              name: "Copier Paper Solutions | GL Trading Company",
              description: "High-quality A3 and A4 Copier Paper (70-100 GSM) for office and commercial use.",
              breadcrumb: { "@id": "https://gltradingcompany.com/copier/#breadcrumb" },
              mainEntity: { "@id": "https://gltradingcompany.com/copier/#productlist" }
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
              "@type": "ItemList",
              "@id": "https://gltradingcompany.com/copier/#productlist",
              itemListElement: copierProducts.map((v, i) => {
                return {
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Product",
                    "@id": `https://gltradingcompany.com/copier#${v.id}`,
                    name: v.title,
                    description: v.subtitle,
                    image: v.image.startsWith('/') ? `https://gltradingcompany.com${v.image}` : v.image,
                    url: `https://gltradingcompany.com/copier#${v.id}`,
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
          <CopierHero />
          <CopierList />
          <ProductCTA />
        </main>
      </div>
    </>
  )
}
