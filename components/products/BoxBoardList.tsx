"use client"

import { useState } from "react"
import { ProductDescriptionCard } from "./ProductDescriptionCard"

interface BoxBoardProduct {
  id: string
  title: string
  subtitle: string
  badgeText: string
  image: string
  moq: string
  gsm: string
  gsmStartNumeric: number
  boardType: "fbb" | "sbs"
  format: "both" | "sheet" | "roll"
  specs: {
    material: string
    color: string
    usage: string
    gsmRange: string
    shape: string
    eco: string
  }
}

export function BoxBoardList() {
  const products: BoxBoardProduct[] = [
    {
      id: "folding-box-board",
      title: "Folding Box Board (FBB / GC1 & GC2)",
      subtitle: "Multi-layered virgin paperboard comprising bleached chemical outer layers and mechanical pulp core. Combines ultra-high bulk and bending stiffness with exceptional surface smoothness for high-speed folding cartons and luxury packaging.",
      badgeText: "GSM: 200 - 450",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBev8BHSWd9pze6QXhYgESqzDGYHpBsUwN_2fc6rXKk7YHi0kaAC-uDEFpACTi9FO1-VWO__YiBWURLeFpABRzG1hYrq7BTUSp7yDYpxTKB5GLOZTv3sINWHuy-E0Ud12n8aBxt-uUE4lZtriBTRpzfI8bLRMrIqsW3frGWPXnSbj-qiaOYk9152vCXeiNJUqVSSeGBOfnvx2-2fkFLrvCTVN9no1zpvvnkkXamt4Qn0yaHqbTwAUdF",
      moq: "Minimum Order Quantity: 1000 Kg",
      gsm: "200 - 450 GSM",
      gsmStartNumeric: 200,
      boardType: "fbb",
      format: "both",
      specs: {
        material: "Multi-Layer Virgin FBB",
        color: "White Top / Cream or White Back",
        usage: "Cosmetics, Pharma & FMCG Cartons",
        gsmRange: "200 - 450 GSM",
        shape: "Sheets & Continuous Reels",
        eco: "100% Recyclable / FSC Certified"
      }
    },
    {
      id: "solid-bleached-sulfate",
      title: "Solid Bleached Sulfate Board (SBS)",
      subtitle: "Premium 100% virgin bleached chemical pulp board with uniform brightness throughout. Engineered for superior visual appeal, odor-neutral hygienic purity, and flawless embossing, hot-foil stamping, and direct food contact applications.",
      badgeText: "GSM: 180 - 400",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVu1U1u_3z8aj3oXYEGWI1VEV_F8F3ExAlk42RmN6iWFdxoCw83L1Dm79QjwiBazQGRWSoAwMNVTAur6UFOC5sC7EXdnbe6vsHYllW1tFRN5e-3wdKqs5YbFdRL2DWnpJzse-wG-lq9YvfWtjKy5VnFh32GAqWyZ-JwHkXhaj42LQ56x-8PHX4V67PpR5XQuMT5hklfoX6XRW3XV3CjcPu0XjXXaJh-MI8Lvq6GU6SnMLN5ohym6OH",
      moq: "Minimum Order Quantity: 1000 Kg",
      gsm: "180 - 400 GSM",
      gsmStartNumeric: 180,
      boardType: "sbs",
      format: "both",
      specs: {
        material: "100% Virgin Bleached Pulp (SBS)",
        color: "Pure White Both Sides (C1S / C2S)",
        usage: "Luxury Goods, Perfumes & Food Packaging",
        gsmRange: "180 - 400 GSM",
        shape: "Sheets & Continuous Reels",
        eco: "FDA Direct Food Contact / Recyclable"
      }
    }
  ]

  const [typeFilter, setTypeFilter] = useState<"all" | "fbb" | "sbs">("all")
  const [formatFilter, setFormatFilter] = useState<"all" | "sheet" | "roll">("all")
  const [sortBy, setSortBy] = useState<"asc" | "desc">("asc")

  // Filter
  const filtered = products.filter((p) => {
    if (typeFilter !== "all" && p.boardType !== typeFilter) return false
    if (formatFilter === "sheet" && p.format === "roll") return false
    if (formatFilter === "roll" && p.format === "sheet") return false
    return true
  })

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    return sortBy === "asc" ? a.gsmStartNumeric - b.gsmStartNumeric : b.gsmStartNumeric - a.gsmStartNumeric
  })

  return (
    <div className="space-y-12">
      {/* Header and Filter Controls */}
      <div className="flex flex-col gap-6 bg-surface-container-low p-6 rounded border border-outline-variant text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-title-md text-title-md font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">tune</span>
            Filter Box Board Grades
          </h3>
          <span className="text-sm font-medium text-on-surface-variant font-body-md">
            Showing {sorted.length} of {products.length} grades
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
              Board Classification
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">All Box Boards (FBB & SBS)</option>
              <option value="fbb">Folding Box Board (FBB)</option>
              <option value="sbs">Solid Bleached Sulfate (SBS)</option>
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
              <option value="all">All Formats (Sheets & Reels)</option>
              <option value="sheet">Custom Sheets</option>
              <option value="roll">Continuous Reels</option>
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

      {/* Grid List using Reusable Product Card */}
      <div className="grid grid-cols-1 gap-12 text-left">
        {sorted.map((item) => (
          <ProductDescriptionCard
            key={item.id}
            title={item.title}
            description={item.subtitle}
            badgeText={item.badgeText}
            image={item.image}
            moq={item.moq}
            specs={item.specs}
          />
        ))}
        {sorted.length === 0 && (
          <div className="text-center py-16 bg-white border border-outline-variant rounded">
            <span className="material-symbols-outlined text-5xl text-outline mb-4">info</span>
            <p className="text-on-surface-variant">No products match your filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
