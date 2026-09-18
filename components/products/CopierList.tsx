"use client"

import { ProductDescriptionCard } from "./ProductDescriptionCard"

import { copierProducts } from "./copierData"

export function CopierList() {
  const products = copierProducts

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-12 text-left">
        {products.map((item) => (
          <ProductDescriptionCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.subtitle}
            badgeText={item.badgeText}
            image={item.image}
            moq={item.moq}
            specs={item.specs}
          />
        ))}
      </div>
    </div>
  )
}
