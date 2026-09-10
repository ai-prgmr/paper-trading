import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gltradingcompany.com'),
  title: {
    default: "GL Trading Company | Paper & Board Trading",
    template: "%s | GL Trading Company"
  },
  description: "GL Trading Company is a premier supplier of high-quality paper and board products, specializing in Duplex Board, Folding Box Board (FBB), and Kraft Paper solutions.",
  openGraph: {
    title: "GL Trading Company | Paper & Board Trading",
    description: "GL Trading Company is a premier supplier of high-quality paper and board products, specializing in Duplex Board, Folding Box Board (FBB), and Kraft Paper solutions.",
    url: "/",
    siteName: "GL Trading Company",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GL Trading Company | Paper & Board Trading",
    description: "Trading of paper, specifically Duplex, FBB, Kraft and many more.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased font-sans"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GL Trading Company",
            url: "https://gltradingcompany.com",
            description: "GL Trading Company is a premier supplier of high-quality paper and board products, specializing in Duplex Board, Folding Box Board (FBB), and Kraft Paper solutions.",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
            }
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        <WhatsAppFloat />
      </body>
    </html>
  )
}
