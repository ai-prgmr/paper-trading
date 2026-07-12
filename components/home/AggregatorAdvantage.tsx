import React from "react"

export function AggregatorAdvantage() {
  const steps = [
    {
      num: "01",
      title: "Sourcing from Top-Tier Green Mills",
      description:
        "We source high-volume, FSC and PEFC-certified sustainable paper directly from leading global and domestic manufacturers.",
      icon: "forest",
    },
    {
      num: "02",
      title: "Centralized Eco-Warehousing",
      description:
        "By maintaining robust, high-volume inventory in Central India, we absorb the MOQ friction and long lead times of global mills.",
      icon: "warehouse",
    },
    {
      num: "03",
      title: "Agile 48-Hour Local Delivery",
      description:
        "Enjoy rapid, zero-downtime shipping through our carbon-optimized logistics network directly to your manufacturing floor.",
      icon: "local_shipping",
    },
  ]

  return (
    <section className="relative bg-surface-container-low py-24 border-y border-border overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#064E3B]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Title Block */}
        <div className="max-w-3xl mb-20">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
            The Aggregator Advantage
          </span>
          <h2 className="font-display-lg text-4xl md:text-5xl font-extrabold text-[#064E3B] mb-6 tracking-tight leading-tight">
            Global Sustainability, Delivered Locally.
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed opacity-95">
            Large-scale sustainable mills demand high MOQs and long lead times. We absorb that friction. By maintaining a centralized, high-volume inventory in Central India, we provide you with the world's best eco-friendly paper on your schedule.
          </p>
        </div>

        {/* Steps/Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Only visible on large screens) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-linear-to-r from-[#064E3B]/30 via-secondary-container to-[#064E3B]/30 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col bg-white p-8 rounded-xl border border-border/80 hover:border-primary/20 shadow-sm transition-all duration-300 hover:shadow-md group">
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#064E3B]/10 text-[#064E3B] flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-[#064E3B] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl select-none">
                    {step.icon}
                  </span>
                </div>
                <span className="font-display-lg text-5xl font-extrabold text-[#064E3B]/10 group-hover:text-[#064E3B]/20 transition-colors select-none">
                  {step.num}
                </span>
              </div>
              <h3 className="font-title-md text-lg font-bold text-on-surface mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-on-surface-variant font-body-md leading-relaxed opacity-90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
