export function KraftHero() {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center brightness-50"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjNJ4l412keC7oYwBCbh21LeVsn5DlQKscehVuUYQvRTSdciCDBjWvdRqqVu2ED_cGVvcV-3Nut9jtJoKjPbXxSefAX_0OIS8q2rGMo6eIJN8wp-nTk0h-jIJijzyTn9qjq4O4_8biHS18VL3l_KqkLcNVtxligOTwXLhd749qDXZvoZ-bGVyKY3FDDMC0lALJDH7CCM7sq9uTyfkgrHOXw7cZgtwfs-w0S5Wah_mFZjrQErIEcdkG')`,
          }}
        />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-white text-left">
        <div className="max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-fixed mb-4 block">
            Product Category
          </span>
          <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Kraft Paper Solutions</h1>
          <p className="font-body-lg text-body-lg text-white/80 border-l-4 border-secondary pl-6 leading-relaxed">
            Engineered for heavy-duty packaging and industrial applications. Our Kraft paper range offers superior tensile strength, tear resistance, and sustainable performance for global supply chains.
          </p>
        </div>
      </div>
    </section>
  )
}
