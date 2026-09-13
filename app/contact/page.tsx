import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/ContactHero"
import { InquiryForm } from "@/components/contact/InquiryForm"
import { ContactDetails } from "@/components/contact/ContactDetails"
import { TrustBanner } from "@/components/contact/TrustBanner"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with GL Trading Company for inquiries regarding our paper and board products. Contact us today at  +91 93015 32323 or info@gltradingcompany.com",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | GL Trading Company",
    description: "Get in touch with GL Trading Company for inquiries regarding our paper and board products. Contact us today at  +91 93015 32323 or info@gltradingcompany.com",
    url: "/contact",
  }
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact GL Trading Company",
          description: "Get in touch with GL Trading Company for inquiries regarding our paper and board products. Contact us today at  +91 93015 32323 or info@gltradingcompany.com",
          url: "https://gltradingcompany.com/contact"
        }}
      />
      <main className="flex-1 pt-20">
        <ContactHero />
        {/* Added pt-20 and md:pt-24 to push text below the header */}
        <div className="relative z-10 text-center px-4 pt-24 md:pt-28 pb-12 max-w-container-max mx-auto headline-lg text-headline-lg text-primary">
          <h2 className="mb-4 drop-shadow-md">Connect with GL Trading Company</h2>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto drop-shadow">
            Connecting global mills with local efficiency. Reach out today for wholesale paper solutions and logistics support.
          </p>
        </div>
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <InquiryForm />
            <ContactDetails />
          </div>
        </section>
        <TrustBanner />
      </main>
    </>
  )
}
