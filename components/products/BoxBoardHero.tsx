export function BoxBoardHero() {
  return (
    <section className="relative overflow-hidden mb-12 rounded-xl bg-primary-container p-8 md:p-12 text-white">
      <div className="relative z-10 max-w-3xl text-left">
        <nav className="flex mb-4 text-sm text-on-primary-container font-medium uppercase tracking-widest">
          <span>Products</span>
          <span className="mx-2">/</span>
          <span className="text-white">Box Board Solutions</span>
        </nav>
        <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Box Board (FBB & SBS)</h1>
        <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
          Premium virgin paperboards engineered for luxury packaging, pharmaceutical cartons, and high-fidelity graphics. Our Box Board range includes multi-ply Folding Box Board (FBB) and 100% virgin Solid Bleached Sulfate (SBS) boards delivering supreme rigidity, brightness, and flawless folding performance.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <span className="bg-on-primary-container/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest border border-white/10">
            Virgin Pulp Grade
          </span>
          <span className="bg-on-primary-container/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest border border-white/10">
            180 - 450 GSM
          </span>
          <span className="bg-on-primary-container/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest border border-white/10">
            FDA Food-Grade Certified
          </span>
          <span className="bg-on-primary-container/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest border border-white/10">
            100% Recyclable
          </span>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent"></div>
      </div>
    </section>
  )
}
