import { Navbar } from "@/components/layout/Navbar"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { DuplexBoardHero } from "@/components/products/DuplexBoardHero"
import { DuplexVariantsList } from "@/components/products/DuplexVariantsList"
import { DuplexTrustSection } from "@/components/products/DuplexTrustSection"
import { Footer } from "@/components/layout/Footer"

export default function DuplexPaperBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex max-w-container-max mx-auto w-full pt-20">
        <ProductSidebar />
        <main className="flex-1 min-w-0 px-margin-mobile md:px-margin-desktop py-12 bg-surface-bright paper-texture min-h-screen">
          <ProductCategoryMobileNav />
          <DuplexBoardHero />
          <DuplexVariantsList />
          <DuplexTrustSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}
