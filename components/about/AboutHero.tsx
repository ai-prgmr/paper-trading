export function AboutHero() {
  return (
    <section className="relative h-[716px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-container/60 z-10"></div>
        <img
          className="w-full h-full object-cover"
          alt="Industrial paper manufacturing facility stacked with giant rolls"
          src="/paper-trading/about-us-hero.png"
        />
      </div>
      <div className="relative z-20 text-center px-margin-mobile container mx-auto max-w-container-max text-white">
        <p className="text-secondary-fixed font-label-sm uppercase tracking-widest mb-4">
          Legacy of Excellence
        </p>
        <h1 className="font-display-lg text-display-lg mb-6 max-w-3xl mx-auto">
          India's Trusted Name in Global Paper Solutions
        </h1>
        <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto">
          Bridging traditional industrial values with modern supply chain efficiency for over eight decades.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  )
}
