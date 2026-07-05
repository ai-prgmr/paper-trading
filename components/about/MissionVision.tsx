export function MissionVision() {
  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden">
      <div className="paper-grain absolute inset-0"></div>
      <div className="px-margin-mobile md:px-margin-desktop container mx-auto max-w-container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Foundation of Purpose</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto font-body-lg">
            The core values that drive our daily operations and long-term strategy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-10 border border-outline-variant rounded hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-container rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">flag</span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-4 font-bold">Our Mission</h3>
            <p className="text-on-surface-variant font-body-md">
              To provide the most reliable, sustainable, and high-performance paper solutions to the global market while maintaining ethical trade practices and fostering long-term industry growth.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-primary-container p-10 border border-primary text-white rounded hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">visibility</span>
            </div>
            <h3 className="font-title-md text-title-md mb-4 font-bold text-white">Our Vision</h3>
            <p className="text-white/80 font-body-md">
              To be recognized as the global benchmark for excellence in paper trading, integrating technological innovation with deep industrial expertise to redefine logistics and distribution.
            </p>
          </div>
          {/* Values */}
          <div className="bg-white p-10 border border-outline-variant rounded hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-container rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">diamond</span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-4 font-bold">Core Values</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Unwavering Integrity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Customer Centricity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Industrial Innovation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Sustainable Logistics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
