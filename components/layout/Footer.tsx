import Link from "next/link"
import Image from "next/image"
export function Footer() {
  return (
    <footer className="bg-surface-dim w-full py-16 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter border-t border-outline-variant">
      <div className="md:col-span-1">
        <Link href="/" className="flex items-center gap-2">
          <Image alt="G L Paper Trading Company" src="/paper-trading/logo-5.png" width={300} height={300} />
        </Link>
        <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
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
        <h4 className="font-title-md text-title-md font-bold mb-6 text-on-surface">Quick Links</h4>
        <ul className="space-y-4">
          <li>
            <Link href="/contact" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Bulk Orders
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Quality Control
            </Link>
          </li>
          <li>
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-title-md text-title-md font-bold mb-6 text-on-surface">Headquarters</h4>
        <p className="text-on-surface-variant mb-4 leading-relaxed">
          Industrial Estate Phase II, Okhla
          <br />
          New Delhi, 110020, India
        </p>
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
      <div className="md:col-span-4 pt-12 border-t border-outline-variant mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-on-surface-variant text-sm">
          © 2024 G L Paper Trading Trading Enterprise. All rights reserved. ISO 9001:2015 Certified.
        </span>
        <div className="flex gap-8">
          <a
            href="https://aiprgmr.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm"
          >
            Designed and Developed by <span className="font-bold text-primary hover:underline">AI PRGMR</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
