"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Phone, MessageCircle, ShieldCheck, ArrowRight, Award, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface HeroSlide {
  image: string
  title: string
  subtitle: string
  highlight: string
  link: string
}

const slides: HeroSlide[] = [
  {
    image: "/Invisible Grill Balcony Safety Nets.jpg",
    title: "Heavy-Duty Balcony Safety Nets",
    subtitle: "100% Fall Protection for Apartments & High-Rises. Tested up to 400kg+ impact loads.",
    highlight: "5-Year Guarantee • ISO Certified Material",
    link: "/services/invisible-grill-balcony-safety-nets",
  },
  {
    image: "/Invisible Pigeon Net.jpg",
    title: "Anti-Pigeon & Bird Safety Nets",
    subtitle: "Humane, Near-Invisible Balcony Nets to Keep Pigeons Out Without Blocking Air or Sunlight.",
    highlight: "UV-Stabilized HDPE • 100% Rust-Proof",
    link: "/services/invisible-pigeon-net",
  },
  {
    image: "/staircase invisible grills.jpg",
    title: "316 Marine-Grade Invisible Grills",
    subtitle: "Uncompromising High-Rise Balcony Safety with Crystal-Clear Panoramic Outdoor Views.",
    highlight: "316 Stainless Steel • Anti-Rust Technology",
    link: "/services/invisible-grill-balcony-safety-nets",
  },
  {
    image: "/Children's Safety Nets.jpg",
    title: "Child Safety Balcony Nets",
    subtitle: "Engineered specifically to keep active toddlers and children secure from window & balcony falls.",
    highlight: "Anti-Climb Design • Zero Gaps Protection",
    link: "/services/invisible-childrens-safety",
  },
  {
    image: "/Pets Safety Nets.jpg",
    title: "Bite-Proof Pet Safety Nets",
    subtitle: "Heavy-duty claw and bite-resistant netting for cats and dogs on balconies & open terraces.",
    highlight: "Tear-Resistant • Animal-Safe Mesh",
    link: "/services/pets-safety-nets",
  },
  {
    image: "/Sports Practice Nets.jpg",
    title: "Sports & Cricket Practice Nets",
    subtitle: "Professional high-impact practice cages for terraces, academies, schools, and sports clubs.",
    highlight: "High Impact Absorption • Custom Dimensions",
    link: "/services/sports-practice-nets",
  },
  {
    image: "/Duct Area Nets.jpg",
    title: "High-Rise Building Duct Area Nets",
    subtitle: "Complete horizontal and vertical shaft coverage by certified industrial rope technicians.",
    highlight: "Pest Exclusion • Fall Debris Protection",
    link: "/services/duct-area-nets",
  },
  {
    image: "/Cloth Hanger Services.jpg",
    title: "Ceiling Cloth Drying Systems",
    subtitle: "Smart pulley-operated stainless steel ceiling hangers that maximize balcony floor space.",
    highlight: "Jindal Grade SS • Heavy Load Pulley System",
    link: "/services/cloth-hanger-services",
  },
  {
    image: "/Mosquito Nets.jpg",
    title: "Balcony & Window Mosquito Screens",
    subtitle: "High-density mesh barriers providing complete insect protection with optimum ventilation.",
    highlight: "Durable Fiber Mesh • Zero Gaps",
    link: "/services/invisible-grill-balcony-safety-nets",
  },
  {
    image: "/Industrial Safety Nets 1.jpg",
    title: "Industrial & Construction Fall Arrest Nets",
    subtitle: "Heavy-duty perimeter fall protection for commercial construction and high-rise sites.",
    highlight: "ISI Certified • Heavy Load Tested",
    link: "/services/duct-area-nets",
  },
  {
    image: "/monkey safety nets.jpg",
    title: "Primate-Grade Monkey Safety Nets",
    subtitle: "Reinforced high-tensile wire barriers engineered to prevent aggressive animal intrusions.",
    highlight: "High-Tensile Wire • Anti-Bite",
    link: "/services/invisible-pigeon-net",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [contentVisible, setContentVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const SLIDE_DURATION = 4500 // 4.5s per slide
  const FADE_IN_DELAY = 350   // 350ms after slide starts, text fades in
  const FADE_OUT_LEAD = 450   // 450ms before slide switches, text fades out

  const nextSlide = useCallback(() => {
    setContentVisible(false)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setContentVisible(false)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return

    // 1. Trigger text fade-in after new image loads
    const inTimer = setTimeout(() => {
      setContentVisible(true)
    }, FADE_IN_DELAY)

    // 2. Trigger text fade-out right before next image transition
    const outTimer = setTimeout(() => {
      setContentVisible(false)
    }, SLIDE_DURATION - FADE_OUT_LEAD)

    // 3. Advance to the next image infinitely
    const slideTimer = setTimeout(() => {
      setContentVisible(false)
      setCurrent((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION)

    return () => {
      clearTimeout(inTimer)
      clearTimeout(outTimer)
      clearTimeout(slideTimer)
    }
  }, [current, isPaused])

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-900 border-b-2 border-slate-900 m-0 p-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Banner Strip (Desktop Only) */}
      <div className="hidden lg:flex bg-blue-700 text-white text-xs font-black uppercase tracking-wider py-1.5 px-4 text-center border-b border-blue-600 items-center justify-center gap-2">
        <Award className="w-3.5 h-3.5 shrink-0 text-yellow-300" />
        <span>Chennai • Pondicherry • Trichy | Free On-Site Inspection & Same-Day Quotes</span>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE HERO TREATMENT (Automatic Infinite Scroll with Synchronized Fades)  */}
      {/* ========================================================================= */}
      <div className="lg:hidden relative h-[300px] sm:h-[340px] w-full overflow-hidden m-0 p-0">
        {slides.map((slide, index) => {
          const isActive = index === current
          return (
            <div
              key={`mobile-${index}`}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0 pointer-events-none"
              }`}
            >
              {/* Background Slide Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                quality={85}
                className="object-cover object-center"
              />

              {/* Dark Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-slate-950/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-black/25" />
            </div>
          )
        })}

        {/* Floating Pill CTA Bar Overlaid Mid-Image (Synchronized Fade In / Fade Out) */}
        <a
          href="tel:+917200092393"
          className={`absolute top-1/2 -translate-y-1/2 left-3.5 z-20 inline-flex items-center gap-2 bg-blue-950/95 hover:bg-blue-900 active:scale-95 border border-blue-500/60 text-white font-black text-xs sm:text-sm py-2 px-3.5 rounded-full shadow-2xl backdrop-blur-xs transition-all duration-500 transform ${
            contentVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 -translate-x-4 scale-95 pointer-events-none"
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
            <Phone className="w-3 h-3 text-white fill-white" />
          </div>
          <span>+91 72000 92393</span>
        </a>

        {/* Short Label Text Overlaid Bottom-Left (Synchronized Fade In / Fade Out) */}
        <div
          className={`absolute bottom-3.5 left-3.5 z-20 max-w-[62%] bg-slate-950/90 backdrop-blur-xs border border-slate-700/80 px-2.5 py-1 rounded-[3px] shadow-lg transition-all duration-500 transform ${
            contentVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-3 scale-95 pointer-events-none"
          }`}
        >
          <span className="text-[11px] font-black text-white line-clamp-1 tracking-tight">
            {slides[current].title}
          </span>
        </div>

        {/* Floating Circular Action Stack (Fixed to Right Edge of Hero Container) */}
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2.5">
          {/* Red Circle - Phone Call */}
          <a
            href="tel:+917200092393"
            aria-label="Call John Enterprises"
            className="w-10 h-10 sm:w-11 sm:h-11 bg-red-600 hover:bg-red-700 active:scale-90 text-white rounded-full flex items-center justify-center shadow-lg transition-transform"
          >
            <Phone className="w-4.5 h-4.5 fill-white" />
          </a>

          {/* Green Circle - WhatsApp */}
          <a
            href="https://wa.me/917200092393"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp John Enterprises"
            className="w-10 h-10 sm:w-11 sm:h-11 bg-[#25D366] hover:bg-[#20ba5a] active:scale-90 text-white rounded-full flex items-center justify-center shadow-lg transition-transform"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-white" />
          </a>

          {/* Blue Circle - Email */}
          <a
            href="mailto:info@johnbalconysafetynets.com"
            aria-label="Email John Enterprises"
            className="w-10 h-10 sm:w-11 sm:h-11 bg-blue-600 hover:bg-blue-700 active:scale-90 text-white rounded-full flex items-center justify-center shadow-lg transition-transform"
          >
            <Mail className="w-4.5 h-4.5 text-white" />
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP HERO TREATMENT (Preserved as-is for lg: and above)                 */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative h-[500px] xl:h-[540px] w-full">
        {slides.map((slide, index) => {
          const isActive = index === current
          return (
            <div
              key={`desktop-${index}`}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Slide Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                quality={85}
                className="object-cover object-center"
              />

              {/* Dark High-Contrast Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Slide Content Box */}
              <div className="container-large relative z-20 h-full flex flex-col justify-center py-8">
                <div className="max-w-2xl bg-slate-950/85 backdrop-blur-sm p-7 md:p-8 border-2 border-slate-700 shadow-2xl rounded-[3px]">
                  {/* Highlight Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 rounded-[2px]">
                    <ShieldCheck className="w-4 h-4 text-slate-950" />
                    {slide.highlight}
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-sm md:text-base text-slate-200 font-medium mb-6 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="call" size="lg" asChild className="text-sm shadow-lg">
                      <a href="tel:+917200092393" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 animate-pulse" />
                        <span>Call: +91 72000 92393</span>
                      </a>
                    </Button>

                    <Button variant="whatsapp" size="lg" asChild className="text-sm shadow-lg">
                      <a
                        href="https://wa.me/917200092393"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp Quote</span>
                      </a>
                    </Button>

                    <Button variant="white" size="lg" asChild className="text-sm shadow-lg">
                      <Link href="/contact" className="flex items-center gap-1.5">
                        <span>Free Site Visit</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-slate-950/80 hover:bg-blue-600 text-white border-2 border-slate-600 hover:border-blue-500 rounded-[3px] flex items-center justify-center transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-slate-950/80 hover:bg-blue-600 text-white border-2 border-slate-600 hover:border-blue-500 rounded-[3px] flex items-center justify-center transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot Indicators & Slide Count Bar */}
        <div className="absolute bottom-3 left-0 right-0 z-30 flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setContentVisible(false)
                setCurrent(idx)
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 transition-all rounded-[1px] ${
                idx === current
                  ? "w-8 bg-yellow-400 border border-yellow-500"
                  : "w-2.5 bg-white/60 hover:bg-white border border-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
