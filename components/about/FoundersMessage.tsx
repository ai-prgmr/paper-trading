import Image from "next/image"

export function FoundersMessage() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low relative overflow-hidden border-b border-outline-variant">
      <div className="paper-grain absolute inset-0 opacity-40 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-sm text-xs uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-sm">history_edu</span>
            80+ Years of Heritage & Vision
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Founders' Message & Journey
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            From humble beginnings built on steadfast trust to modern industrial leadership.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Govindlal ji */}
          <div className="bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-surface-container">
              <img src="/paper-trading/govindlal-kabra.png" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" alt="Late Shri Govindlal ji Kabra" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider mb-2.5 inline-block border border-white/20">The Genesis • 1940</span>
                <h3 className="font-title-lg font-bold text-xl">Late Shri Govindlal ji Kabra</h3>
                <p className="text-xs text-white/90 font-medium mt-1">The Foundation</p>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-1">
              <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                In 1940, a young man with lots of ambition and vision started his journey from Rajasthan to Indore. Arriving in a new city with new dreams, he started a cloth business in association with the pride of cloth mills of Indore. His hard work and principles established the bedrock of our legacy.
              </p>
            </div>
          </div>

          {/* Card 2: Rajesh Kabra */}
          <div className="bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-surface-container">
              <img src="/paper-trading/rajesh-kabra.png" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" alt="Mr. Rajesh Kabra" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider mb-2.5 inline-block border border-white/20">Paper Industry Era • 1976</span>
                <h3 className="font-title-lg font-bold text-xl">Mr. Rajesh Kabra</h3>
                <p className="text-xs text-white/90 font-medium mt-1">Diversification</p>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-1">
              <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                As the cloth industry reached saturation, the young hands were ready to take over the legacy. In 1976, he took the business further and diversified from the cloth business to the new and emerging market of the paper industry. With his vision, skills, and relationships, we set a benchmark and successfully made the growth happen.
              </p>
            </div>
          </div>

          {/* Card 3: Vedant Kabra */}
          <div className="bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col md:flex-row md:col-span-2 group hover:shadow-md transition-shadow duration-300">
            <div className="relative h-72 md:h-auto md:w-2/5 overflow-hidden bg-surface-container shrink-0">
              <img src="/paper-trading/vedant-kabra-founder.png" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" alt="Mr. Vedant Kabra" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21005D]/90 via-[#21005D]/30 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider mb-2.5 inline-block border border-white/20">Modern Era • 1999</span>
                <h3 className="font-title-lg font-bold text-xl">Mr. Vedant Kabra</h3>
                <p className="text-xs text-white/90 font-medium mt-1">Founder & Managing Director</p>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-8">
                In 1999, he joined his father's business. Drawing from his long experiences and learning from the teachings of his grandfather Late Shri Govindlal ji Kabra and his father Shri Rajesh ji Kabra, he took the journey of the paper business further under his father's guidance, transforming the enterprise into a tech-enabled, multi-grade paper supplier.
              </p>
              
              {/* Quote */}
              <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/60 relative mt-auto">
                <span className="material-symbols-outlined text-secondary text-2xl absolute -top-3 -left-2 bg-white rounded-full border border-outline-variant/30 px-1 py-1 shadow-sm">
                  format_quote
                </span>
                <p className="font-body-md italic text-xs text-primary font-medium leading-relaxed mt-1">
                  "Our foundation was built on trust, client relationships, and punctuality over eighty years ago. Today, we carry that same sacred promise into every metric ton of kraft and duplex board we supply."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Milestones Bar */}
        <div className="mt-16 bg-white rounded-2xl border border-outline-variant p-8 shadow-sm flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
          <div className="text-center w-full px-4 pt-4 md:pt-0 first:pt-0">
            <span className="block font-display-lg text-primary text-4xl mb-1">1940</span>
            <span className="text-xs text-on-surface-variant uppercase font-bold tracking-wider">Founding Year</span>
          </div>
          <div className="text-center w-full px-4 pt-8 md:pt-0">
            <span className="block font-display-lg text-secondary text-4xl mb-1">80+</span>
            <span className="text-xs text-on-surface-variant uppercase font-bold tracking-wider">Years of Trust</span>
          </div>
          <div className="text-center w-full px-4 pt-8 md:pt-0">
            <span className="block font-display-lg text-tertiary text-4xl mb-1">100%</span>
            <span className="text-xs text-on-surface-variant uppercase font-bold tracking-wider">Circular Packaging</span>
          </div>
        </div>

      </div>
    </section>
  )
}
