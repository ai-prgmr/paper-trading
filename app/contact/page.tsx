import { Navbar } from "@/components/layout/Navbar"
import { ContactHero } from "@/components/contact/ContactHero"
import { InquiryForm } from "@/components/contact/InquiryForm"
import { ContactDetails } from "@/components/contact/ContactDetails"
import { TrustBanner } from "@/components/contact/TrustBanner"
import { Footer } from "@/components/layout/Footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
