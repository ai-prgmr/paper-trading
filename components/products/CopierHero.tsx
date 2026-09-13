export function CopierHero() {
  return (
    <section className="relative overflow-hidden mb-12 rounded-xl bg-primary-container p-8 md:p-12 text-white">
      <div className="relative z-10 max-w-3xl text-left">
        <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Copier Paper</h1>
        <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
          High-performance copier paper engineered for jam-free printing, sharp text, and vibrant color reproduction. Ideal for high-volume office use and commercial printing. Available in A3 and A4 sizes, delivering exceptional runnability and opacity.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <span className="bg-on-primary-container/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest border border-white/10">
            A3 & A4 Sizes
          </span>
          <span className="bg-on-primary-container/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest border border-white/10">
            70 - 100 GSM
          </span>
          <span className="bg-on-primary-container/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest border border-white/10">
            Jam-Free Runnability
          </span>
          <span className="bg-on-primary-container/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest border border-white/10">
            High Opacity
          </span>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent"></div>
      </div>
    </section>
  )
}
