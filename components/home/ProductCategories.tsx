import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function ProductCategories() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-on-primary-container mb-4">
          Green Packaging & Industrial Solutions
        </h2>
        <div className="w-20 h-1 bg-on-secondary-container"></div>
        <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Discover our high-performance paper products, sourced with precision for packaging and industrial applications.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Large Featured Product */}
        <div className="md:col-span-8 group relative overflow-hidden rounded bg-surface-container-low h-[500px] bento-card border border-outline-variant">
          <div className="absolute inset-0 bg-linear-to-t from-[#064E3B]/90 via-[#064E3B]/30 to-transparent z-10"></div>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url('/SBS.webp')`,
            }}
          />
          <div className="absolute bottom-0 left-0 p-10 z-20 text-white">
            <div className="flex gap-2 items-center mb-4">
              <span className="bg-on-tertiary-container/30 backdrop-blur-sm text-white px-3 py-1 rounded text-sm inline-block">
                Premium Virgin Grade
              </span>
              <Badge variant="sage" className="backdrop-blur-sm px-3 py-1 border border-white/20 text-xs">
                FDA Food Grade
              </Badge>
            </div>
            <h3 className="font-headline-lg text-headline-lg mb-2">Box Board (FBB & SBS)</h3>
            <p className="max-w-md opacity-90 mb-6 font-body-md text-sm leading-relaxed">
              Superior virgin paperboard solutions including multi-layer Folding Box Board (FBB) and pure Solid Bleached Sulfate (SBS) boards for luxury folding cartons and pharmaceutical packaging.
            </p>
            <div className="flex gap-4 mb-6">
              <span className="text-xs bg-white/20 px-2 py-1 rounded">180 - 450 GSM</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">FBB / SBS Available</span>
            </div>
            <Link href="/box-board" className="bg-white text-[#064E3B] px-6 py-2.5 rounded font-semibold text-sm hover:bg-white/95 transition-all inline-block">
              View Catalog
            </Link>
          </div>
        </div>

        {/* Secondary Product */}
        <div className="md:col-span-4 group relative overflow-hidden rounded bg-surface-container-low h-[500px] bento-card border border-outline-variant">
          <div className="absolute inset-0 bg-linear-to-t from-[#064E3B]/90 via-[#064E3B]/30 to-transparent z-10"></div>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url('/kraft-paper.jpg')`,
            }}
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
            <h3 className="font-title-md text-title-md font-bold mb-2">Kraft Paper</h3>
            <p className="text-sm opacity-90 mb-4 font-body-md leading-relaxed">
              High-strength, 100% recyclable fibers for circular-economy packaging.
            </p>
            <Link href="/kraft-paper-solutions" className="text-white flex items-center gap-1 group/btn font-semibold hover:underline">
              View Specs{" "}
              <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Duplex Paper Board */}
        <div className="md:col-span-6 lg:col-span-4 group relative overflow-hidden rounded bg-surface-container-low h-[300px] bento-card border border-outline-variant text-white">
          <div className="absolute inset-0 bg-linear-to-t from-[#064E3B]/90 via-[#064E3B]/60 to-transparent z-10"></div>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url('/duplex-board.jpg')`,
            }}
          />
          <div className="p-8 h-full flex flex-col justify-between relative z-20">
            <div>
              <span className="material-symbols-outlined text-white mb-4 text-3xl">
                description
              </span>
              <h3 className="font-title-md text-title-md font-bold mb-2">Duplex Paper Board</h3>
              <p className="text-sm opacity-90 font-body-md">
                Sturdy recycled grey back boards for reliable everyday packaging solutions.
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded backdrop-blur-sm">180 - 400 GSM</span>
              <Link href="/duplex-paper-board" className="material-symbols-outlined bg-white rounded-full p-2 text-[#064E3B] shadow-sm hover:scale-115 transition-transform">
                arrow_forward
              </Link>
            </div>
          </div>
        </div>

        {/* Copier Paper */}
        <div className="md:col-span-6 lg:col-span-4 group relative overflow-hidden rounded bg-surface-container-low h-[300px] bento-card border border-outline-variant text-white">
          <div className="absolute inset-0 bg-linear-to-t from-[#064E3B]/90 via-[#064E3B]/60 to-transparent z-10"></div>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url('/copier-paper.jpg')`,
            }}
          />
          <div className="p-8 h-full flex flex-col justify-between relative z-20">
            <div>
              <span className="material-symbols-outlined text-white mb-4 text-3xl">
                print
              </span>
              <h3 className="font-title-md text-title-md font-bold mb-2">Copier Paper</h3>
              <p className="text-sm opacity-90 font-body-md">
                High-performance A3 and A4 copier paper for seamless printing.
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded backdrop-blur-sm">70 - 100 GSM</span>
              <Link href="/copier" className="material-symbols-outlined bg-white rounded-full p-2 text-[#064E3B] shadow-sm hover:scale-115 transition-transform">
                arrow_forward
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-4 group relative overflow-hidden rounded bg-primary-container h-[300px] bento-card border border-outline">
          <div className="p-8 h-full flex items-center justify-between">
            <div className="text-white max-w-md">
              <h3 className="font-headline-lg text-headline-lg mb-4">Custom Bulk Orders</h3>
              <p className="opacity-80 mb-6 font-body-md text-sm">
                Need specific dimensions or unique GSM combinations? Our procurement team sources tailored solutions for large-scale industrial requirements.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary-fixed hover:underline font-semibold">
                Consult with Experts
                <span className="material-symbols-outlined">launch</span>
              </Link>
            </div>
            <div className="hidden lg:block opacity-20 transform -rotate-12 translate-x-4">
              <span className="material-symbols-outlined text-[120px]">inventory_2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
