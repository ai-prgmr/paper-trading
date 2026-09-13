"use client"

import { ProductDescriptionCard } from "./ProductDescriptionCard"

export function CopierList() {
  const products = [
    {
      id: "copier-a4",
      title: "Premium A4 Copier Paper",
      subtitle: "Ultra-white, high-brightness A4 copier paper designed for flawless performance in high-speed printers and copiers. Ensures sharp text, vibrant color contrast, and zero jams.",
      badgeText: "A4 Size | 70-100 GSM",
      image: "/copier-paper.jpg",
      moq: "Minimum Order Quantity: Quote on Request",
      specs: {
        material: "100% Virgin Wood Pulp",
        color: "Ultra White (98-102% Brightness)",
        usage: "Office Printing, Photocopying, Reports",
        gsmRange: "70 - 100 GSM",
        shape: "A4 Sheets (210 x 297 mm)",
        eco: "FSC Certified / Recyclable"
      }
    },
    {
      id: "copier-a3",
      title: "Premium A3 Copier Paper",
      subtitle: "Large format A3 copier paper offering the same exceptional brightness and opacity as our A4 line. Perfect for CAD drawings, large spreadsheets, posters, and professional presentations.",
      badgeText: "A3 Size | 70-100 GSM",
      image: "/copier-paper.jpg",
      moq: "Minimum Order Quantity: Quote on Request",
      specs: {
        material: "100% Virgin Wood Pulp",
        color: "Ultra White (98-102% Brightness)",
        usage: "CAD, Large Presentations, Posters",
        gsmRange: "70 - 100 GSM",
        shape: "A3 Sheets (297 x 420 mm)",
        eco: "FSC Certified / Recyclable"
      }
    }
  ]

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-12 text-left">
        {products.map((item) => (
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
      </div>
    </div>
  )
}
