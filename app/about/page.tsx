import { Navbar } from "@/components/layout/Navbar"
import { AboutHero } from "@/components/about/AboutHero"
import { CompanyOverview } from "@/components/about/CompanyOverview"
import { MissionVision } from "@/components/about/MissionVision"
import { QualityCommitment } from "@/components/about/QualityCommitment"
import { GlobalLocalPresence } from "@/components/about/GlobalLocalPresence"
import { Infrastructure } from "@/components/about/Infrastructure"
import { Footer } from "@/components/layout/Footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        <AboutHero />
        <CompanyOverview />
        <MissionVision />
        <QualityCommitment />
        <GlobalLocalPresence />
        <Infrastructure />
      </main>
      <Footer />
    </div>
  )
}
