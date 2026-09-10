import Link from "next/link"

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/919301532323"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-surface-dim px-3 py-1.5 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Chat with Sales
      </span>
    </Link>
  )
}
