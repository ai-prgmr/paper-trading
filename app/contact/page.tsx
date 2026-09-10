import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { ContactHero } from "@/components/contact/ContactHero"
import { InquiryForm } from "@/components/contact/InquiryForm"
import { ContactDetails } from "@/components/contact/ContactDetails"
import { TrustBanner } from "@/components/contact/TrustBanner"
import { Footer } from "@/components/layout/Footer"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with GL Trading Company for inquiries regarding our paper and board products.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | GL Trading Company",
    description: "Get in touch with GL Trading Company for inquiries regarding our paper and board products.",
    url: "/contact",
  }
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact GL Trading Company",
          description: "Get in touch with GL Trading Company for inquiries regarding our paper and board products.",
          url: "https://gltradingcompany.com/contact"
        }}
      />
      <Navbar />
      <main className="flex-1 pt-20">
        <ContactHero />
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <InquiryForm />
            <ContactDetails />
          </div>
        </section>
        <TrustBanner />
      </main>
      <Footer />
    </div>
  )
}
