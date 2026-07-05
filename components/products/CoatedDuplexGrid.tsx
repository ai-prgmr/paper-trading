"use client"

import { useState } from "react"
import { ProductDescriptionCard } from "./ProductDescriptionCard"

export function CoatedDuplexGrid() {
  const allGsms = [150, 180, 220, 230, 285, 296, 320, 370, 380, 400, 430]
  
  const [gsmFilter, setGsmFilter] = useState<"all" | "light" | "heavy">("all")
  const [sortBy, setSortBy] = useState<"asc" | "desc">("asc")

  // Filter
  const filteredGsms = allGsms.filter((gsm) => {
    if (gsmFilter === "light") return gsm < 250
    if (gsmFilter === "heavy") return gsm >= 250
    return true
  })

  // Sort
  const sortedGsms = [...filteredGsms].sort((a, b) => {
    return sortBy === "asc" ? a - b : b - a
  })

  return (
    <div className="space-y-12">
      {/* Header and Responsive Filter Bar */}
      <div className="flex flex-col gap-6 border-b border-outline-variant pb-6 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-headline-lg text-headline-lg text-primary flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">inventory</span>
            Available Variants
          </h2>
          <p className="text-on-surface-variant font-medium font-body-md text-sm sm:text-base">
            {sortedGsms.length} of {allGsms.length} Variants Found
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row gap-4 bg-surface-container-low p-4 rounded border border-outline-variant">
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
              Filter by GSM Range
            </label>
            <select
              value={gsmFilter}
              onChange={(e) => setGsmFilter(e.target.value as any)}
              className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">All GSM Ranges</option>
              <option value="light">Light Grade (Under 250 GSM)</option>
              <option value="heavy">Heavy Industrial (250+ GSM)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5 flex-1">
            <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
              Sort Order
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="asc">GSM: Low to High</option>
              <option value="desc">GSM: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid List using Reusable Product Card */}
      <div className="grid grid-cols-1 gap-12 text-left">
        {sortedGsms.map((gsm) => (
          <ProductDescriptionCard
            key={gsm}
            title={`${gsm} GSM Coated Duplex Board`}
            price="₹ 36 / Kg"
            description="Premium multi-layered duplex board with a high-brightness coated front surface and sturdy grey back. Perfect for high-speed automated packaging lines."
            badgeText={`${gsm} GSM`}
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBwZSA02nG5EZd7ONi0PQGL8dSRJzUyFP8KrYoGkOEU598JJrE9tCKOAY6gwcnabxBJDnjtWt1_IFxEBTl6zT_gk4JicjuyHGALhUCkfj-_YD3NXfjv5P982T0zb7t6MOQpVV0UmltG0xrPqgesRM_BiWZwhG5PBIf68SLAnmO5XvggB_NR9cPlQSopk-asXFbfCzhIE1km3jfNNQc0CotiwvAwL-qnkokiZalOMqj46pt8rHiTe4sO"
            moq="Minimum Order Quantity: 1500 Kg"
            specs={{
              material: "Coated Duplex",
              color: "White Front / Grey Back",
              usage: "Printing & Packaging",
              gsmRange: `${gsm} GSM`,
              shape: "Sheet/Roll",
              eco: "Yes"
            }}
          />
        ))}
        {sortedGsms.length === 0 && (
          <div className="text-center py-16 bg-white border border-outline-variant rounded">
            <span className="material-symbols-outlined text-5xl text-outline mb-4">info</span>
            <p className="text-on-surface-variant">No variants match your filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
