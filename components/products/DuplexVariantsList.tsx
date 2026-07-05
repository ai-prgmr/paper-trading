"use client"

import { useState } from "react"
import { ProductDescriptionCard } from "./ProductDescriptionCard"

interface VariantData {
  title: string
  price: string
  priceNumeric: number
  description: string
  gsm: string
  moq: string
  badgeText: string
  image: string
  usage: string
  color: string
  type: string
  format: "Sheet/Roll" | "Roll Only"
}

export function DuplexVariantsList() {
  const allVariants: VariantData[] = [
    {
      title: "Uncoated Duplex Paper Board",
      price: "₹ 38 / Kg",
      priceNumeric: 38,
      description: "Optimized for cost-sensitive packaging where direct print contact isn't required. Provides excellent stiffness and folding resistance.",
      gsm: "230 - 450",
      moq: "Minimum Order Quantity: 1200 Kg",
      badgeText: "GSM: 230 - 450",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWCYb3fy5pqHPq-sKsMkfYs6W9a-Ud-jJRwz0bdLmwIOmaFvqphY_hnGzJO33NaSl1ohBjXDQuGaxCtUuJLJuKYuzHtr6ToSAzn5OSXx8iYwoBZgoyiScdqp0ghrYhIPDdbyxj4Abry88cIsgSDGosr3COToPKs_nUZTHryXQ3pxE5nONuAL4pXF2-IzP0d-_kUlAhf3gNpeoZfavFRkzO9tb-K4SfCiQocdrZOmqtGsg81Bcr-J-f",
      usage: "Box Making",
      color: "Grey Back",
      type: "Sheet/Roll",
      format: "Sheet/Roll"
    },
    {
      title: "HWC Grey Back Duplex Board",
      price: "₹ 42 / Kg",
      priceNumeric: 42,
      description: "High Weight Coated variant offers exceptional smoothness for high-speed multi-color offset printing. Ideal for pharmaceuticals and FMCG boxes.",
      gsm: "180 - 400",
      moq: "Minimum Order Quantity: 1500 Kg",
      badgeText: "GSM: 180 - 400",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBev8BHSWd9pze6QXhYgESqzDGYHpBsUwN_2fc6rXKk7YHi0kaAC-uDEFpACTi9FO1-VWO__YiBWURLeFpABRzG1hYrq7BTUSp7yDYpxTKB5GLOZTv3sINWHuy-E0Ud12n8aBxt-uUE4lZtriBTRpzfI8bLRMrIqsW3frGWPXnSbj-qiaOYk9152vCXeiNJUqVSSeGBOfnvx2-2fkFLrvCTVN9no1zpvvnkkXamt4Qn0yaHqbTwAUdF",
      usage: "Printing",
      color: "Grey Back",
      type: "Sheet/Roll",
      format: "Sheet/Roll"
    },
    {
      title: "LWC Duplex Paper Board",
      price: "₹ 39 / Kg",
      priceNumeric: 39,
      description: "Light Weight Coated board designed for high-volume consumer goods. Excellent bulk-to-weight ratio for shipping efficiency.",
      gsm: "200 - 350",
      moq: "Minimum Order Quantity: 2000 Kg",
      badgeText: "GSM: 200 - 350",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtHhVKaM5aKt503n_qN_9saFoTFialBpFdZZR5p56NT1CvjemqbKwPZcjXSO5Qguej_LqyHAyqspY9G_SBs3EOONHu4-hyaEXf2LtSn43wkjCW4CpUwOWVvRx4aHRHiGbd-sJOR1tmhyufBq37xu0cO84wsgVhd2YiECk_iK41nwS0-UnDzDdYAKRqIZ82LYTgdXsOsP7BQ-ctW7jnvF34uHpQyMJ3DKRSixErdzNXENIucEpuhs9P",
      usage: "Packaging",
      color: "Grey Back",
      type: "Sheet/Roll",
      format: "Sheet/Roll"
    },
    {
      title: "Duplex Board Paper Roll",
      price: "₹ 36 / Kg",
      priceNumeric: 36,
      description: "Continuous rolls for high-capacity rotary printing and automated packaging lines. Available in custom widths to minimize waste.",
      gsm: "250 - 500",
      moq: "Min Load: 5000 Kg (One Truck)",
      badgeText: "Bulk Logistics",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfzpk0KqK2XjoDcLBSBg__wTiGvadu3_m6sOGiZpqsQK1lRdHEOArI83J5uOYLS3c-FsJbxjLLzSAyRVYkODq_smgd8vit6HDj_lRVQwwlFyZFRSEneKSkaz9pvWxbOF3jOI8OwS85q7Q7brME-ADTzQhZNONw8YG46HSzQzrkjDPWhWj4BGT1U_qtiK41WNoWiPyTx9fmwGqwFdt2d4TpPufvjLnFpjWb8pAecw74PGO1K8WapAQz",
      usage: "Rotary Print",
      color: "Grey Back",
      type: "Roll Only",
      format: "Roll Only"
    },
    {
      title: "White Duplex Board Paper Roll",
      price: "₹ 48 / Kg",
      priceNumeric: 48,
      description: "Premium White back duplex board rolls. Used for luxury packaging and branded retail boxes where interior aesthetics are critical.",
      gsm: "250 - 450",
      moq: "Minimum Order Quantity: 3000 Kg",
      badgeText: "Premium White",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVu1U1u_3z8aj3oXYEGWI1VEV_F8F3ExAlk42RmN6iWFdxoCw83L1Dm79QjwiBazQGRWSoAwMNVTAur6UFOC5sC7EXdnbe6vsHYllW1tFRN5e-3wdKqs5YbFdRL2DWnpJzse-wG-lq9YvfWtjKy5VnFh32GAqWyZ-JwHkXhaj42LQ56x-8PHX4V67PpR5XQuMT5hklfoX6XRW3XV3CjcPu0XjXXaJh-MI8Lvq6GU6SnMLN5ohym6OH",
      usage: "Luxury Box",
      color: "White Back",
      type: "Roll Only",
      format: "Roll Only"
    }
  ]

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
    return sortOrder === "asc" ? a.priceNumeric - b.priceNumeric : b.priceNumeric - a.priceNumeric
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
              Sort by Starting Price
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="bg-white border border-outline-variant px-3 py-2 rounded text-sm text-primary outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid List using Reusable Product Card */}
      <div className="grid grid-cols-1 gap-12 text-left">
        {sorted.map((v) => (
          <ProductDescriptionCard
            key={v.title}
            title={v.title}
            price={v.price}
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
