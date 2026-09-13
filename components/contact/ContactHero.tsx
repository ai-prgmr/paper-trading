import Link from "next/link"

export function ContactHero() {
  return (
    <section className="relative w-full min-h-[450px] md:min-h-[500px] flex items-center overflow-hidden">
      {/* Responsive Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/contact-hero-bg.jpg')`,
        }}
      />

      {/* Light gradient overlay to ensure text readability on the left */}
      <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/50 to-transparent"></div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-4 sm:px-8 pt-24 pb-12">
        <div className="max-w-xl text-left">
          <h1 className="font-display-lg text-5xl md:text-6xl font-bold text-[#1e293b] mb-2 tracking-tight drop-shadow-sm">
            Contact Us
          </h1>

          <div className="w-16 h-1 bg-[#eab308] mb-6 rounded-full"></div>

          <p className="font-body-lg text-sm md:text-base font-semibold tracking-widest text-[#475569] uppercase mb-12 drop-shadow-sm leading-relaxed">
            Let's build a stronger, <br className="hidden sm:block" /> cleaner tomorrow together
          </p>
        </div>
      </div>
    </section>
  )
}
