"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/kraft-paper-solutions", matchPrefix: ["/kraft-paper-solutions", "/coated-duplex-board", "/duplex-paper-board"] },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isLinkActive = (item: typeof navItems[0]) => {
    if (item.matchPrefix) {
      return item.matchPrefix.some(prefix => pathname.startsWith(prefix))
    }
    return pathname === item.href
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant h-20">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display-lg text-title-md md:text-headline-lg font-bold text-on-primary-container dark:text-primary-fixed">
            G L Paper Trading
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 pt-2">
          {navItems.map((item) => {
            const active = isLinkActive(item)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-title-sm text-title-sm pb-1 transition-colors duration-200 cursor-pointer",
                  active
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contact">
            <button className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all duration-300 transform active:scale-95">
              Request Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary focus:outline-none cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center z-50"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-3xl select-none pointer-events-none">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Links Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant py-4 px-margin-mobile flex flex-col gap-4 shadow-lg animate-in slide-in-from-top duration-200 z-50">
          {navItems.map((item) => {
            const active = isLinkActive(item)
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "font-title-md text-title-md py-2 border-b border-outline-variant/30",
                  active
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            )
          })}
          <div className="flex items-center justify-between pt-2">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-semibold w-full text-center">
                Request Quote
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
