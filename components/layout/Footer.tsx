import Link from "next/link"
import Image from "next/image"
export function Footer() {
  return (
    <footer className="bg-surface-dim w-full py-16 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter border-t border-outline-variant">
      <div className="md:col-span-1">
        <Link href="/" className="flex items-center gap-2">
          <Image alt="GL Trading Company" src="/paper-trading/logo-6.png" width={300} height={300} />
        </Link>
        <p className="text-on-surface-variant font-body-md mb-6">
          ISO 9001:2015 certified trading enterprise specializing in high-grade industrial paper and board.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-on-surface-variant hover:text-tertiary-fixed transition-colors">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a href="mailto:info@gltradingcompany.com" className="text-on-surface-variant hover:text-tertiary-fixed transition-colors" title="info@gltradingcompany.com">
            <span className="material-symbols-outlined">mail</span>
          </a>
          <a href="https://wa.me/919301532323" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-[#25D366] transition-colors" title="WhatsApp: +91 93015 32323">
            <span className="material-symbols-outlined">chat</span>
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-title-md text-title-md font-bold mb-6 text-on-surface">Product Range</h4>
        <ul className="space-y-4">
          <li>
            <Link href="/box-board" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Box Board (FBB & SBS)
            </Link>
          </li>
          <li>
            <Link href="/kraft-paper-solutions" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Kraft Paper
            </Link>
          </li>
          <li>
            <Link href="/duplex-paper-board" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Duplex Paper Board
            </Link>
          </li>
          <li>
            <Link href="/kraft-paper-solutions" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Custom Solutions
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-title-md text-title-md font-bold mb-6 text-on-surface">Headquarters</h4>
        <p className="text-on-surface-variant font-body-md my-3 text-sm">
          B-2 Raj Lakshmi Warehousing LaxmiBai Nagar Industrial Area, Kila Maidan, Indore - 452006, M.P.
        </p>
        <button className="flex items-end justify-end gap-2 cursor-pointer bg-green-500 text-white px-4 py-2 rounded my-3">
          <Link href="https://maps.app.goo.gl/CsYx8rBap5KR5VcD9" target="_blank" rel="noopener noreferrer" className="text-white transition-colors">
            Open in Google Maps &rarr;
          </Link>
        </button>
        <div className="bg-primary-container/10 p-4 rounded border border-primary-container/20">
          <span className="block text-sm font-bold text-on-primary-fixed-variant mb-1">Sales Inquiry</span>
          <a href="tel:+919301532323" className="block text-lg font-bold text-on-surface hover:text-primary transition-colors">
            +91 93015 32323
          </a>
          <a href="mailto:info@gltradingcompany.com" className="block text-xs text-on-surface-variant hover:text-primary mt-1">
            info@gltradingcompany.com
          </a>
        </div>
      </div>
      <div className="md:col-span-3 pt-12 border-t border-outline-variant mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-on-surface-variant text-sm">
          © 2026 GL Trading Company. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
