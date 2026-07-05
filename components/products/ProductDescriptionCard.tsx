import Link from "next/link"

export interface ProductSpec {
  material: string
  color: string
  usage: string
  gsmRange: string
  shape: string
  eco: string
}

export interface ProductDescriptionCardProps {
  title: string
  price: string
  description: string
  badgeText: string
  image: string
  moq: string
  specs: ProductSpec
}

export function ProductDescriptionCard({
  title,
  price,
  description,
  badgeText,
  image,
  moq,
  specs,
}: ProductDescriptionCardProps) {
  const specItems = [
    { label: "Material", value: specs.material },
    { label: "Color", value: specs.color },
    { label: "Usage", value: specs.usage },
    { label: "GSM Range", value: specs.gsmRange },
    { label: "Shape", value: specs.shape },
    { label: "Eco Friendly", value: specs.eco },
  ]

  return (
    <article className="bg-surface industrial-border rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-md transition-shadow text-left min-w-0">
      {/* Left side: Image */}
      <div className="lg:w-1/3 relative h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-outline-variant shrink-0">
        <img className="w-full h-full object-cover" alt={title} src={image} />
        <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 font-label-sm text-label-sm rounded border border-tertiary">
          {badgeText}
        </div>
      </div>

      {/* Right side: Content */}
      <div className="lg:w-2/3 p-8 flex flex-col justify-between min-w-0">
        <div className="w-full min-w-0 overflow-hidden">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
            <h3 className="font-headline-lg text-headline-lg text-primary">{title}</h3>
            <div className="text-left sm:text-right shrink-0">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">
                Starting Price
              </p>
              <p className="font-headline-lg text-headline-lg text-secondary">{price}</p>
            </div>
          </div>

          {/* Description text */}
          <p className="text-on-surface-variant mb-6 font-body-md text-sm">{description}</p>

          {/* Mobile specs: 2-column key-value grid (hidden on md+) */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 md:hidden mb-8">
            {specItems.map((item) => (
              <div key={item.label} className="flex flex-col border-b border-outline-variant/30 pb-2">
                <span className="text-[10px] text-outline font-label-sm uppercase tracking-wider mb-1">
                  {item.label}
                </span>
                <span className="font-medium text-sm text-primary font-body-md truncate">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop specs: Table (hidden on mobile) */}
          <div className="hidden md:block overflow-x-auto mb-8 w-full max-w-full">
            <table className="w-full text-left font-body-md border-collapse text-sm">
              <thead>
                <tr className="bg-surface-container text-on-surface font-label-sm text-label-sm border-b border-outline">
                  <th className="px-4 py-2 border-r border-outline-variant uppercase">Material</th>
                  <th className="px-4 py-2 border-r border-outline-variant uppercase">Color</th>
                  <th className="px-4 py-2 border-r border-outline-variant uppercase">Usage</th>
                  <th className="px-4 py-2 border-r border-outline-variant uppercase">GSM Range</th>
                  <th className="px-4 py-2 border-r border-outline-variant uppercase">Shape</th>
                  <th className="px-4 py-2 uppercase">Eco</th>
                </tr>
              </thead>
              <tbody className="text-on-surface-variant">
                <tr className="border-b border-outline-variant">
                  <td className="px-4 py-3 border-r border-outline-variant">{specs.material}</td>
                  <td className="px-4 py-3 border-r border-outline-variant">{specs.color}</td>
                  <td className="px-4 py-3 border-r border-outline-variant">{specs.usage}</td>
                  <td className="px-4 py-3 border-r border-outline-variant">{specs.gsmRange}</td>
                  <td className="px-4 py-3 border-r border-outline-variant">{specs.shape}</td>
                  <td className="px-4 py-3 text-on-tertiary-container font-bold">{specs.eco}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-outline-variant">
          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-sm align-middle">verified</span>
            {moq}
          </span>
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3 rounded font-label-sm text-label-sm uppercase tracking-widest hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
              <span className="material-symbols-outlined text-sm">request_quote</span> Get Latest Price
            </button>
          </Link>
        </div>
      </div>
    </article>
  )
}
