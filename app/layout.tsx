import type { Metadata } from "next"
import Script from "next/script"
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from "@/components/seo/JsonLd"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  metadataBase: 'https://gltradingcompany.com',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BZZQ6F82DE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BZZQ6F82DE');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GL Trading Company",
            url: "https://gltradingcompany.com",
            logo: "https://gltradingcompany.com/logo-6.png",
            description: "GL Trading Company is a premier supplier of high-quality paper and board products, specializing in Duplex Board, Folding Box Board (FBB), and Kraft Paper solutions.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-93015-32323",
              contactType: "sales",
              email: "info@gltradingcompany.com"
            }
          }}
        />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <WhatsAppFloat />
      </body>
    </html>
  )
}
