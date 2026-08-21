"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface ShowcaseService {
  id: number
  title: string
  slug: string
  image: string
  badge: string
  desc: string
}

export const showcaseServicesList: ShowcaseService[] = [
  {
    id: 1,
    title: "Balcony Safety Nets",
    slug: "invisible-grill-balcony-safety-nets",
    image: "/Invisible Grill Balcony Safety Nets 1.jpg",
    badge: "5-Yr Warranty",
    desc: "UV-stabilized virgin HDPE safety netting built to prevent accidental falls from apartment balconies while maintaining 100% fresh air.",
  },
  {
    id: 2,
    title: "Invisible Grills for Balconies",
    slug: "invisible-grill-balcony-safety-nets",
    image: "/Invisible Grill Balcony Safety Nets.jpg",
    badge: "316 Marine Grade",
    desc: "High-tensile stainless steel cable grills tested for 400kg+ impact loads, offering unblocked panoramic views with maximum safety.",
  },
  {
    id: 3,
    title: "Child Safety Grills",
    slug: "invisible-childrens-safety",
    image: "/invisible childrens safety.jpg",
    badge: "Child-Proof",
    desc: "Specialized anti-climb, high-impact safety grill systems engineered to protect toddlers and children near balcony ledges.",
  },
  {
    id: 4,
    title: "Pigeon Nets",
    slug: "invisible-pigeon-net",
    image: "/Invisible Pigeon Net.jpg",
    badge: "Humane Barrier",
    desc: "Translucent, long-lasting HDPE netting that completely keeps pigeons, doves, and nesting away without blocking sunlight or breeze.",
  },
  {
    id: 5,
    title: "Duct Area Nets",
    slug: "duct-area-nets",
    image: "/Duct Area Nets.jpg",
    badge: "Heavy Duty",
    desc: "Heavy-duty safety nets for high-rise ventilation shafts and building ducts, preventing debris accumulation and accidental falls.",
  },
  {
    id: 6,
    title: "Invisible Nets Grills",
    slug: "invisible-grill-balcony-safety-nets",
    image: "/Invisible Grill Balcony Safety Nets 1.jpg",
    badge: "Modern Aesthetics",
    desc: "Innovative hybrid transparent netting and sleek structural cabling providing luxury architectural elevation and fall security.",
  },
  {
    id: 7,
    title: "Staircase Safety Nets",
    slug: "staircase-invisible-grills",
    image: "/safety nets for the Staircase.jpg",
    badge: "Floor-to-Ceiling",
    desc: "Floor-to-ceiling vertical net barriers and invisible grills to protect open-well staircases, voids, and mezzanine duplex levels.",
  },
  {
    id: 8,
    title: "Monkey Safety Grills",
    slug: "monkey-safety-nets",
    image: "/monkey safety nets.jpg",
    badge: "Bite-Proof",
    desc: "Extra-reinforced bite-proof steel-core netting and grills built to resist heavy primate weight, jumping loads, and aggressive tampering.",
  },
  {
    id: 9,
    title: "Cricket Practice Nets",
    slug: "sports-practice-nets",
    image: "/Sports Practice Nets.jpg",
    badge: "High Impact",
    desc: "Heavy-duty impact-absorbing cricket practice cages and sports containment nets for terraces, backyards, academies, and clubs.",
  },
  {
    id: 10,
    title: "Bird Spikes",
    slug: "anti-bird-nets",
    image: "/Bird Spikes.jpg",
    badge: "Rust-Proof",
    desc: "100% humane, rust-proof polycarbonate and stainless steel bird spikes for window ledges, AC outdoor units, and parapet walls.",
  },
]

export function ServiceShowcaseSection() {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-16 bg-slate-50 border-t border-b border-slate-200 overflow-hidden">
      {/* Subtle Background Accent Pattern for Section */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container-large relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-wider mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Complete Safety Solutions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            Our Specialized Safety Services
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium mt-2 max-w-2xl mx-auto leading-relaxed">
            High-tensile balcony safety netting, 316 marine-grade invisible grills, child safety barriers, and humane bird control engineered for South Indian homes.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-[1.5px] w-12 bg-blue-600 rounded-full" />
            <div className="w-2 h-2 rotate-45 bg-blue-700" />
            <div className="h-[1.5px] w-12 bg-blue-600 rounded-full" />
          </div>
        </div>

        {/* 10-Service Cards Grid: 2 cols on mobile, 3 cols on tablet, 5 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4">
          {showcaseServicesList.map((service) => {
            const targetHref = `/services/${service.slug}`

            return (
              <div
                key={service.id}
                className="group relative bg-white border-2 border-slate-200 hover:border-blue-600 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                style={{
                  /* Pure white background textured with ancient Indian architectural jaali & structural line stripes */
                  backgroundColor: "#ffffff",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%230f172a' stroke-width='0.6' stroke-opacity='0.06'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z'/%3E%3Cpath d='M0 0 L60 60 M60 0 L0 60'/%3E%3Cpath d='M15 15 L45 15 L45 45 L15 45 Z' stroke-dasharray='3 2'/%3E%3Ccircle cx='30' cy='30' r='6' stroke='%232563eb' stroke-opacity='0.05'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(to bottom, %23ffffff, %23fafafa)`,
                  backgroundRepeat: "repeat",
                }}
              >
                {/* Ancient Indian structural line texture top accent band */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-900 opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Top Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-2 left-2 inline-flex items-center gap-1 bg-blue-900/90 backdrop-blur-xs text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                    <ShieldCheck className="w-3 h-3 text-yellow-400" />
                    <span>{service.badge}</span>
                  </div>
                </div>

                {/* Card Body with Ancient Structural Texture on Pure White */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-3 relative z-10">
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-950 leading-snug group-hover:text-blue-700 transition-colors mb-1.5 line-clamp-1">
                      <Link href={targetHref} className="hover:underline">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 font-medium line-clamp-3 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Actions: Learn More & Direct Call Button */}
                  <div className="pt-2.5 border-t border-slate-200/80 flex items-center gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      asChild
                      className="flex-1 text-xs font-black h-8 shadow-2xs"
                    >
                      <Link href={targetHref} className="flex items-center justify-center gap-1">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>

                    <a
                      href="tel:+917200092393"
                      aria-label={`Call for ${service.title}`}
                      className="w-8 h-8 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white flex items-center justify-center shadow-xs transition-transform shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5 fill-white" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
