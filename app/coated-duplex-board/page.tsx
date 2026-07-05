import { Navbar } from "@/components/layout/Navbar"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { CoatedDuplexHero } from "@/components/products/CoatedDuplexHero"
import { CoatedDuplexGrid } from "@/components/products/CoatedDuplexGrid"
import { QualityControlSection } from "@/components/products/QualityControlSection"
import { Footer } from "@/components/layout/Footer"

export default function CoatedDuplexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex max-w-container-max mx-auto w-full pt-20">
        <ProductSidebar />
        <main className="flex-1 min-w-0 px-margin-mobile md:px-margin-desktop py-12 bg-surface-bright paper-texture min-h-screen">
          <ProductCategoryMobileNav />
          <CoatedDuplexHero />
          <CoatedDuplexGrid />
          <QualityControlSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}
