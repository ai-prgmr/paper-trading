"use client"

import { useState } from "react"
import { ProductDescriptionCard } from "./ProductDescriptionCard"

interface KraftProduct {
  id: string
  title: string
  subtitle: string
  price: string
  image: string
  color: string
  usage: string
  gsm: string
  gsmStartNumeric: number
  shape: string
  ecoText: string
  colorCategory: "white" | "brown"
  formatCategory: "sheet" | "roll" | "both"
}

export function KraftProductsList() {
  const allProducts: KraftProduct[] = [
    {
      id: "white-kraft",
      title: "White Kraft Paper",
      subtitle: "Premium aesthetic for high-end retail packaging and carrier bags. Exceptional strength and print contrast.",
      price: "₹ 42 / Kg",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlp4OYwYRnFJUpGumyMqQMEtAX6cH4e4luyoJZcBYF72lKDY6F7Hv4nsTpb1JrTTpC1gQhVfRwQNxn-aUYEo4SsdO6IRpwriEr_bLa4rEfNkx-qi9RG-KkxexSH-f0ryd8dQChTSszedYfGXuPYCLe5yVLq8Bo_KJ_Tk1TAZlPaGjqNYTG4dbQFlNZHhxGTmI3YUZjZ5w2bg-NeLUbBHaAjAN-FQxc3kc1TFrJfi7r_RgLweO63_TO",
      color: "White",
      usage: "Packaging/Retail Industrial",
      gsm: "60 - 180 GSM",
      gsmStartNumeric: 60,
      shape: "Roll/Sheet",
      ecoText: "100% Recyclable",
      colorCategory: "white",
      formatCategory: "both"
    },
    {
      id: "brown-kraft",
      title: "Brown Kraft Paper",
      subtitle: "Standard high-durability industrial wrapping and bagging solutions. Robust structural density.",
      price: "₹ 42 / Kg",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS2lg5zTrFuLCyR-va1SZtP3JQZWDTAkDoNxRWI34YKVZjBZAmxrnxJXx2Eq7TXimp1RLG5p5gtsjKHkWJwWibK0qxhUFSYI9hWEaQ-_mH8fErsvmLJQlQJSFgjUqNeJkfsdU_gpd4F1kHcXeVPLaTTnTbtQq0rMb3ReJRC2_YhpZnG_Gr6QV6ZugWl-MFmO0UQhMe21dZp8IecsEwcFsB-coZS_JDBvvKzuaV_e1mEqulW5Y52ASN",
      color: "Natural Brown",
      usage: "General Packaging/Wrapping",
      gsm: "40 - 200 GSM",
      gsmStartNumeric: 40,
      shape: "Roll/Sheet",
      ecoText: "Biodegradable",
      colorCategory: "brown",
      formatCategory: "both"
    },
    {
      id: "packaging-kraft",
      title: "Brown Packaging Kraft Paper",
      subtitle: "Reinforced tensile strength engineered specifically for manufacturing corrugated boxes and heavy shipping wraps.",
      price: "₹ 42 / Kg",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsXQzgvEuCb29Pb12rgsx05rg2_P98NwXmIQtSIaPC4GC4W4P3WMO53METDi06-bfYaVlAz_1R7mZJSzBoean8TbhPulZDxle6pTpV3VN1I09k15gkL3pB1UhplvQ6LruU68kwMmqLE9BUDajVsjzBvpbS4rG4prVDQHbFZwzrxp9vUl7E7FlOFOTojEeRkBOfcRjhJ-fRA4qFkx_xvqRiFFCTAklKQ6vXeV0zV_TtVTYKklaa7Ku2",
      color: "Dark Brown",
      usage: "Heavy Duty Packaging",
      gsm: "120 - 350 GSM",
      gsmStartNumeric: 120,
      shape: "Sheet/Roll",
      ecoText: "FSC Certified",
      colorCategory: "brown",
      formatCategory: "both"
    },
    {
      id: "kraft-roll",
      title: "Brown Kraft Paper Roll",
      subtitle: "High-capacity continuous rolls optimized for automatic folder-gluer lines, rotary printing presses, and industrial wrapping.",
      price: "₹ 42 / Kg",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Vsf-0NH_Oq_AhT64ymZ8-LuLrDz-6nuEWIBvCqiLae9-Ce3pCA-8CLVmnZLOrJ9YBXITBu9e-n_DYU19JHUwqfkwLEVqkyEW2yfZPNjBEUZnYFNfee5P5vEVzJ7mPWLDFMervMp7CsdgBz0O93nyKw1vq5PiEcX6raEWzWm3dhWFBAN95ELgsKtXZIoIcLj4Oxck43DK1uBdyYlFHS01Ey39_4ujHvgDGD5aSktThaU9ZsM_A3KJ",
      color: "Brown",
      usage: "Industrial/Printing",
      gsm: "70 - 150 GSM",
      gsmStartNumeric: 70,
      shape: "Roll Only",
      ecoText: "Fully Recyclable",
      colorCategory: "brown",
      formatCategory: "roll"
    }
  ]

  const [colorFilter, setColorFilter] = useState<"all" | "white" | "brown">("all")
  const [formatFilter, setFormatFilter] = useState<"all" | "roll" | "sheet">("all")
  const [sortBy, setSortBy] = useState<"asc" | "desc">("asc")

  // Filter
  const filtered = allProducts.filter((p) => {
    if (colorFilter !== "all" && p.colorCategory !== colorFilter) return false
    if (formatFilter === "roll" && p.formatCategory === "sheet") return false
    if (formatFilter === "sheet" && p.formatCategory === "roll") return false
    return true
  })

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    return sortBy === "asc" ? a.gsmStartNumeric - b.gsmStartNumeric : b.gsmStartNumeric - a.gsmStartNumeric
  })

  return (
    <div className="space-y-12">
      {/* Filters Bar */}
      <div className="max-w-container-max mx-auto mt-8">
        <div className="flex flex-col gap-6 bg-surface-container-low p-6 rounded border border-outline-variant text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-title-md text-title-md font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">filter_alt</span>
              Filter & Sort Kraft Portfolio
            </h3>
            <span className="text-sm font-medium text-on-surface-variant font-body-md">
              Showing {sorted.length} of {allProducts.length} products
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
                Paper Color
              </label>
              <select
                value={colorFilter}
                onChange={(e) => setColorFilter(e.target.value as any)}
                className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="all">All Colors</option>
                <option value="white">White Kraft</option>
                <option value="brown">Brown Kraft (Natural & Dark)</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
                Format Option
              </label>
              <select
                value={formatFilter}
                onChange={(e) => setFormatFilter(e.target.value as any)}
                className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="all">All Formats (Sheets & Rolls)</option>
                <option value="sheet">Sheets Available</option>
                <option value="roll">Rolls Available</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
                Sort by Starting GSM
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="asc">GSM: Lowest First</option>
                <option value="desc">GSM: Highest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product List using Reusable Product Card */}
      <div className="max-w-container-max mx-auto space-y-12">
        {sorted.map((p) => (
          <ProductDescriptionCard
            key={p.id}
            title={p.title}
            price={p.price}
            description={p.subtitle}
            badgeText={p.gsm}
            image={p.image}
            moq="Minimum Order Quantity: 1000 Kg"
            specs={{
              material: "Kraft Paper",
              color: p.color,
              usage: p.usage,
              gsmRange: p.gsm,
              shape: p.shape,
              eco: p.ecoText
            }}
          />
        ))}
        {sorted.length === 0 && (
          <div className="text-center py-16 bg-white border border-outline-variant rounded">
            <span className="material-symbols-outlined text-5xl text-outline mb-4">info</span>
            <p className="text-on-surface-variant">No products match your filter selections.</p>
          </div>
        )}
      </div>
    </div>
  )
}
