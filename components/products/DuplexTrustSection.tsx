export function DuplexTrustSection() {
  return (
    <section className="mt-20 py-12 border-t border-outline-variant grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-secondary mb-4">factory</span>
        <h4 className="font-title-md text-title-md text-primary mb-2 font-bold">Direct Mill Supply</h4>
        <p className="text-on-surface-variant font-body-md text-sm">
          Strategic partnerships with top-tier Indian and global paper mills ensures consistent quality and supply.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-secondary mb-4">high_quality</span>
        <h4 className="font-title-md text-title-md text-primary mb-2 font-bold">Standardized Quality</h4>
        <p className="text-on-surface-variant font-body-md text-sm">
          All batches undergo rigorous GSM, moisture, and stiffness tests to meet international industrial standards.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-secondary mb-4">distance</span>
        <h4 className="font-title-md text-title-md text-primary mb-2 font-bold">Pan-India Logistics</h4>
        <p className="text-on-surface-variant font-body-md text-sm">
          Comprehensive distribution network ensuring timely delivery of bulk orders across all major industrial hubs.
        </p>
      </div>
    </section>
  )
}
