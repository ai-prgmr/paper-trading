export function BoxBoardTrustSection() {
  return (
    <section className="mt-20 py-12 border-t border-outline-variant grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-secondary mb-4">sanitizer</span>
        <h4 className="font-title-md text-title-md text-primary mb-2 font-bold">Food-Grade & Pure</h4>
        <p className="text-on-surface-variant font-body-md text-sm">
          Certified virgin wood fibers manufactured under stringent hygienic standards for direct food, pharma, and cosmetic packaging.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-secondary mb-4">print</span>
        <h4 className="font-title-md text-title-md text-primary mb-2 font-bold">High-Fidelity Print Surface</h4>
        <p className="text-on-surface-variant font-body-md text-sm">
          Ultra-smooth double-coating engineered for sharp dot reproduction in multi-color offset, UV varnish, and hot-foil stamping.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-secondary mb-4">inventory_2</span>
        <h4 className="font-title-md text-title-md text-primary mb-2 font-bold">Custom Formats & Reels</h4>
        <p className="text-on-surface-variant font-body-md text-sm">
          Supplied in custom-sheeting dimensions or precision-wound continuous reels to eliminate press waste and maximize conversion speed.
        </p>
      </div>
    </section>
  )
}
