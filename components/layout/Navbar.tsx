"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/", icon: "home" },
    { name: "Products", href: "/kraft-paper-solutions", icon: "inventory_2", matchPrefix: ["/kraft-paper-solutions", "/coated-duplex-board", "/duplex-paper-board"] },
    { name: "About Us", href: "/about", icon: "corporate_fare" },
    { name: "Contact", href: "/contact", icon: "mail" },
  ]

  const isLinkActive = (item: typeof navItems[0]) => {
    if (item.matchPrefix) {
      return item.matchPrefix.some(prefix => pathname.startsWith(prefix))
    }
    return pathname === item.href
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant h-30">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image alt="G L Paper Trading Company" src="/paper-trading/logo-5.png" width={150} height={150} />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 pt-1">
          {navItems.map((item) => {
            const active = isLinkActive(item)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-title-sm text-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${active
                  ? "bg-primary text-white border-primary shadow-sm shadow-primary/10 scale-105"
                  : "border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container-high/80"
                  }`}
              >
                {/* <span className="material-symbols-outlined text-[18px] shrink-0">{item.icon}</span> */}
                <span className="font-semibold tracking-wide">{item.name}</span>
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contact">
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all duration-300 transform active:scale-95">
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant py-6 px-margin-mobile flex flex-col gap-3 shadow-lg animate-in slide-in-from-top duration-200 z-50">
          {navItems.map((item) => {
            const active = isLinkActive(item)
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-semibold tracking-wide transition-all ${active
                  ? "bg-primary border-primary text-white shadow-sm"
                  : "bg-surface-container-low border-outline-variant/30 text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
                  }`}
              >
                {/* <span className="material-symbols-outlined text-[20px] shrink-0">{item.icon}</span> */}
                <span>{item.name}</span>
              </Link>
            )
          })}
          <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30 mt-2">
            <Link href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold w-full text-center hover:opacity-90 active:scale-[0.98] transition-all">
                Request Quote
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
