import Link from "next/link"

export function ProductCTA() {
  return (
    <section className="my-16 bg-brand-navy rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-2xl relative z-10">
        <h2 className="font-display-md text-3xl font-bold mb-4">Ready to elevate your packaging?</h2>
        <p className="font-body-md text-white/80 text-lg">
          Get in touch with our procurement team today for customized pricing, bulk orders, and sample requests.
        </p>
      </div>
      
      <div className="relative z-10 shrink-0">
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-forest/90 text-white px-8 py-4 rounded font-title-md font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Request a Quote
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </section>
  )
}
