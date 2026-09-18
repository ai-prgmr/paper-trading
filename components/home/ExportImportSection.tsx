import React from "react"
import Link from "next/link"

export function ExportImportSection() {
  return (
    <section className="relative py-24 bg-[#022c22] overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-1/2 -right-1/4 w-[100x0px] h-[1000px] rounded-full bg-linear-to-br from-[#064E3B]/40 to-transparent blur-3xl opacity-50"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-linear-to-tr from-primary/20 to-transparent blur-3xl opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-surface to-secondary-container opacity-50"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="material-symbols-outlined text-sm text-[#34d399]">public</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white">Global Trade Division</span>
            </div>

            <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Export & Import <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#34d399] to-[#10b981]">Worldwide</span>
            </h2>

            <p className="font-body-lg text-lg md:text-xl text-white/80 leading-relaxed mb-10">
              Expanding horizons for premium paper & board products. We seamlessly bridge the gap between world-class mills and international markets with reliable logistics, stringent compliance, and unparalleled service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/+919301532323"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-1"
              >
                <span className="material-symbols-outlined">forum</span>
                Connect on WhatsApp
              </Link>

              <Link
                href="mailto:info@gltradingcompany.com"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-md hover:-translate-y-1"
              >
                <span className="material-symbols-outlined">mail</span>
                Email Us
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <h4 className="text-3xl font-extrabold text-white mb-1">20+</h4>
                <p className="text-sm text-white/60 font-medium">Countries</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-white mb-1">100%</h4>
                <p className="text-sm text-white/60 font-medium">Compliance</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-white mb-1">24/7</h4>
                <p className="text-sm text-white/60 font-medium">Support</p>
              </div>
            </div>
          </div>

          {/* Visual/Graphic */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-linear-to-tr from-[#064E3B] to-[#047857] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 border-2 border-white/10 rounded-full border-dashed"></div>
              <div className="absolute inset-8 border border-white/5 rounded-full"></div>

              {/* Central element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#064E3B] w-48 h-48 rounded-full border-4 border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-xl">
                <span className="material-symbols-outlined text-8xl text-white opacity-80">public</span>
              </div>

              {/* Orbiting elements - visual only */}
              <div className="absolute top-[10%] right-[20%] bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="material-symbols-outlined text-white">directions_boat</span>
              </div>
              <div className="absolute bottom-[20%] left-[10%] bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-white">flight_takeoff</span>
              </div>
              <div className="absolute bottom-[10%] right-[15%] bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <span className="material-symbols-outlined text-white">inventory_2</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
