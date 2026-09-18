"use client"

import { useState } from "react"
import { ProductDescriptionCard } from "./ProductDescriptionCard"

import { kraftProducts } from "./kraftData"

export function KraftProductsList() {
  const allProducts = kraftProducts

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
            id={p.id}
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
