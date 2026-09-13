import type { Metadata } from "next"
import { AboutHero } from "@/components/about/AboutHero"
import { FoundersMessage } from "@/components/about/FoundersMessage"
import { CompanyOverview } from "@/components/about/CompanyOverview"
import { MissionVision } from "@/components/about/MissionVision"
import { QualityCommitment } from "@/components/about/QualityCommitment"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about GL Trading Company, our founders, and our commitment to quality in the paper and board trading industry.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | GL Trading Company",
    description: "Learn about GL Trading Company, our founders, and our commitment to quality in the paper and board trading industry.",
    url: "/about",
  }
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About GL Trading Company",
          description: "Learn about GL Trading Company, our founders, and our commitment to quality.",
          url: "https://gltradingcompany.com/about"
        }}
      />
      <main className="flex-1 pt-20">
        <AboutHero />
        <FoundersMessage />
        <CompanyOverview />
        <MissionVision />
        <QualityCommitment />
      </main>
    </>
  )
}
