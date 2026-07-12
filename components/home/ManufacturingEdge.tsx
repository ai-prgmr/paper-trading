import Image from "next/image"

export function ManufacturingEdge() {
  const values = [
    {
      title: "Process Excellence",
      description: "Intelligent Process Technology for Responsible Manufacturing.",
      icon: "settings_suggest",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality testing and global compliance standards define every product we deliver.",
      icon: "verified_user",
    },
    {
      title: "Innovation with Purpose",
      description: "Innovation-led development that stays ahead of industry evolution.",
      icon: "psychology",
    },
  ]

  return (
    <section className="bg-white py-24 border-b border-border overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Text & Values */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="font-label-sm text-label-sm text-[#4D6D53] uppercase tracking-widest block mb-4 font-semibold">
              Strategic Sourcing Edge
            </span>
            <h2 className="font-display-lg text-3xl md:text-4xl font-extrabold text-[#064E3B] mb-6 tracking-tight leading-snug">
              Shaping tomorrow’s packaging solutions through sustainable sourcing and strategic trading excellence
            </h2>
            <div className="space-y-4 text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed opacity-95">
              <p>
                At GL Trading, progress is powered by responsibility—and guided by purpose. Founded in 2001, GL Trading has built a legacy rooted in sustainable sourcing, disciplined trading, and a commitment to creating value beyond transactions.
              </p>
              <p>
                The company’s operations are anchored in a recycling-led sourcing ecosystem, where high-performance, wastepaper-based packaging boards and virgin-grade boards are procured from leading global and domestic manufacturers. This extensive network enables GL Paper Trading to serve both sustainable and premium packaging requirements with equal confidence and reliable supply.
              </p>
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col space-y-2">
                <div className="flex items-center gap-2 text-[#064E3B]">
                  <span className="material-symbols-outlined text-2xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {val.icon}
                  </span>
                  <h4 className="font-title-md text-sm font-bold text-on-surface">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed font-body-md opacity-90">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Premium Image Visual */}
        <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] lg:h-[600px]">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-secondary-container/30 rounded-full blur-3xl -z-10"></div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/paper-trading/manufacturing-edge.png"
              alt="GL Paper Trading Advanced Manufacturing Mill Line"
              fill
              className="object-cover"
              sizes="(max-w-lg) 100vw, 500px"
              priority
            />
            {/* Soft Green Ambient Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Corner Decorative Chip */}
            <div className="absolute bottom-6 left-6 bg-[#064E3B]/90 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 border border-white/10 shadow-lg">
              <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
              Advanced Processing Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
