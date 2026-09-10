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

        {/* Founders Story Layout */}
        <div className="flex flex-col gap-16 md:gap-24">

          {/* Founder 1: Govindlal ji */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center group">
            <div className="w-full md:w-5/12 lg:w-1/3 relative shrink-0">
              <div className="relative rounded-2xl overflow-hidden bg-surface-container/50 border border-outline-variant/50 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                 <img src="/paper-trading/GL-Kabra-standing.png" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" alt="Late Shri Govindlal ji Kabra" />
              </div>
              <div className="absolute -z-10 -inset-4 bg-primary/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-primary/30 block"></span>
                <span className="inline-block text-primary font-bold uppercase tracking-widest text-sm">The Genesis • 1940</span>
              </div>
              <h3 className="font-display-md text-3xl md:text-5xl text-primary mb-3">Late Shri Govindlal ji Kabra</h3>
              <p className="text-secondary font-medium text-lg md:text-xl mb-6">The Foundation</p>
              <div className="text-on-surface-variant md:text-lg leading-relaxed space-y-4">
                <p>
                  In 1940, a young man with lots of ambition and vision started his journey from Rajasthan to Indore. Arriving in a new city with new dreams, he started a cloth business in association with the pride of cloth mills of Indore. His hard work and principles established the bedrock of our legacy.
                </p>
              </div>
            </div>
          </div>

          {/* Founder 2: Rajesh Kabra */}
          <div className="flex flex-col md:flex-row-reverse gap-8 lg:gap-16 items-center group">
            <div className="w-full md:w-5/12 lg:w-1/3 relative shrink-0">
              <div className="relative rounded-2xl overflow-hidden bg-surface-container/50 border border-outline-variant/50 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                 <img src="/paper-trading/rajesh-kabra-standing.png" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" alt="Mr. Rajesh Kabra" />
              </div>
              <div className="absolute -z-10 -inset-4 bg-secondary/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 md:flex-row-reverse">
                <span className="h-px w-8 bg-secondary/30 block"></span>
                <span className="inline-block text-secondary font-bold uppercase tracking-widest text-sm">Paper Industry Era • 1976</span>
              </div>
              <h3 className="font-display-md text-3xl md:text-5xl text-primary mb-3 md:text-right">Mr. Rajesh Kabra</h3>
              <p className="text-secondary font-medium text-lg md:text-xl mb-6 md:text-right">Diversification</p>
              <div className="text-on-surface-variant md:text-lg leading-relaxed space-y-4 md:text-right">
                <p>
                  As the cloth industry reached saturation, the young hands were ready to take over the legacy. In 1976, he took the business further and diversified from the cloth business to the new and emerging market of the paper industry. With his vision, skills, and relationships, we set a benchmark and successfully made the growth happen.
                </p>
              </div>
            </div>
          </div>

          {/* Founder 3: Vedant Kabra */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center group">
            <div className="w-full md:w-5/12 lg:w-1/3 relative shrink-0">
              <div className="relative rounded-2xl overflow-hidden bg-surface-container/50 border border-outline-variant/50 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                 <img src="/paper-trading/vedant-kabra-standing.png" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" alt="Mr. Vedant Kabra" />
              </div>
              <div className="absolute -z-10 -inset-4 bg-[#21005D]/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#21005D]/30 block"></span>
                <span className="inline-block text-[#21005D] font-bold uppercase tracking-widest text-sm">Modern Era • 1999</span>
              </div>
              <h3 className="font-display-md text-3xl md:text-5xl text-primary mb-3">Mr. Vedant Kabra</h3>
              <p className="text-secondary font-medium text-lg md:text-xl mb-6">Founder & Managing Director</p>
              <div className="text-on-surface-variant md:text-lg leading-relaxed space-y-4 mb-8">
                <p>
                  In 1999, he joined his father's business. Drawing from his long experiences and learning from the teachings of his grandfather Late Shri Govindlal ji Kabra and his father Shri Rajesh ji Kabra, he took the journey of the paper business further under his father's guidance, transforming the enterprise into a tech-enabled, multi-grade paper supplier.
                </p>
              </div>
              
              {/* Quote */}
              <div className="p-6 md:p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-outline-variant shadow-sm relative group-hover:-translate-y-1 transition-transform duration-500">
                <span className="material-symbols-outlined text-secondary text-3xl absolute -top-4 -left-4 bg-white rounded-full border border-outline-variant p-2 shadow-sm">
                  format_quote
                </span>
                <p className="font-body-lg italic text-primary font-medium leading-relaxed">
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
