"use client"

import { useState } from "react"
import { ProductDescriptionCard } from "./ProductDescriptionCard"
import { VariantData, duplexVariants } from "./duplexData"

export function DuplexVariantsList() {
  const allVariants = duplexVariants

  const [formatFilter, setFormatFilter] = useState<"all" | "sheets" | "rolls">("all")
  const [usageFilter, setUsageFilter] = useState<"all" | "box" | "print" | "pack" | "luxury">("all")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  // Filter
  const filtered = allVariants.filter((v) => {
    if (formatFilter === "sheets" && v.format !== "Sheet/Roll") return false
    if (formatFilter === "rolls" && v.format !== "Roll Only") return false

    if (usageFilter !== "all") {
      const matchMap: Record<string, string> = {
        box: "Box Making",
        print: "Printing",
        pack: "Packaging",
        luxury: "Luxury Box",
      }
      if (v.usage !== matchMap[usageFilter] && v.usage !== "Rotary Print") {
        if (usageFilter === "print" && v.usage === "Rotary Print") {
          // print covers rotary print
        } else {
          return false
        }
      }
    }
    return true
  })

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    return sortOrder === "asc" ? a.gsmStartNumeric - b.gsmStartNumeric : b.gsmStartNumeric - a.gsmStartNumeric
  })

  return (
    <div className="space-y-12">
      {/* Filters Bar */}
      <div className="flex flex-col gap-6 bg-surface-container-low p-6 rounded border border-outline-variant text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-title-md text-title-md font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">filter_alt</span>
            Filter & Sort Products
          </h3>
          <span className="text-sm font-medium text-on-surface-variant font-body-md">
            Showing {sorted.length} of {allVariants.length} variants
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
              Format Type
            </label>
            <select
              value={formatFilter}
              onChange={(e) => setFormatFilter(e.target.value as any)}
              className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">All Formats (Sheets & Rolls)</option>
              <option value="sheets">Sheets Available</option>
              <option value="rolls">Rolls Only</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
              Primary Use-Case
            </label>
            <select
              value={usageFilter}
              onChange={(e) => setUsageFilter(e.target.value as any)}
              className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">All Use Cases</option>
              <option value="box">Box Making / Cardboards</option>
              <option value="print">Offset & Rotary Printing</option>
              <option value="pack">Consumer Goods Packaging</option>
              <option value="luxury">Luxury Boxes</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
              Sort by GSM
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="asc">GSM: Lowest First</option>
              <option value="desc">GSM: Highest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid List using Reusable Product Card */}
      <div className="grid grid-cols-1 gap-12 text-left">
        {sorted.map((v) => (
          <ProductDescriptionCard
            key={v.id}
            id={v.id}
            title={v.title}
            description={v.description}
            badgeText={v.badgeText}
            image={v.image}
            moq={v.moq}
            specs={{
              material: "Duplex Board",
              color: v.color,
              usage: v.usage,
              gsmRange: v.gsm,
              shape: v.type,
              eco: "Yes"
            }}
          />
        ))}
        {sorted.length === 0 && (
          <div className="text-center py-16 bg-white border border-outline-variant rounded">
            <span className="material-symbols-outlined text-5xl text-outline mb-4">info</span>
            <p className="text-on-surface-variant">No variants match your selected filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
