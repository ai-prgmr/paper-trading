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
                4th Floor, Paper Tower, Commercial Zone 12, Mumbai, MH 400001, India
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
                +91 (22) 4567 8900
                <br />
                +91 98765 43210
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
                sales@bharatpaper.com
                <br />
                logistics@bharatpaper.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Map Placeholder */}
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-grow min-h-[300px] border border-outline-variant rounded overflow-hidden relative group block"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuChPBE3-6apKXZwppbXdSKG1HmfzKr0Yw_yUwE04JBe7xczigXsP57p4fQVJQNMiImGsSQ9R8q79NH5hzJmr3fJE0r5ZOk0Zq1wij7ENNS6d2KHavVlucFpg9qaec777-20uvHI_xgN1LJPTwPM4DU3tsxJ5KoPUuH35BCep--7f6wRjoO43JbpFwO_R_TDF0gqrYJmLeNb4fBwTRStfoD4OHTylOO0YPlmanhu-ISo9MtzI0GdVpBJ')`,
          }}
        />
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
