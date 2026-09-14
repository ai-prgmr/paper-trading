import type { Metadata } from "next"
import { ProductsLandingHero } from "@/components/products/ProductsLandingHero"
import { ProductsGrid } from "@/components/products/ProductsGrid"
import { ProductCTA } from "@/components/products/ProductCTA"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Our Products | GL Trading Company",
  description: "Explore our comprehensive range of high-quality paper and board solutions, including Kraft Paper, Box Board, Duplex Board, and Copier Paper.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Our Products | GL Trading Company",
    description: "Explore our comprehensive range of high-quality paper and board solutions, including Kraft Paper, Box Board, Duplex Board, and Copier Paper.",
    url: "/products",
  }
}

export default function ProductsLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "GL Trading Company Products",
          description: "Our comprehensive range of paper and board products.",
          url: "https://gltradingcompany.com/products",
          hasPart: [
            {
              "@type": "WebPage",
              name: "Kraft Paper Solutions",
              url: "https://gltradingcompany.com/kraft-paper-solutions"
            },
            {
              "@type": "WebPage",
              name: "Box Board(FBB/SBS) Solutions",
              url: "https://gltradingcompany.com/box-board"
            },
            {
              "@type": "WebPage",
              name: "Duplex Paper Board Solutions",
              url: "https://gltradingcompany.com/duplex-paper-board"
            },
            {
              "@type": "WebPage",
              name: "Copier Paper Solutions",
              url: "https://gltradingcompany.com/copier"
            }
          ]
        }}
      />
      <main className="flex-1 pt-24 min-h-screen bg-surface-bright paper-texture pb-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <ProductsLandingHero />
          <ProductsGrid />
          <ProductCTA />
        </div>
      </main>
    </>
  )
}
