import { Card, CardContent } from "@/components/ui/card"

export function SustainabilityMetrics() {
  const metrics = [
    {
      value: "100%",
      label: "FSC & PEFC Sourced Inventory",
      icon: "forest",
      description: "Procured exclusively from responsibly managed woodlands.",
      color: "bg-[#064E3B]/10 text-[#064E3B]",
    },
    {
      value: "50k+ MT",
      label: "Sustainable Paper Traded Annually",
      icon: "analytics",
      description: "Leading local B2B aggregator bridging global green mills.",
      color: "bg-secondary-container/30 text-on-secondary-container",
    },
    {
      value: "18+ States",
      label: "Carbon-Optimized Logistics Network",
      icon: "local_shipping",
      description: "Direct routing to reduce footprint and shipping downtime.",
      color: "bg-[#064E3B]/10 text-[#064E3B]",
    },
    {
      value: "500+",
      label: "Local Packaging Partners",
      icon: "handshake",
      description: "Empowering Central India's industrial manufacturing ecosystem.",
      color: "bg-secondary-container/30 text-on-secondary-container",
    },
  ]

  return (
    <section id="sustainability-metrics" className="bg-surface-container-lowest py-16 scroll-mt-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="overflow-hidden border border-border/80 hover:border-primary/30 bg-white transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col justify-between h-full min-h-[220px]">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-display-lg text-4xl font-extrabold text-[#064E3B] tracking-tight">
                    {metric.value}
                  </span>
                  <div className={`p-2.5 rounded-lg ${metric.color} flex items-center justify-center shadow-sm`}>
                    <span className="material-symbols-outlined text-2xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {metric.icon}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-title-md text-base font-bold text-on-surface mb-2 leading-snug">
                    {metric.label}
                  </h4>
                  <p className="text-xs text-on-surface-variant font-body-md opacity-85 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
