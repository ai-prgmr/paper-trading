"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/paper-trading/hero-3.png",
      title: "Central India's Premier Partner for Sustainable Paper & Packaging",
      subtext: "We bridge the gap between global eco-friendly paper mills and local manufacturing. Get reliable access to FSC-certified, plastic-substitute paper boards with agile, zero-downtime logistics.",
      badge: "ISO 9001:2015 Certified Enterprise"
    },
    {
      image: "/paper-trading/hero-4.png",
      title: "Sustainable Today. Responsible Tomorrow.",
      subtext: "Connecting local manufacturing with international green standards. We supply 100% recyclable kraft paper and duplex boards for circular-economy packaging solutions.",
      badge: "FSC & PEFC Sourced Inventory"
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000) // Change slides every 7 seconds
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-[650px] md:h-[750px] lg:h-[870px] w-full overflow-hidden bg-black">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            />
            {/* Soft Green Tint Overlay and Readability Gradients */}
            <div className="absolute inset-0 bg-[#064E3B]/45 mix-blend-multiply z-10" />
            {/* <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent z-10" /> */}
            {/* <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10" /> */}
          </div>
        ))}
      </div>

      {/* Dynamic Content Overlay on Top */}
      <div className="relative z-20 h-full max-w-container-max mx-auto flex flex-col justify-center px-margin-mobile md:px-margin-desktop text-white">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${index === currentSlide
                ? "block opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-4"
                }`}
            >
              <span className="font-label-sm text-label-sm uppercase tracking-widest bg-[#064E3B] text-white px-3 py-1 w-fit mb-6 rounded inline-block">
                {slide.badge}
              </span>
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight max-w-2xl drop-shadow-sm">
                {slide.title}
              </h1>
              <p className="font-body-lg text-base md:text-lg lg:text-xl max-w-2xl mb-10 opacity-90 leading-relaxed text-slate-100">
                {slide.subtext}
              </p>
            </div>
          ))}

          {/* Persistent CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/kraft-paper-solutions">
              <button className="bg-white text-[#064E3B] hover:bg-white/95 px-8 py-4 rounded font-semibold text-lg flex items-center gap-2 transition-all group cursor-pointer shadow-lg">
                Explore Sustainable Inventory
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </Link>
            <a href="#sustainability-metrics">
              <button className="border border-white/40 hover:bg-white/10 px-8 py-4 rounded font-semibold text-lg transition-all backdrop-blur-sm cursor-pointer text-white">
                View Supply Chain Metrics
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Controls (Indicators) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
        {/* Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
