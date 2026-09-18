export interface KraftProduct {
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

export const kraftProducts: KraftProduct[] = [
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
  },
  {
    id: "one-side-printed-kraft-liner-board",
    title: "One Side Printed Kraft Liner Board",
    subtitle: "Premium kraft linerboard with one side printed, ideal for premium corrugated packaging, providing high RCT and Strength allowing GSM savings to end users.",
    image: "/one-side-printed-kraft.png",
    color: "One Side Printed Kraft",
    usage: "Corrugation and printed packaging",
    gsm: "130 - 400 GSM",
    gsmStartNumeric: 130,
    shape: "Roll & Sheet Available",
    ecoText: "100% Recyclable",
    gradeCategory: "board",
    formatCategory: "both"
  }
]
