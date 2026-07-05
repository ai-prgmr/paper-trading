export function DuplexBoardHero() {
  return (
    <section className="relative mb-16 rounded-xl overflow-hidden industrial-border bg-primary-container text-on-primary">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-40 grayscale"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBh0SwEZaDwnLL3zPI1cpDCnG0X82DerlWD4DCyTM8bsvKi3AhNXbRezgzoqdSZ4deAA9cs5csMAOCsaHDP_QeTcqtOLGFj8FhPodD09kCVoAv9vjjufrrcoO-u54mhdNs1v--T6oalRi72x8bZE0oPy9Rf_GaNbIVYrUITs0XsszAwfgi_XGgEg3EX1WZ7-Xj4s6-uK4yci-doQa8ZBv56VsFiQQ0okQxajiiBfIEc2NH_c1UQaA1')`,
          }}
        />
      </div>
      <div className="relative z-10 p-12 md:p-20 text-left">
        <span className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary text-on-primary font-label-sm text-label-sm uppercase tracking-widest">
          Premium Category
        </span>
        <h1 className="font-display-lg text-display-lg mb-6 max-w-2xl text-white">Duplex Paper Board</h1>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-3xl leading-relaxed">
          Our industrial-grade Duplex Boards are engineered for superior structural integrity and high-definition printability. Specifically designed for the global packaging industry, these boards provide the perfect balance between rigidity and cost-effectiveness for folding cartons and heavy-duty box manufacturing.
        </p>
      </div>
    </section>
  )
}
