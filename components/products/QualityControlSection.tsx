export function QualityControlSection() {
  return (
    <section className="mt-16 bg-surface-container-high border border-outline-variant rounded-xl p-8 text-left">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 shrink-0">
          <div className="aspect-square bg-white border border-outline-variant rounded p-4 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-8xl text-secondary"
              style={{ fontVariationSettings: "'wght' 200" }}
            >
              verified
            </span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
            Uncompromising Quality Controls
          </h3>
          <p className="text-on-surface-variant mb-6 leading-relaxed font-body-md">
            Every sheet of our Coated Duplex Board undergoes rigorous testing for moisture content, stiffness, burst factor, and surface smoothness. We ensure our industrial partners receive paper products that maintain consistency across large volume orders, reducing downtime in printing and packaging lines.
          </p>
          <div className="grid grid-cols-2 gap-4 font-body-md">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">factory</span>
              <span className="font-medium">Direct Factory Supply</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">local_shipping</span>
              <span className="font-medium">Nationwide Logistics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">eco</span>
              <span className="font-medium">100% Recycled Content</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">support_agent</span>
              <span className="font-medium">24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
