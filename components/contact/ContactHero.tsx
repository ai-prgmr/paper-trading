export function ContactHero() {
  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3wD5ehfESaaiU5PxVFDHLIrJO9cCsF6BrQiB7D3Om1gEzKyBoXfg3HWRXymc8KS29Zko2OSozt8hUhzHofxmkhuJ56Gx_F6oFhaAWrlxDo8giIS4yCLHjRfoVIghJvSIHh0CrWyLHi9lD1qCv3dfvbNqq2dbqBI-RIrLaR6uNy-w9G6lY8v75z4xRcrTlfxXzjmFt5USZSvQoWI-30sDtN-9l1U8pYi9uSKDJbGbMGBrwt9fyoI0U')`,
        }}
      />
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="relative z-10 text-center px-4 max-w-container-max mx-auto text-white">
        <h1 className="font-display-lg text-display-lg mb-4">Partner with G L Paper Trading</h1>
        <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl mx-auto">
          Connecting global manufacturers with local efficiency. Reach out today for wholesale industrial paper solutions and logistics support.
        </p>
      </div>
    </section>
  )
}
