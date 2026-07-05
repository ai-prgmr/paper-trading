export function QualityCommitment() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop container mx-auto max-w-container-max">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-[500px] object-cover rounded shadow-sm"
            alt="Quality testing laboratory environment measuring GSM and paper tensile strength"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw4hsLxGTUVLsmL18970FjzDhW19CwTeoK-zY1NP1qygClsSJJSn3vvZNIWosx-8Job1PLePm9qi6j0mN78WWeYAw41E84mwZFomX66ufEVW_dwe8lnT24FMeDSrhzl6Qxjcyx-KgBDvkpw5E0SyVoiuEGX7mGqdEM47pmXo0DjXfyTv_CRqT0frRAQzCtXZ39QrVmnGk6V-djXhptElfUKyIBusf19zB-t1z7TKXcgkJM7QkxWbKu"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <span className="bg-on-tertiary-fixed-variant/10 text-on-tertiary-fixed-variant px-3 py-1 rounded text-label-sm font-label-sm uppercase">
              ISO 9001:2015 Standards
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Quality is Our Currency</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Every sheet of paper that passes through our distribution centers undergoes rigorous quality checks. Our ISO-certified processes ensure that moisture content, GSM consistency, and tensile strength meet international benchmarks.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant">check_circle</span>
              <div>
                <p className="font-title-md text-title-md text-primary leading-none mb-1">Batch Tracking</p>
                <p className="text-on-surface-variant font-body-md">
                  Complete end-to-end traceability for every industrial roll and board batch.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant">check_circle</span>
              <div>
                <p className="font-title-md text-title-md text-primary leading-none mb-1">Moisture Control</p>
                <p className="text-on-surface-variant font-body-md">
                  Advanced climate-controlled warehousing to maintain optimal paper integrity.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant">check_circle</span>
              <div>
                <p className="font-title-md text-title-md text-primary leading-none mb-1">Certified Mills</p>
                <p className="text-on-surface-variant font-body-md">
                  We exclusively partner with mills that follow sustainable and high-quality production protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
