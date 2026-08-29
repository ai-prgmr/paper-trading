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
            30 Years of Heritage & Vision
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Founders' Message & Journey
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            From humble beginnings built on steadfast trust to modern industrial leadership.
          </p>
        </div>

        {/* Main Grid: Story & Founders Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Govindlal ji Kabra's Foundation */}
            <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  <span className="material-symbols-outlined text-xl">workspace_premium</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md font-bold text-primary">
                    The Foundation: Mr. Govindlal ji Kabra
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                    The Genesis • 30+ Years Ago
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                Three decades ago, <strong>Mr. Govindlal ji Kabra</strong> embarked on a mission to bring unmatched transparency, integrity, and personal accountability to the Cloth distribution trade. In an era when Cloth trading relied heavily on fragmented channels, he built lasting bonds across Cloth mills and manufacturing clients through one golden rule: <em>a commitment made is a commitment honored</em>. His hard work and principles established the bedrock of G L Paper Trading.
              </p>
            </div>

            {/* Vedant Kabra Taking Vision Forward */}
            <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold">
                  <span className="material-symbols-outlined text-xl">trending_up</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md font-bold text-primary">
                    The Modern Era: Mr. Vedant Kabra
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-secondary font-bold">
                    Founder & Managing Director • Driving Forward
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                Today, <strong>Mr. Vedant Kabra</strong> is taking that enduring vision forward with strategic vigor and modern innovation. Guided by the values instilled by Mr. Govindlal ji Kabra, Vedant has transformed the enterprise into a tech-enabled, multi-grade paper supplier. Under his stewardship, G L Paper Trading has expanded its reach across FMCG, e-commerce, pharmaceutical, and heavy packaging sectors—pioneering 100% recyclable Kraft paper and Coated Duplex boards while maintaining prompt, nationwide logistics.
              </p>
            </div>

            {/* Key Milestones Bar */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <span className="block font-headline-lg text-primary font-bold">1994</span>
                <span className="text-xs text-on-surface-variant uppercase font-medium">Founding Year</span>
              </div>
              <div className="border-l-2 border-secondary pl-4 py-1">
                <span className="block font-headline-lg text-primary font-bold">30+</span>
                <span className="text-xs text-on-surface-variant uppercase font-medium">Years of Trust</span>
              </div>
              <div className="border-l-2 border-tertiary pl-4 py-1">
                <span className="block font-headline-lg text-primary font-bold">100%</span>
                <span className="text-xs text-on-surface-variant uppercase font-medium">Circular Packaging</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Image Showcase Section */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full relative group">
              {/* Decorative background aura */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 via-secondary/15 to-transparent rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

              <div className="relative bg-white p-3 rounded-2xl border border-outline-variant shadow-md overflow-hidden">
                {/* Founder Image Frame Container */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    alt="Mr. Vedant Kabra and Founders - G L Paper Trading Company"
                    src="/paper-trading/vedant-kabra-founder.png"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-sm">shield</span>
                    Leadership & Heritage
                  </div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>

                  {/* Founder Caption inside Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                    <p className="font-headline-md text-xl font-bold">Mr. Vedant Kabra</p>
                    <p className="text-xs text-white/80 font-medium">Founder & Managing Director</p>
                    <p className="text-[11px] text-white/60 mt-0.5">Carrying forward the legacy of Mr. Govindlal ji Kabra</p>
                  </div>
                </div>

                {/* Founder's Direct Quote Callout */}
                <div className="p-6 text-left bg-surface-container-low rounded-xl mt-3 border border-outline-variant/60">
                  <span className="material-symbols-outlined text-secondary text-2xl select-none">
                    format_quote
                  </span>
                  <p className="font-body-md italic text-xs text-primary font-medium mt-1 leading-relaxed">
                    "Our foundation was built on trust, client relationships, and punctuality thirty years ago. Today, we carry that same sacred promise into every metric ton of kraft and duplex board we supply."
                  </p>
                  <p className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-bold mt-3">
                    — Vedant Kabra, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
