"use client"

import { useState } from "react"
import { ProductDescriptionCard } from "./ProductDescriptionCard"

interface KraftProduct {
  id: string
  title: string
  subtitle: string
  image: string
  color: string
  usage: string
  gsm: string
  gsmStartNumeric: number
  shape: string
  ecoText: string
  gradeCategory: "kraft-liner" | "fluting" | "test-liner" | "vtl" | "board"
  formatCategory: "sheet" | "roll" | "both"
}

export function KraftProductsList() {
  const allProducts: KraftProduct[] = [
    {
      id: "kraft-liner",
      title: "Kraft Liner Paper",
      subtitle: "High burst factor (28 - 35 BF) recycled kraft liner engineered for superior Ring Crush Test (RCT) and tensile strength. Premium outer and top liner for corrugated packaging.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsXQzgvEuCb29Pb12rgsx05rg2_P98NwXmIQtSIaPC4GC4W4P3WMO53METDi06-bfYaVlAz_1R7mZJSzBoean8TbhPulZDxle6pTpV3VN1I09k15gkL3pB1UhplvQ6LruU68kwMmqLE9BUDajVsjzBvpbS4rG4prVDQHbFZwzrxp9vUl7E7FlOFOTojEeRkBOfcRjhJ-fRA4qFkx_xvqRiFFCTAklKQ6vXeV0zV_TtVTYKklaa7Ku2",
      color: "Natural Kraft / Golden Brown",
      usage: "Outer / Top Liner for Corrugated Boxes",
      gsm: "140 - 350 GSM",
      gsmStartNumeric: 140,
      shape: "Roll & Sheet Available",
      ecoText: "100% Recyclable",
      gradeCategory: "kraft-liner",
      formatCategory: "both"
    },
    {
      id: "fluting-medium",
      title: "High RCT Chemical Fluting Medium",
      subtitle: "Engineered specifically for exceptional fluting runnability and maximum vertical compression strength. Delivers unmatched stacking strength in corrugated board conversion.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Vsf-0NH_Oq_AhT64ymZ8-LuLrDz-6nuEWIBvCqiLae9-Ce3pCA-8CLVmnZLOrJ9YBXITBu9e-n_DYU19JHUwqfkwLEVqkyEW2yfZPNjBEUZnYFNfee5P5vEVzJ7mPWLDFMervMp7CsdgBz0O93nyKw1vq5PiEcX6raEWzWm3dhWFBAN95ELgsKtXZIoIcLj4Oxck43DK1uBdyYlFHS01Ey39_4ujHvgDGD5aSktThaU9ZsM_A3KJ",
      color: "Natural Fluting Brown",
      usage: "Corrugation Layer / Box Medium",
      gsm: "80 - 180 GSM",
      gsmStartNumeric: 80,
      shape: "Roll / Continuous Reel",
      ecoText: "Eco-Friendly Recycled",
      gradeCategory: "fluting",
      formatCategory: "roll"
    },
    {
      id: "test-liner",
      title: "Test Liner Paper",
      subtitle: "Multi-ply recycled packaging paper with 22 - 28 BF. Outstanding surface printability and strength, widely utilized across FMCG, consumer electronics, and industrial logistics cartons.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS2lg5zTrFuLCyR-va1SZtP3JQZWDTAkDoNxRWI34YKVZjBZAmxrnxJXx2Eq7TXimp1RLG5p5gtsjKHkWJwWibK0qxhUFSYI9hWEaQ-_mH8fErsvmLJQlQJSFgjUqNeJkfsdU_gpd4F1kHcXeVPLaTTnTbtQq0rMb3ReJRC2_YhpZnG_Gr6QV6ZugWl-MFmO0UQhMe21dZp8IecsEwcFsB-coZS_JDBvvKzuaV_e1mEqulW5Y52ASN",
      color: "Test Brown / Natural",
      usage: "Inner & Outer Liners for Cartons",
      gsm: "125 - 350 GSM",
      gsmStartNumeric: 125,
      shape: "Roll & Sheet Available",
      ecoText: "100% Recyclable",
      gradeCategory: "test-liner",
      formatCategory: "both"
    },
    {
      id: "virgin-top-liner",
      title: "Virgin Top Liner (VTL)",
      subtitle: "Premium grade kraft paper with 38 - 40 BF, 1.8+ RCT (CD), and 250 Internal Bond. Delivers high brightness and pristine print contrast for export cartons and display packaging.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlp4OYwYRnFJUpGumyMqQMEtAX6cH4e4luyoJZcBYF72lKDY6F7Hv4nsTpb1JrTTpC1gQhVfRwQNxn-aUYEo4SsdO6IRpwriEr_bLa4rEfNkx-qi9RG-KkxexSH-f0ryd8dQChTSszedYfGXuPYCLe5yVLq8Bo_KJ_Tk1TAZlPaGjqNYTG4dbQFlNZHhxGTmI3YUZjZ5w2bg-NeLUbBHaAjAN-FQxc3kc1TFrJfi7r_RgLweO63_TO",
      color: "Virgin Kraft / Golden Top",
      usage: "Export Packaging / Display Cartons",
      gsm: "180 - 250 GSM",
      gsmStartNumeric: 180,
      shape: "Roll & Sheet Available",
      ecoText: "FSC Certified",
      gradeCategory: "vtl",
      formatCategory: "both"
    },
    {
      id: "semi-chemical-fluting",
      title: "Semi-Chemical Fluting Paper",
      subtitle: "High moisture-resistant corrugated medium tailored for cold-chain logistics, fruit and vegetable packaging, and high-humidity warehouse storage conditions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Vsf-0NH_Oq_AhT64ymZ8-LuLrDz-6nuEWIBvCqiLae9-Ce3pCA-8CLVmnZLOrJ9YBXITBu9e-n_DYU19JHUwqfkwLEVqkyEW2yfZPNjBEUZnYFNfee5P5vEVzJ7mPWLDFMervMp7CsdgBz0O93nyKw1vq5PiEcX6raEWzWm3dhWFBAN95ELgsKtXZIoIcLj4Oxck43DK1uBdyYlFHS01Ey39_4ujHvgDGD5aSktThaU9ZsM_A3KJ",
      color: "Dark Natural Brown",
      usage: "Cold Chain & Heavy Packaging",
      gsm: "100 - 200 GSM",
      gsmStartNumeric: 100,
      shape: "Roll Only",
      ecoText: "Biodegradable",
      gradeCategory: "fluting",
      formatCategory: "roll"
    },
    {
      id: "kraft-liner-board",
      title: "Heavy Duty Kraft Liner Board",
      subtitle: "Industrial heavy-gauge kraft board designed for multi-wall corrugated containers, edge protectors, heavy machinery wrapping, and rigid paper partitions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsXQzgvEuCb29Pb12rgsx05rg2_P98NwXmIQtSIaPC4GC4W4P3WMO53METDi06-bfYaVlAz_1R7mZJSzBoean8TbhPulZDxle6pTpV3VN1I09k15gkL3pB1UhplvQ6LruU68kwMmqLE9BUDajVsjzBvpbS4rG4prVDQHbFZwzrxp9vUl7E7FlOFOTojEeRkBOfcRjhJ-fRA4qFkx_xvqRiFFCTAklKQ6vXeV0zV_TtVTYKklaa7Ku2",
      color: "Industrial Kraft Brown",
      usage: "Heavy Duty Containers & Partitions",
      gsm: "200 - 350 GSM",
      gsmStartNumeric: 200,
      shape: "Roll & Sheet Available",
      ecoText: "100% Recyclable",
      gradeCategory: "board",
      formatCategory: "both"
    }
  ]

  const [gradeFilter, setGradeFilter] = useState<"all" | "kraft-liner" | "fluting" | "test-liner" | "vtl" | "board">("all")
  const [formatFilter, setFormatFilter] = useState<"all" | "roll" | "sheet">("all")
  const [sortBy, setSortBy] = useState<"asc" | "desc">("asc")

  // Filter
  const filtered = allProducts.filter((p) => {
    if (gradeFilter !== "all" && p.gradeCategory !== gradeFilter) return false
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
              Filter & Sort Kraft Inventory
            </h3>
            <span className="text-sm font-medium text-on-surface-variant font-body-md">
              Showing {sorted.length} of {allProducts.length} grades
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
                Paper Grade / Type
              </label>
              <select
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value as any)}
                className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="all">All Paper Grades</option>
                <option value="kraft-liner">Kraft Liner (140 - 350 GSM)</option>
                <option value="fluting">Fluting Medium (80 - 180 GSM)</option>
                <option value="test-liner">Test Liner (125 - 350 GSM)</option>
                <option value="vtl">Virgin Top Liner / VTL (180 - 250 GSM)</option>
                <option value="board">Kraft Liner Board (200 - 350 GSM)</option>
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
                <option value="roll">Rolls / Reels Only</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
                Sort by GSM
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
