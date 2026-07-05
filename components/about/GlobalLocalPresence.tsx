export function GlobalLocalPresence() {
  return (
    <section className="py-24 bg-primary-container text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop container mx-auto max-w-container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-6 text-white">A Network Without Borders</h2>
            <p className="text-white/80 font-body-lg mb-8">
              From our headquarters in Mumbai to global hubs in Singapore and Dubai, our logistical network ensures that quality paper is delivered on time, every time.
            </p>
            <div className="space-y-8">
              <div className="border-l-2 border-secondary-fixed pl-6">
                <h4 className="font-title-md text-title-md text-white mb-2">Domestic Reach</h4>
                <p className="text-white/60 font-body-md">
                  Presence in 24 Indian states with specialized warehouses in Gujarat, Maharashtra, and Tamil Nadu.
                </p>
              </div>
              <div className="border-l-2 border-secondary-fixed pl-6">
                <h4 className="font-title-md text-title-md text-white mb-2">Global Exports</h4>
                <p className="text-white/60 font-body-md">
                  Shipping industrial-grade paper products to over 15 countries across Asia, Africa, and the Middle East.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-primary/20 z-10 pointer-events-none"></div>
            <div className="w-full h-full grayscale brightness-75 contrast-125">
              <img
                className="w-full h-full object-cover"
                alt="Map representing global shipping routes originating from India"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhzrmH2llcgRzSByuuk2TO7SzTf-0m-wTlReSSFryPynMUBIHc1TyoLJLXRpLdgpM5OY3IQjP1R_QKiT-VaAUGHhaXPw58_7pMtcDo7ZXsYToGCmnWIPIPGO_tnoSEuIiDSn1TVMeZnVL-RQvPtQxwDNgHXLlBMjnZvClCv-AN7HydKjKKHk6AN9wWeeYprErtLCsG6HW-SQD5ZDTVEo4X4l60u3S0zCEIauteaFzm3nc83i2blFxh"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
