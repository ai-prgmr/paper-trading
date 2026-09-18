export interface BoxBoardProduct {
  id: string
  title: string
  subtitle: string
  badgeText: string
  image: string
  moq: string
  gsm: string
  gsmStartNumeric: number
  boardType: "fbb" | "sbs"
  format: "sheet" | "roll" | "both"
  specs: {
    material: string
    color: string
    usage: string
    gsmRange: string
    shape: string
    eco: string
  }
}

export const boxBoardProducts: BoxBoardProduct[] = [
  {
    id: "folding-box-board",
    title: "Folding Box Board (FBB / GC1 & GC2)",
    subtitle: "Multi-layered virgin paperboard comprising bleached chemical outer layers and mechanical pulp core. Combines ultra-high bulk and bending stiffness with exceptional surface smoothness for high-speed folding cartons and luxury packaging.",
    badgeText: "GSM: 200 - 450",
    image: "/fbb.png",
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
    image: "/SBS.webp",
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
