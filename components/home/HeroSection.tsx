import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[870px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center industrial-overlay"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBW5f8yzOeqJVH0g_lB4M_ElwJN5KpzJTkfOqRg1Iu5k464jYdqVmNyeJx2wX1vNWh1be6DFonKSS9rWiDlD4PUXIZDQhzpz6AUwaSGfVWSyv0qT1wR5oACWQG1rljzxEB7jYKECdqSwDuT5Q8PKc8DrM0RxxOjYOuYl4BPE2ZYbB2KaI0DOz7x7YDXLx6aRCSakAvbirKF9Ioh5mvEZb_pCos32U1DnmJmotlmdyrB33CtGLyl8NtA')`,
          }}
        />
      </div>
      <div className="relative z-10 h-full max-w-container-max mx-auto flex flex-col justify-center px-margin-mobile md:px-margin-desktop text-white">
        <span className="font-label-sm text-label-sm uppercase tracking-widest bg-secondary-container/20 text-secondary-container px-3 py-1 w-fit mb-6 rounded">
          ISO 9001:2015 Certified Enterprise
        </span>
        <h1 className="font-display-lg text-display-lg max-w-2xl mb-6">
          Redefining Excellence in Industrial Paper Solutions
        </h1>
        <p className="font-body-lg text-body-lg max-w-xl mb-10 opacity-90 leading-relaxed">
          Connecting global supply with local demand. G L Paper Trading Trading provides superior grade coated duplex boards and kraft paper for India's growing industrial needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/kraft-paper-solutions">
            <button className="bg-on-primary-container text-white px-8 py-4 rounded font-semibold text-lg flex items-center gap-2 hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all group cursor-pointer">
              Explore Our Inventory
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </Link>
          <button className="border border-white/40 hover:bg-white/10 px-8 py-4 rounded font-semibold text-lg transition-all backdrop-blur-sm cursor-pointer">
            Download Product Catalog
          </button>
        </div>
      </div>
      {/* Value Props Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-surface-container-lowest/10 backdrop-blur-md border-t border-white/10 hidden lg:block">
        <div className="max-w-container-max mx-auto px-margin-desktop py-8 grid grid-cols-3 divide-x divide-white/20">
          <div className="flex items-center gap-4 px-8 text-white">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <div>
              <h4 className="font-title-md text-title-md font-bold">Unyielding Quality</h4>
              <p className="text-sm opacity-70">Strict adherence to international standards.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-8 text-white">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              handshake
            </span>
            <div>
              <h4 className="font-title-md text-title-md font-bold">Reliable Supply</h4>
              <p className="text-sm opacity-70">Zero-downtime logistics for bulk orders.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-8 text-white">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              precision_manufacturing
            </span>
            <div>
              <h4 className="font-title-md text-title-md font-bold">Technical Precision</h4>
              <p className="text-sm opacity-70">Tailored GSM & size specifications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
