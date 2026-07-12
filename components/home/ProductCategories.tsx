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
          Discover our high-performance paper products, manufactured with precision for packaging and industrial applications.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Large Featured Product */}
        <div className="md:col-span-8 group relative overflow-hidden rounded bg-surface-container-low h-[500px] bento-card border border-outline-variant">
          <div className="absolute inset-0 bg-linear-to-t from-[#064E3B]/90 via-[#064E3B]/30 to-transparent z-10"></div>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwZSA02nG5EZd7ONi0PQGL8dSRJzUyFP8KrYoGkOEU598JJrE9tCKOAY6gwcnabxBJDnjtWt1_IFxEBTl6zT_gk4JicjuyHGALhUCkfj-_YD3NXfjv5P982T0zb7t6MOQpVV0UmltG0xrPqgesRM_BiWZwhG5PBIf68SLAnmO5XvggB_NR9cPlQSopk-asXFbfCzhIE1km3jfNNQc0CotiwvAwL-qnkokiZalOMqj46pt8rHiTe4sO')`,
            }}
          />
          <div className="absolute bottom-0 left-0 p-10 z-20 text-white">
            <div className="flex gap-2 items-center mb-4">
              <span className="bg-on-tertiary-container/30 backdrop-blur-sm text-white px-3 py-1 rounded text-sm inline-block">
                Best Seller
              </span>
              <Badge variant="sage" className="backdrop-blur-sm px-3 py-1 border border-white/20 text-xs">
                Plastic Substitute
              </Badge>
            </div>
            <h3 className="font-headline-lg text-headline-lg mb-2">Coated Duplex Board</h3>
            <p className="max-w-md opacity-90 mb-6 font-body-md text-sm leading-relaxed">
              Premium sustainable alternative to single-use plastics. High-performance clay-coated boards tailored for high-fidelity printing and circular packaging design.
            </p>
            <div className="flex gap-4 mb-6">
              <span className="text-xs bg-white/20 px-2 py-1 rounded">230 - 450 GSM</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">HWC / LWC Available</span>
            </div>
            <Link href="/coated-duplex-board" className="bg-white text-[#064E3B] px-6 py-2.5 rounded font-semibold text-sm hover:bg-white/95 transition-all inline-block">
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
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMbT4UMbf5OBg-_1hJvcbJaNmGpDR1SEvykhTeH6u7BK79sWLivSTg1vEPcGZN8sJp6wHMPDxJFXR9JXVctFKEU7M8_THSxz5_mMeLTLeOSJV4veFW6Qy73vp8sVGw9aer2eUWZ1E2E4v569nJN8QFFK3-f5TVAQf3KrU1jrMzL5s_P8L3VVZoopkzFrWMRJsBk7R_8uzh5hQw1Y1YCwdIWQrmNGFLhV9jWmqQBNdrNPMaQ9ZeGVvI')`,
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

        {/* Small Product Cards */}
        <div className="md:col-span-6 lg:col-span-4 group relative overflow-hidden rounded bg-surface-container-low h-[300px] bento-card border border-outline-variant">
          <div className="p-8 h-full flex flex-col justify-between paper-texture">
            <div>
              <span className="material-symbols-outlined text-on-secondary-container mb-4 text-3xl">
                description
              </span>
              <h3 className="font-title-md text-title-md font-bold mb-2">Duplex Paper Board</h3>
              <p className="text-sm text-on-surface-variant font-body-md">
                Sturdy recycled grey back boards for reliable everyday packaging solutions.
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs font-bold text-on-secondary-fixed-variant">180 - 400 GSM</span>
              <Link href="/duplex-paper-board" className="material-symbols-outlined bg-white rounded-full p-2 text-primary shadow-sm hover:scale-115 transition-transform">
                add
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-8 group relative overflow-hidden rounded bg-primary-container h-[300px] bento-card border border-outline">
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
            <div className="hidden lg:block opacity-20 transform -rotate-12 translate-x-10">
              <span className="material-symbols-outlined text-[160px]">inventory_2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
