export function TrustBanner() {
  return (
    <section className="bg-primary-container text-on-primary py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-8 opacity-80">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[48px] text-white">verified</span>
          <div>
            <p className="font-title-md text-title-md text-white font-bold">ISO 9001:2015 Certified</p>
            <p className="text-on-primary-container text-sm font-body-md">
              Quality Management Systems across all hubs
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[48px] text-white">public</span>
          <div>
            <p className="font-title-md text-title-md text-white font-bold">Exporting to 24+ Countries</p>
            <p className="text-on-primary-container text-sm font-body-md">
              Dedicated international logistics desk
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[48px] text-white">inventory</span>
          <div>
            <p className="font-title-md text-title-md text-white font-bold">Ready Inventory</p>
            <p className="text-on-primary-container text-sm font-body-md">
              500,000+ MT processed annually
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
