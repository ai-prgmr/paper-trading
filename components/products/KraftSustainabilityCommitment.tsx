export function KraftSustainabilityCommitment() {
  return (
    <section className="bg-tertiary-fixed/10 py-24 paper-texture text-left">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-tertiary-fixed-variant mb-4 block">
            Our Commitment
          </span>
          <h2 className="font-display-lg text-display-lg text-primary">Sustainable Kraft Solutions</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-white p-8 border border-outline-variant rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant">recycling</span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-4 font-bold">100% Recyclable</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              All our Kraft products are engineered to be fully recyclable, supporting a circular economy and reducing landfill waste.
            </p>
          </div>
          <div className="bg-white p-8 border border-outline-variant rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant">forest</span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-4 font-bold">Responsibly Sourced</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              We utilize FSC-certified pulp and partner with sustainable forestry initiatives to ensure zero deforestation in our supply chain.
            </p>
          </div>
          <div className="bg-white p-8 border border-outline-variant rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant">eco</span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-4 font-bold">Eco-Conscious Process</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Our manufacturing facilities employ advanced water recycling systems and energy-efficient machinery to minimize our environmental footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
