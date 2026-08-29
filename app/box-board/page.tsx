import { Navbar } from "@/components/layout/Navbar"
import { ProductSidebar } from "@/components/products/ProductSidebar"
import { ProductCategoryMobileNav } from "@/components/products/ProductCategoryMobileNav"
import { BoxBoardHero } from "@/components/products/BoxBoardHero"
import { BoxBoardList } from "@/components/products/BoxBoardList"
import { BoxBoardTrustSection } from "@/components/products/BoxBoardTrustSection"
import { Footer } from "@/components/layout/Footer"

export default function BoxBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex max-w-container-max mx-auto w-full pt-20">
        <ProductSidebar />
        <main className="flex-1 min-w-0 px-margin-mobile md:px-margin-desktop py-12 bg-surface-bright paper-texture min-h-screen">
          <ProductCategoryMobileNav />
          <BoxBoardHero />
          <BoxBoardList />
          <BoxBoardTrustSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}
