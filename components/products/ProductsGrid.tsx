import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: "kraft-paper",
    name: "Kraft Paper",
    classification: "Durable Packaging Material",
    description: "High-strength, sustainable paper ideal for heavy-duty wrapping, corrugated boxes, and eco-friendly packaging solutions.",
    image: "/kraft-paper.jpg",
    link: "/kraft-paper-solutions",
    color: "bg-secondary/10 text-secondary"
  },
  {
    id: "box-board",
    name: "Box Board (FBB)",
    classification: "Premium Rigid Packaging",
    description: "Folding Box Board (FBB) offering exceptional stiffness and a smooth surface for high-end retail and cosmetic packaging.",
    image: "/fbb.png",
    link: "/box-board",
    color: "bg-primary/10 text-primary"
  },
  {
    id: "duplex-board",
    name: "Duplex Board",
    classification: "Structural Cardboard",
    description: "Reliable, multi-layered board with a coated top surface, perfect for everyday cartons and industrial boxes.",
    image: "/duplex-board.jpg",
    link: "/duplex-paper-board",
    color: "bg-[#064E3B]/10 text-[#064E3B]"
  },
  {
    id: "copier-paper",
    name: "Copier Paper",
    classification: "Office & Commercial Printing",
    description: "High-quality A3 and A4 paper (70-100 GSM) ensuring excellent print quality and smooth performance for daily office needs.",
    image: "/copier-paper.jpg",
    link: "/copier",
    color: "bg-outline/10 text-on-surface-variant"
  }
]

export function ProductsGrid() {
  return (
    <section className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={product.link}
            className="group flex flex-col bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-[0_4px_24px_rgba(10,29,55,0.08)] transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative h-64 w-full bg-surface-container-low overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span className={`font-label-sm uppercase tracking-wider px-3 py-1 rounded-full text-xs font-bold ${product.color}`}>
                  {product.classification}
                </span>
              </div>
              
              <h3 className="font-headline-lg text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {product.name}
              </h3>
              
              <p className="font-body-md text-on-surface-variant flex-grow mb-6">
                {product.description}
              </p>

              <div className="mt-auto flex items-center text-primary font-title-sm font-semibold group-hover:text-secondary transition-colors">
                Explore Specifications 
                <span className="material-symbols-outlined ml-2 text-sm transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
