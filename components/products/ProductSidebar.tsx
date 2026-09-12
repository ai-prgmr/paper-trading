"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function ProductSidebar() {
  const pathname = usePathname()

  const categories = [
    {
      name: "Box Board (FBB / SBS)",
      href: "/box-board",
      icon: "layers",
      disabled: false
    },
    {
      name: "Duplex Paper Board",
      href: "/duplex-paper-board",
      icon: "description",
      disabled: false
    },
    {
      name: "Kraft Paper",
      href: "/kraft-paper-solutions",
      icon: "inventory_2",
      disabled: false,
    }

  ]

  return (
    <aside className="hidden lg:flex flex-col h-[calc(100vh-80px)] w-64 sticky top-20 border-r border-outline-variant bg-surface-container-low z-40">

      <nav className="flex-1 overflow-y-auto py-12">
        {categories.map((cat) => {
          const active = pathname === cat.href
          if (cat?.disabled) {
            return (
              <span
                key={cat.name}
                className="flex items-center gap-4 px-6 py-4 w-full text-on-surface-variant/40 cursor-not-allowed font-label-sm text-label-sm uppercase tracking-wider"
              >
                <span className="material-symbols-outlined">{cat.icon}</span>
                <span>{cat.name}</span>
              </span>
            )
          }
          return (
            <Link
              key={cat.name}
              href={cat.href}
              className={cn(
                "flex items-center gap-4 px-6 py-4 w-full transition-colors font-label-sm text-label-sm uppercase tracking-wider border-r-4",
                active
                  ? "bg-secondary-container text-on-secondary-container border-secondary font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high border-transparent"
              )}
            >
              <span className="material-symbols-outlined">{cat.icon}</span>
              <span>{cat.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
