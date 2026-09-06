export function ContactDetails() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-gutter">
      {/* Contact Details Card */}
      <div className="bg-surface-container-low border border-outline-variant p-8 rounded">
        <h3 className="font-headline-lg text-headline-lg text-primary mb-6">Corporate Office</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-primary-container bg-primary-fixed p-3 rounded h-fit">
              location_on
            </span>
            <div>
              <h4 className="font-title-md text-title-md text-primary font-bold">Headquarters</h4>
              <p className="text-on-surface-variant font-body-md mt-1 text-sm">
                B-2 Raj Lakshmi Warehousing LaxmiBai Nagar Industrial Area, Kila Maidan, Indore - 452006, M.P.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-primary-container bg-primary-fixed p-3 rounded h-fit">
              call
            </span>
            <div>
              <h4 className="font-title-md text-title-md text-primary font-bold">Phone & WhatsApp</h4>
              <p className="text-on-surface-variant font-body-md mt-1 text-sm">
                <a
                  href="tel:+919301532323"
                  className="hover:text-primary transition-colors font-medium text-primary block"
                >
                  +91 93015 32323
                </a>
                <a
                  href="https://wa.me/919301532323?text=Hello%20G%20L%20Paper%20Trading%2C%20I%20would%20like%20to%20inquire%20about%20your%20paper%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#25D366] hover:underline font-semibold inline-flex items-center gap-1 mt-1"
                >
                  Chat on WhatsApp &rarr;
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-primary-container bg-primary-fixed p-3 rounded h-fit">
              mail
            </span>
            <div>
              <h4 className="font-title-md text-title-md text-primary font-bold">Email Inquiries</h4>
              <p className="text-on-surface-variant font-body-md mt-1 text-sm">
                <a
                  href="mailto:info@gltradingcompany.com"
                  className="hover:text-primary transition-colors font-medium text-primary block"
                >
                  info@gltradingcompany.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Map Placeholder */}
      <a
        href="https://maps.app.goo.gl/CsYx8rBap5KR5VcD9"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-grow min-h-[300px] border border-outline-variant rounded overflow-hidden relative group block"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.742158619659!2d75.83132507541318!3d22.731543979378834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd926826ac47%3A0x189aece0f8a8c793!2sRajlaxmi%20Warehousing%20pvt%20ltd!5e1!3m2!1sen!2sin!4v1788688962988!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>

        <div className="absolute inset-0 bg-primary-container/10"></div>
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            location_on
          </span>
          <span className="font-label-sm text-label-sm text-primary uppercase">Open in Google Maps</span>
        </div>
      </a>
    </div>
  )
}
