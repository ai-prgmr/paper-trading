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
  price?: string
  description: string
  badgeText: string
  image: string
  moq: string
  specs: ProductSpec
}

export function ProductDescriptionCard({
  title,
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

  const whatsappMessage = encodeURIComponent(
    `Hello G L Paper Trading, I am interested in getting a quote for: ${title} (${badgeText || specs.gsmRange}). Please provide pricing and availability details.`
  )
  const whatsappUrl = `https://wa.me/919301532323?text=${whatsappMessage}`

  return (
    <article className="bg-surface industrial-border rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-md transition-shadow text-left min-w-0">
      {/* Left side: Image */}
      <div className="lg:w-1/3 relative h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-outline-variant shrink-0">
        <img className="w-full h-full object-cover" alt={title} src={image} />
        <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 font-label-sm text-label-sm rounded border border-tertiary font-semibold shadow-xs">
          {badgeText}
        </div>
      </div>

      {/* Right side: Content */}
      <div className="lg:w-2/3 p-8 flex flex-col justify-between min-w-0">
        <div className="w-full min-w-0 overflow-hidden">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="font-headline-lg text-headline-lg text-primary">{title}</h3>
              <p className="text-xs text-secondary font-semibold uppercase tracking-wider mt-1">
                Custom Specs & Bulk Supply Available
              </p>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide border border-secondary/20">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Quote on Request
              </span>
            </div>
          </div>

          {/* Description text */}
          <p className="text-on-surface-variant mb-6 font-body-md text-sm leading-relaxed">{description}</p>

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
            <span className="material-symbols-outlined text-sm align-middle text-secondary">verified</span>
            {moq}
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.073.377-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-12.416c-5.523 0-10 4.477-10 10 0 1.765.459 3.423 1.261 4.873l-1.341 4.896 5.02-1.317c1.402.766 3.003 1.198 4.707 1.198 5.522 0 10-4.477 10-10s-4.478-10-9.647-10z" />
              </svg>
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
