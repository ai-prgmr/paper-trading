export function CertifiedExcellence() {
  return (
    <section className="bg-white py-24 border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-primary-container mb-4">
            Certified Excellence
          </h2>
          <div className="w-20 h-1 bg-on-secondary-container"></div>
          <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Our commitment to quality, sustainability, and financial integrity is validated by leading international certification bodies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="flex flex-col items-center text-center p-8 rounded-lg border border-outline-variant bg-surface-container-lowest hover:shadow-lg transition-all duration-300">
            <div className="bg-primary-container/10 p-4 rounded-full mb-6">
              <span className="material-symbols-outlined text-4xl text-primary">verified</span>
            </div>
            <h4 className="font-title-md text-title-md font-bold mb-2">ISO 9001:2015</h4>
            <p className="text-sm text-on-surface-variant font-body-md">Quality Management Systems</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 rounded-lg border border-outline-variant bg-surface-container-lowest hover:shadow-lg transition-all duration-300">
            <div className="bg-primary-container/10 p-4 rounded-full mb-6">
              <span className="material-symbols-outlined text-4xl text-primary">forest</span>
            </div>
            <h4 className="font-title-md text-title-md font-bold mb-2">FSC Certified</h4>
            <p className="text-sm text-on-surface-variant font-body-md">Forest Stewardship Council</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 rounded-lg border border-outline-variant bg-surface-container-lowest hover:shadow-lg transition-all duration-300">
            <div className="bg-primary-container/10 p-4 rounded-full mb-6">
              <span className="material-symbols-outlined text-4xl text-primary">eco</span>
            </div>
            <h4 className="font-title-md text-title-md font-bold mb-2">PEFC Certified</h4>
            <p className="text-sm text-on-surface-variant font-body-md">Endorsement of Forest Certification</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 rounded-lg border border-outline-variant bg-surface-container-lowest hover:shadow-lg transition-all duration-300">
            <div className="bg-primary-container/10 p-4 rounded-full mb-6">
              <span className="material-symbols-outlined text-4xl text-primary">account_balance</span>
            </div>
            <h4 className="font-title-md text-title-md font-bold mb-2">CRISIL Rated</h4>
            <p className="text-sm text-on-surface-variant font-body-md">
              Financial Stability & Creditworthiness
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-on-surface-variant font-body-md opacity-75 italic">
            Partnering exclusively with mills holding these global sustainability standards.
          </p>
        </div>
      </div>
    </section>
  )
}
