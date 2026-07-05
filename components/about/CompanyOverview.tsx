export function CompanyOverview() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop container mx-auto max-w-container-max">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-primary font-label-sm uppercase tracking-widest border-l-4 border-primary pl-4">
              Company Overview
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Defining Standards in the Paper Trading Industry
            </h2>
          </div>
          <p className="text-on-surface-variant font-body-lg text-body-lg">
            Founded on the principles of reliability and transparency, G L Paper Trading Trading Enterprise has grown from a local merchant to a premier national distributor. We specialize in sourcing and supplying high-quality industrial paper products that fuel the publishing, packaging, and logistics sectors across the Indian subcontinent and beyond.
          </p>
          <div className="grid grid-cols-2 gap-8 py-4">
            <div className="border-t border-outline-variant pt-4">
              <span className="block font-display-lg text-headline-lg text-primary">30+</span>
              <span className="text-label-sm font-label-sm uppercase text-on-surface-variant">
                Years Experience
              </span>
            </div>
            <div className="border-t border-outline-variant pt-4">
              <span className="block font-display-lg text-headline-lg text-primary">500+</span>
              <span className="text-label-sm font-label-sm uppercase text-on-surface-variant">
                Bulk Clients
              </span>
            </div>
            <div className="border-t border-outline-variant pt-4">
              <span className="block font-display-lg text-headline-lg text-primary">12k</span>
              <span className="text-label-sm font-label-sm uppercase text-on-surface-variant">
                Annual Tonnage
              </span>
            </div>
            <div className="border-t border-outline-variant pt-4">
              <span className="block font-display-lg text-headline-lg text-primary">ISO</span>
              <span className="text-label-sm font-label-sm uppercase text-on-surface-variant">
                9001:2015 Certified
              </span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary-container/5 rounded-xl -rotate-2 transition-transform group-hover:rotate-0"></div>
          <div className="relative bg-white p-2 rounded shadow-sm border border-outline-variant">
            <img
              className="w-full h-auto rounded"
              alt="G L Paper Trading corporate boardroom and leadership team portrait mockup"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASvnQt9WbPsuDH5g_elbs-x28AsPPczRW4Oq-C5Het09lW0VhzQYiXDmazgzf-twIbFo44_7FcW3teUp-ubFuOaFv87XWuCLf2CnXPIlVnoQbAuePHxwqKk0cNEGpB6FuUsoTWyap98YO1O3efoS5uKdwScWJN-A7wjy9PNgge146oh11CdneGm0nhiigf-9T58-ZHaEKvFshh1Jfx-k6k9ALhRcg5Cv9T21wwTWKfdC6OQIMWTts1"
            />
            <div className="absolute bottom-6 right-6 bg-primary-container text-white p-6 max-w-xs shadow-xl rounded">
              <p className="font-body-md italic text-sm">
                "Our commitment isn't just to the paper we sell, but to the growth of every partner we serve."
              </p>
              <p className="font-label-sm mt-4 uppercase font-bold tracking-tighter">
                Director's Note
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
