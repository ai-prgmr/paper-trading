import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary-container text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
      <div className="max-w-container-max mx-auto text-center relative z-10">
        <h2 className="font-headline-lg text-headline-lg mb-6">Ready to scale your production?</h2>
        <p className="font-body-lg text-body-lg opacity-80 max-w-xl mx-auto mb-10">
          Join hundreds of manufacturing enterprises that rely on G L Paper Trading for their primary and secondary packaging needs.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/contact">
            <button className="bg-white text-primary px-10 py-4 rounded font-bold hover:bg-primary-fixed-dim transition-colors cursor-pointer">
              Request a Bulk Quote
            </button>
          </Link>
          <Link href="/contact">
            <button className="border border-white/40 hover:bg-white/10 px-10 py-4 rounded font-bold transition-colors cursor-pointer">
              Contact Sales Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
