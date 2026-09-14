export function ProductsLandingHero() {
  return (
    <section className="bg-primary text-white py-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden rounded-3xl mx-margin-mobile md:mx-0 mt-8 mb-16 shadow-lg">
      {/* Decorative texture */}
      <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary opacity-20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-3xl relative z-10">
        <span className="inline-block bg-white/10 text-white font-label-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
          Comprehensive Catalog
        </span>
        <h1 className="font-headline-lg text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Industrial Grade Paper & Board Solutions
        </h1>
        <p className="font-body-lg text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
          Discover our extensive range of high-quality materials designed for strength, structural integrity, and superior printing performance across all your packaging needs.
        </p>
      </div>
    </section>
  )
}
