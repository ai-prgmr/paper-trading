export function NationalFootprint() {
  return (
    <section className="bg-surface-container-lowest py-24 border-y border-outline-variant overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
            Our Presence
          </span>
          <h2 className="font-display-lg text-display-lg text-primary mb-8 leading-tight">
            Serving the Heart of India's Manufacturing
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            With over two decades of trading excellence, G L Paper Trading has established a robust distribution network spanning across 18+ states. We bridge the gap between large-scale mills and local packaging manufacturers.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-primary-container p-3 rounded-lg text-white">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md font-bold mb-1">Centralized Logistics</h4>
                <p className="text-on-surface-variant font-body-md">
                  Strategically located warehouses ensure 48-hour delivery to major industrial hubs.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary-container p-3 rounded-lg text-white">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md font-bold mb-1">Dedicated Account Managers</h4>
                <p className="text-on-surface-variant font-body-md">
                  A specialized team managing order pipelines for business continuity.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary-container p-3 rounded-lg text-white">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md font-bold mb-1">Sustainable Sourcing</h4>
                <p className="text-on-surface-variant font-body-md">
                  Prioritizing eco-friendly mills and FSC-certified suppliers across our catalog.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-fixed/30 rounded-full blur-3xl -z-10"></div>
          <div className="bg-white p-6 rounded-lg shadow-xl border border-outline-variant">
            {/* Simulated Map or Data Visualization */}
            <div className="aspect-square w-full rounded bg-surface-container-low overflow-hidden relative border border-outline-variant">
              <div className="absolute inset-0 opacity-10 paper-texture"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover"
                    alt="Map of India showing distribution networks"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmijqg1n5X4e9D4p4QPhY3804UMXGfau4V7ywcf6QUhzyAR8e5PBCNPCA9dTyHCugfmcGQMEFO147BOkOseOOSZIJJOpUkD9rTbm-nupg1DfoYcOoYGqfdAmeuRPcdAgeDTkHkUl0HWh6tONA16VZX5vj35jEjlKonDKEEqoF9xGwunfVxHD3cdQn91YgqMerlKV-46L-zhXvfHjB9kP6ek8BTsaxDJIbydMqEnV-QMbNGSMAr1NwY"
                  />
                </div>
              </div>
              {/* Data Badges */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div className="bg-primary-container text-white p-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-xs uppercase tracking-tighter opacity-70">
                    Clients Nationwide
                  </div>
                </div>
                <div className="bg-on-secondary-container text-white p-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">50k+</div>
                  <div className="text-xs uppercase tracking-tighter opacity-70">
                    MT Annual Trade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
