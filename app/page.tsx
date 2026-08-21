import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { services, cities } from "@/lib/data"
import { ShieldCheck, Zap, Users, ArrowRight, Phone, MessageCircle, MapPin, CheckCircle2, Award, Star, HelpCircle, Sparkles } from "lucide-react"
import { HeroSlider } from "@/components/ui/hero-slider"
import { ServiceCard } from "@/components/ui/service-card"
import { MobileEnquiryForm } from "@/components/ui/mobile-enquiry-form"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { ServiceShowcaseSection } from "@/components/ui/service-showcase-section"

export default function Home() {
  const trustFeatures = [
    {
      title: "316 Marine-Grade Steel",
      desc: "Rust-proof high-tensile stainless steel cables tested up to 400kg+ impact loads. Unbreakable safety for high-rise balconies.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      badge: "Heavy Duty",
    },
    {
      title: "ISO-Certified Impact Nets",
      desc: "UV-stabilized HDPE netting built to withstand extreme sun, salty sea breeze, and heavy impacts with 5 years guarantee.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      badge: "5-Yr Warranty",
    },
    {
      title: "10+ Years Expert Installation",
      desc: "Certified safety engineers available across Chennai, Pondicherry, and Trichy for free same-day site measurement & quick installation.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      badge: "Same-Day Visit",
    },
  ]

  const stats = [
    { val: "500+", label: "Verified Projects", sub: "Residential & Commercial" },
    { val: "10+", label: "Service Years", sub: "Trusted Since 2014" },
    { val: "5 Years", label: "Product Warranty", sub: "100% Replacement Guarantee" },
    { val: "2 Hours", label: "Response Time", sub: "Free On-Site Inspection" },
  ]

  // GEO & AEO Search Engine & AI Questions (Factual Q&A for ChatGPT, Gemini, Perplexity)
  const homeFaqs = [
    {
      question: "What is the installation price of balcony safety nets in Chennai, Pondicherry, and Trichy?",
      answer: "Balcony safety net installations by John Enterprises start from ₹18 to ₹28 per sq.ft depending on mesh gauge (0.8mm to 2.5mm UV-stabilized HDPE). 316 Marine Grade Invisible Grills range between ₹110 and ₹160 per sq.ft including aluminum track framing, Hilti anchor fasteners, and installation with a 5-year written warranty.",
      tag: "Pricing & Cost Guide"
    },
    {
      question: "Can 316 Marine-Grade Invisible Grills withstand high-rise balcony fall impacts?",
      answer: "Yes. Our 316 Marine Grade stainless steel cables are tested to support 400kg+ tensile impact loads. Spaced 2 to 3 inches apart, they provide 100% unbreakable fall protection for children, toddlers, and pets while preserving 99% clear outdoor views.",
      tag: "High-Rise Fall Safety"
    },
    {
      question: "Are balcony safety nets and invisible grills permitted by apartment associations (HOAs)?",
      answer: "Yes, 100%. While traditional bulky iron grills are frequently restricted by gated community HOAs because they alter building elevations, our sleek 316 invisible grills and transparent nets preserve the building's aesthetic facade while complying with all fire escape and safety norms.",
      tag: "HOA & Apartment Compliance"
    },
    {
      question: "How long do safety nets and invisible grills last in coastal humid weather?",
      answer: "In coastal environments like Chennai and Pondicherry, salty air causes ordinary iron grills to rust within 1-2 years. John Enterprises uses 100% rust-proof 316 Marine Grade steel cables and UV-treated virgin HDPE netting that withstand extreme sun and sea breeze for 8 to 12+ years without degradation.",
      tag: "Durability & Rust Resistance"
    },
    {
      question: "Do you offer free on-site measurement, same-day visits, and a written warranty?",
      answer: "Yes. John Enterprises provides free same-day site audits, precision laser measurements, and transparent written estimates across all areas of Chennai, Pondicherry, and Trichy. Every installation includes a 5-Year Replacement Warranty Certificate with zero hidden travel charges.",
      tag: "Warranty & Same-Day Service"
    },
    {
      question: "What is the best netting solution to stop pigeons without blocking balcony airflow?",
      answer: "Our translucent UV-stabilized 1-inch to 1.25-inch pigeon safety nets effectively exclude pigeons, doves, and bats without reducing sunlight or balcony ventilation. Combined with polycarbonate bird spikes on AC outdoor units, it provides permanent, humane bird control.",
      tag: "Anti-Pigeon Protection"
    }
  ]

  // Technical Comparison Matrix between Safety Solutions
  const comparisonMatrix = [
    {
      feature: "Core Material",
      invisibleGrills: "316 Marine Grade SS (2.5mm/3mm)",
      hdpeNets: "UV-Stabilized Virgin HDPE",
      ironGrills: "Mild Steel / Cast Iron Bars",
    },
    {
      feature: "Impact Load Capacity",
      invisibleGrills: "400kg+ Impact Force",
      hdpeNets: "150kg–250kg Tensile Load",
      ironGrills: "High (Rigid Bars)",
    },
    {
      feature: "View Obstruction %",
      invisibleGrills: "< 1% (Crystal Clear Panorama)",
      hdpeNets: "< 5% (Translucent Mesh)",
      ironGrills: "35% - 50% (Heavy Cage Effect)",
    },
    {
      feature: "Coastal Rust Resistance",
      invisibleGrills: "100% Anti-Rust (316 Grade)",
      hdpeNets: "100% Weatherproof (UV-Treated)",
      ironGrills: "Poor (Rusted in 1–2 Years)",
    },
    {
      feature: "Child & Pet Safety Grade",
      invisibleGrills: "Grade A+ (Bite & Fall Proof)",
      hdpeNets: "Grade A (Tear-Resistant & Safe)",
      ironGrills: "Grade B (Gap hazard if wide)",
    },
    {
      feature: "Apartment HOA Approval",
      invisibleGrills: "100% Approved (Modern Elevation)",
      hdpeNets: "100% Approved (Discreet Mesh)",
      ironGrills: "Often Banned in High-Rises",
    },
    {
      feature: "Written Warranty",
      invisibleGrills: "5 Years Replacement Warranty",
      hdpeNets: "5 Years Written Guarantee",
      ironGrills: "No Manufacturer Warranty",
    }
  ]

  // Verified Customer Reviews for Social Proof
  const homeReviews = [
    {
      name: "Rajesh Kumar",
      area: "Anna Nagar",
      city: "Chennai",
      rating: 5,
      service: "Anti-Pigeon Balcony Nets",
      text: "Excellent pigeon net installation in our Anna Nagar flat. The net is completely invisible from the street and keeps our balcony 100% clean from bird droppings.",
      date: "May 2026",
    },
    {
      name: "Priya Sharma",
      area: "White Town",
      city: "Pondicherry",
      rating: 5,
      service: "316 Invisible Balcony Grills",
      text: "Best invisible grills installation. The team was prompt, professional, and courteous. It feels extraordinarily secure for my two kids while looking ultra-luxurious.",
      date: "April 2026",
    },
    {
      name: "K. Vignesh",
      area: "Thillai Nagar",
      city: "Trichy",
      rating: 5,
      service: "Child Safety Balcony Nets",
      text: "Superb service! Installed balcony safety nets for our 4th floor apartment in Trichy. High-grade material, perfect tensioning, and reasonable square foot pricing.",
      date: "May 2026",
    },
    {
      name: "Dr. Ananya Sen",
      area: "OMR",
      city: "Chennai",
      rating: 5,
      service: "Bite-Proof Pet Safety Nets",
      text: "Installed cat safety nets across two balconies in our high-rise apartment on OMR. Thicker bite-proof netting gives total peace of mind when cats are roaming.",
      date: "March 2026",
    }
  ]

  // Services offered comma-separated list for Section 8
  const servicesListString = services.map((s) => s.title).join(", ")

  // Structured Schema Markup for FAQPage + LocalBusiness + AggregateRating
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://johnbalconysafetynets.com/#organization",
        "name": "John Enterprises",
        "url": "https://johnbalconysafetynets.com",
        "logo": "https://johnbalconysafetynets.com/logo.png",
        "image": "https://johnbalconysafetynets.com/Invisible%20Grill%20Balcony%20Safety%20Nets.jpg",
        "telephone": "+91-72000-92393",
        "email": "johnsafetynets7@gmail.com",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "520",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Pondicherry" },
          { "@type": "City", "name": "Trichy" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://johnbalconysafetynets.com/#faq",
        "mainEntity": homeFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white pt-0 m-0">
      {/* Structured Schema.org Injection for AEO / GEO / Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* 1. Hero Section (Unified component with responsive mobile / desktop viewports) */}
      <section className="w-full m-0 p-0">
        <HeroSlider />
      </section>

      {/* ========================================================================= */}
      {/* MOBILE-ONLY HOMEPAGE SECTIONS (Sky Safety Nets style: <lg: breakpoints)  */}
      {/* ========================================================================= */}
      <div className="block lg:hidden">
        {/* 5. "Enquiry Us" Section (Purple/Violet Gradient) */}
        <section className="w-full bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 px-4 py-6 text-white shadow-inner">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
              Enquiry Us
            </h2>
            <MobileEnquiryForm />
          </div>
        </section>

        {/* 6. Services Section Heading with Centered Trust Badge */}
        <section className="pt-6 pb-2 px-4 bg-slate-50">
          <div className="text-center max-w-sm mx-auto">
            <h2 className="text-lg sm:text-xl font-black text-slate-950 leading-tight">
              All Types of Safety Nets &amp;<br />Invisible Grills Services
            </h2>
            <div className="flex items-center justify-center gap-2.5 my-3">
              <div className="h-[1px] bg-slate-300 flex-1 max-w-[60px]" />
              <div className="inline-flex items-center gap-1 bg-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-yellow-500 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                <span>24/7 Fast Service</span>
              </div>
              <div className="h-[1px] bg-slate-300 flex-1 max-w-[60px]" />
            </div>
          </div>
        </section>

        {/* 7. Mobile Services 2-Column Grid (Purple bordered rounded cards with green call buttons) */}
        <section className="px-3 pb-8 bg-slate-50">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-lg mx-auto">
            {services.map((service, i) => (
              <div
                key={`mobile-svc-${i}`}
                className="bg-white border-2 border-purple-500 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
              >
                {/* Top Image */}
                <Link href={`/services/${service.slug}`} className="block relative aspect-[4/3] w-full bg-slate-100 overflow-hidden border-b border-purple-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </Link>

                {/* Caption & Call Button */}
                <div className="p-2.5 flex flex-col items-center justify-between flex-1 gap-2">
                  <Link href={`/services/${service.slug}`} className="block w-full">
                    <h3 className="text-xs font-black text-slate-900 text-center leading-snug line-clamp-2 min-h-[30px] flex items-center justify-center hover:text-blue-700">
                      {service.title}
                    </h3>
                  </Link>

                  {/* Green Circular Call Button */}
                  <a
                    href="tel:+917200092393"
                    aria-label={`Call for ${service.title}`}
                    className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white flex items-center justify-center shadow-md transition-transform"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* NEW SECTION: 10-Service Cards Showcase with Ancient Indian Line Texture */}
        <ServiceShowcaseSection />

        {/* NEW MOBILE SECTION: Customer Reviews & Star Ratings */}
        <section className="px-4 py-8 bg-white border-t border-slate-200">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-1 bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>4.9 / 5.0 Star Rated</span>
              </div>
              <h2 className="text-xl font-black text-slate-950 tracking-tight">
                Verified Customer Reviews
              </h2>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Real feedback from apartment and villa owners in Chennai, Pondicherry &amp; Trichy.
              </p>
            </div>

            <div className="space-y-3">
              {homeReviews.slice(0, 3).map((rev, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 shadow-2xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                      Verified Install
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium italic mb-2">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200 pt-1.5 font-bold">
                    <span className="text-slate-900">{rev.name} ({rev.area})</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW MOBILE SECTION: AEO & GEO FAQ Knowledge Hub */}
        <section className="px-4 py-8 bg-slate-50 border-t border-slate-200">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-1 bg-blue-100 border border-blue-200 text-blue-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5">
                <HelpCircle className="w-3 h-3" />
                <span>AI &amp; Buyer Knowledge Hub</span>
              </div>
              <h2 className="text-xl font-black text-slate-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Authoritative answers on pricing, tensile load, HOA approvals &amp; warranty.
              </p>
            </div>

            <FAQAccordion items={homeFaqs} />
          </div>
        </section>

        {/* 8. "Welcome to John Enterprises" Section (Soft Pink Gradient) */}
        <section className="w-full bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100/70 px-4 py-8 border-t border-pink-200">
          <div className="max-w-md mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-blue-700 block">
              Professional Services
            </span>

            <h2 className="text-2xl font-black text-slate-950 tracking-tight leading-tight">
              Welcome to John Enterprises
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              John Enterprises is South India&apos;s premier certified provider of high-tensile balcony safety nets, anti-pigeon netting barriers, 316 marine-grade invisible grills, and ceiling cloth drying systems. With over 10 years of trusted installation experience across Chennai, Pondicherry, and Trichy, we deliver flawless fall protection backed by a 5-year written warranty.
            </p>

            <div className="p-3 bg-white/80 border border-pink-200 rounded-xl">
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                <strong className="text-slate-900">Our Complete Solutions:</strong> {servicesListString}.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 active:scale-95 text-white font-black text-xs sm:text-sm py-2.5 px-6 rounded-full shadow-md transition-all"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Mobile City Selector Quick Links */}
        <section className="px-4 py-6 bg-slate-100 border-t border-slate-200">
          <div className="max-w-md mx-auto">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-700" />
              Service Areas
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {cities.map((city) => (
                <Link
                  key={`mob-city-${city.slug}`}
                  href={`/location/${city.slug}`}
                  className="bg-white border border-slate-300 hover:border-blue-600 rounded-[3px] p-2 text-center shadow-2xs block"
                >
                  <div className="text-xs font-black text-slate-900">{city.name}</div>
                  <div className="text-[10px] text-blue-700 font-bold mt-0.5">Explore &rarr;</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP-ONLY HOMEPAGE SECTIONS (Preserved dense boxy layout: lg: & up)    */}
      {/* ========================================================================= */}
      <div className="hidden lg:block">
        {/* 2. Stats Bar: Tight Bordered 4-Box Strip */}
        <section className="bg-slate-100 border-b border-slate-300 py-4">
          <div className="container-large">
            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={`desktop-stat-${i}`}
                  className="bg-white border border-slate-300 rounded-[3px] p-4 text-center shadow-xs flex flex-col justify-center items-center"
                >
                  <div className="text-3xl font-black text-blue-700 tracking-tight leading-none mb-1">
                    {stat.val}
                  </div>
                  <div className="text-sm font-black text-slate-900 uppercase tracking-tight">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Quick Call-To-Action Ribbon */}
        <section className="bg-slate-900 text-white py-3 border-b-2 border-slate-900">
          <div className="container-large flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span>Need Immediate Balcony Netting or Invisible Grill Quote?</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="call" size="sm" asChild className="h-8 text-xs font-black">
                <a href="tel:+917200092393" className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 72000 92393</span>
                </a>
              </Button>
              <Button variant="whatsapp" size="sm" asChild className="h-8 text-xs font-black">
                <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 4. Services Grid: "Our Services" (Dense 4-Column Boxy Cards) */}
        <section className="section-compact bg-slate-50 border-b border-slate-200">
          <div className="container-large">
            <div className="flex items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-700 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  Our Core Solutions
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Our Services
                </h2>
                <p className="text-sm text-slate-600 font-medium mt-1">
                  Professional safety netting and invisible grill solutions engineered for homes, apartments &amp; commercial sites.
                </p>
              </div>
              <Button variant="outline" size="sm" asChild className="shrink-0 h-9 font-black uppercase tracking-wider text-xs">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-1 w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {services.map((service, i) => (
                <ServiceCard key={`desktop-svc-${i}`} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* NEW DESKTOP SECTION: Technical Comparison Matrix (AI Search / Decision Table) */}
        <section className="section-compact bg-white border-b border-slate-200">
          <div className="container-large">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-700 mb-1">
                <Sparkles className="w-4 h-4" />
                Engineered Material Analysis
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Technical Safety &amp; Material Comparison Matrix
              </h2>
              <p className="text-sm text-slate-600 font-medium mt-1">
                Direct comparative data on load capacities, coastal corrosion resistance, and building HOA compliance.
              </p>
            </div>

            <div className="border-2 border-slate-300 rounded-[3px] overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3.5 font-black uppercase tracking-wider border-r border-slate-700 w-1/4">
                      Safety Parameter
                    </th>
                    <th className="p-3.5 font-black uppercase tracking-wider bg-blue-700 text-white border-r border-blue-600 w-1/4">
                      316 Invisible Grills
                    </th>
                    <th className="p-3.5 font-black uppercase tracking-wider border-r border-slate-700 w-1/4">
                      HDPE Balcony Nets
                    </th>
                    <th className="p-3.5 font-black uppercase tracking-wider w-1/4">
                      Traditional Iron Grills
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200 bg-slate-100/50">
                        {row.feature}
                      </td>
                      <td className="p-3 font-black text-blue-900 border-r border-slate-200 bg-blue-50/30">
                        {row.invisibleGrills}
                      </td>
                      <td className="p-3 font-medium text-slate-700 border-r border-slate-200">
                        {row.hdpeNets}
                      </td>
                      <td className="p-3 font-medium text-slate-500">
                        {row.ironGrills}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* NEW SECTION: 10-Service Cards Showcase with Ancient Indian Line Texture */}
        <ServiceShowcaseSection />

        {/* NEW DESKTOP SECTION: Verified Customer Reviews & Social Proof */}
        <section className="section-compact bg-slate-50 border-b border-slate-200">
          <div className="container-large">
            <div className="flex items-end justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-700 mb-1">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  Verified Customer Feedback
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Trusted by 500+ Homes Across South India
                </h2>
                <p className="text-sm text-slate-600 font-medium mt-1">
                  4.9 / 5.0 Star Rating verified across Chennai, Pondicherry, and Trichy residential complexes.
                </p>
              </div>

              <div className="bg-white border-2 border-amber-300 rounded-[3px] px-4 py-2 flex items-center gap-3 shadow-xs">
                <div className="text-2xl font-black text-slate-900 leading-none">4.9 ★</div>
                <div className="text-xs font-bold text-slate-600 border-l border-slate-200 pl-3">
                  <div>Google Verified</div>
                  <div className="text-green-700">500+ Happy Reviews</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {homeReviews.map((rev, idx) => (
                <div key={idx} className="bg-white border-2 border-slate-200 hover:border-blue-600 rounded-[3px] p-4 flex flex-col justify-between shadow-xs transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-green-50 text-green-800 border border-green-200 rounded-[2px]">
                        Verified
                      </span>
                    </div>

                    <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1.5">
                      {rev.service}
                    </div>

                    <p className="text-xs text-slate-700 font-medium leading-relaxed italic mb-4">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-950">{rev.name}</span>
                    <span className="text-slate-500">{rev.area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW DESKTOP SECTION: AEO & GEO FAQ Knowledge Hub (Accordion) */}
        <section className="section-compact bg-white border-b border-slate-200">
          <div className="container-large">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-700 mb-1">
                <HelpCircle className="w-4 h-4" />
                Search &amp; AI Knowledge Hub
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions &amp; Technical Guide
              </h2>
              <p className="text-sm text-slate-600 font-medium mt-1">
                Direct answers on material ratings, pricing per sq.ft, high-rise building regulations, and 5-year warranties.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <FAQAccordion items={homeFaqs} />
            </div>
          </div>
        </section>

        {/* 5. Trust Section: "Why Choose John Enterprises" (Bordered Box Row) */}
        <section className="section-compact bg-slate-50 border-b border-slate-200">
          <div className="container-large">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-700 mb-1">
                <Award className="w-4 h-4" />
                Direct Quality Promise
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                The Anatomy of True Safety
              </h2>
              <p className="text-sm text-slate-600 font-medium mt-1">
                Engineered with clinical precision using ISO-certified materials and expert installation protocols.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {trustFeatures.map((feat, i) => (
                <div
                  key={`desktop-trust-${i}`}
                  className="bg-white border-2 border-slate-200 hover:border-blue-600 rounded-[3px] p-5 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-[3px] bg-blue-100 flex items-center justify-center text-blue-700">
                        {feat.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-blue-600 text-white rounded-[2px]">
                        {feat.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center text-xs font-bold text-blue-700 gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    <span>100% Quality Inspected</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. City Selector Section: Boxy City Cards */}
        <section className="section-compact bg-white border-b border-slate-200">
          <div className="container-large">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-700 mb-1">
                <MapPin className="w-4 h-4" />
                Service Areas
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Serving Chennai, Pondicherry &amp; Trichy
              </h2>
              <p className="text-sm text-slate-600 font-medium mt-1">
                Select your city for localized safety net options, neighborhood guides, and direct on-site measurements.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {cities.map((city) => (
                <div
                  key={`desktop-city-${city.slug}`}
                  className="bg-white border-2 border-slate-200 hover:border-blue-600 rounded-[3px] p-5 shadow-xs flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-200 rounded-[2px]">
                        Branch Office
                      </span>
                      <span className="text-xs font-bold text-green-700 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500" /> Active
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-950 mb-2">
                      {city.name}
                    </h3>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3 mb-4">
                      {city.description}
                    </p>

                    <div className="text-xs text-slate-500 font-semibold mb-4 space-y-1">
                      <div><strong>Key Zones:</strong> {city.neighborhoods.slice(0, 4).join(", ")} &amp; more</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <Button variant="primary" size="sm" asChild className="w-full text-xs font-black h-8">
                      <Link href={`/location/${city.slug}`} className="flex items-center justify-center gap-1">
                        <span>Explore {city.name} Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                    <Button variant="call" size="sm" asChild className="w-full text-xs font-black h-8">
                      <a href={`tel:${city.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call {city.name}: {city.phone}</span>
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Bottom Callout / Direct Booking Banner */}
        <section className="section-compact bg-slate-900 text-white">
          <div className="container-large">
            <div className="border-2 border-slate-700 bg-slate-950 p-8 lg:p-10 rounded-[3px] shadow-xl">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-8">
                  <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-yellow-400 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    Free On-Site Inspection &amp; Quote
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
                    Protect Your Loved Ones Today with Professional Safety Nets
                  </h2>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-2xl">
                    Join 500+ satisfied residential and commercial clients across Chennai, Pondicherry, and Trichy. Get top-grade safety nets and invisible grills installed with a 5-year warranty.
                  </p>
                </div>

                <div className="col-span-4 flex flex-col gap-3">
                  <Button variant="call" size="lg" asChild className="w-full font-black text-sm h-12 shadow-lg">
                    <a href="tel:+917200092393" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 animate-pulse" />
                      <span>Call: +91 72000 92393</span>
                    </a>
                  </Button>

                  <Button variant="whatsapp" size="lg" asChild className="w-full font-black text-sm h-12 shadow-lg">
                    <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </Button>

                  <Button variant="white" size="lg" asChild className="w-full font-black text-sm h-12 shadow-lg">
                    <Link href="/contact" className="flex items-center justify-center gap-1.5">
                      <span>Book Free Site Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
