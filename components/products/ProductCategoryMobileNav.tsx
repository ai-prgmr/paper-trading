"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function ProductCategoryMobileNav() {
  const pathname = usePathname()

  const categories = [
    {
      name: "Kraft Paper",
      href: "/kraft-paper-solutions",
      icon: "inventory_2",
    },
    {
      name: "Coated Duplex",
      href: "/coated-duplex-board",
      icon: "layers",
    },
    {
      name: "Duplex Board",
      href: "/duplex-paper-board",
      icon: "description",
    },
  ]

  return (
    <div className="lg:hidden w-full mb-8 border-b border-outline-variant pb-4 grid grid-cols-2 gap-2 px-1">
      {categories.map((cat, idx) => {
        const active = pathname === cat.href
        return (
          <Link
            key={cat.name}
            href={cat.href}
            className={cn("w-full", idx === 2 ? "col-span-2" : "")}
          >
            <button
              className={cn(
                "flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer w-full text-center",
                active
                  ? "bg-primary border-primary text-white shadow-sm"
                  : "bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              <span className="material-symbols-outlined text-[16px] shrink-0">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          </Link>
        )
      })}
    </div>
  )
}
