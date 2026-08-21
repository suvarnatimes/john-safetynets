import type { Metadata } from 'next'
import Link from "next/link"
import { Phone, MessageCircle, ArrowRight, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"
import { ServiceCard } from "@/components/ui/service-card"

export const metadata: Metadata = {
  title: 'Safety Net Services in Chennai, Pondicherry & Trichy | John Enterprises',
  description: 'Complete range of safety net services: invisible grills, pigeon nets, sports nets, children safety, mosquito nets & more. Professional installation in Chennai, Pondicherry, and Trichy.',
  alternates: {
    canonical: 'https://johnbalconysafetynets.com/services',
  },
  openGraph: {
    title: 'Safety Net Services | John Enterprises',
    description: 'Premium safety net solutions for residential & commercial spaces.',
    type: 'website',
  },
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-28 lg:pt-20 pb-16">
            <div className="container-large">
                {/* Compact Page Header */}
                <div className="bg-white border-2 border-slate-200 rounded-[3px] p-6 sm:p-8 mb-6 shadow-xs">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-blue-100 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-wider mb-3">
                        <Award className="w-3.5 h-3.5" />
                        Complete Product Portfolio
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                        Safety Net & Invisible Grill Solutions
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-3xl leading-relaxed">
                        Explore our comprehensive range of high-tensile safety netting, pigeon barriers, child fall prevention nets, and 316 marine-grade invisible grills in Chennai, Pondicherry, and Trichy.
                    </p>

                    <div className="flex flex-wrap gap-2.5 mt-5 pt-4 border-t border-slate-100">
                        <Button variant="call" size="sm" asChild className="h-8 text-xs font-black">
                            <a href="tel:+917200092393" className="flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5" />
                                <span>Call for Instant Quote: +91 72000 92393</span>
                            </a>
                        </Button>
                        <Button variant="whatsapp" size="sm" asChild className="h-8 text-xs font-black">
                            <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>WhatsApp Us</span>
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Dense 4-Column Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-10">
                    {services.map((service, i) => (
                        <ServiceCard key={i} service={service} index={i} />
                    ))}
                </div>

                {/* Bottom Callout Banner */}
                <div className="bg-slate-900 border-2 border-slate-800 rounded-[3px] p-6 sm:p-8 text-white text-center shadow-lg">
                    <h2 className="text-xl sm:text-3xl font-black mb-2 tracking-tight">
                        Need Custom Measurements or Immediate Installation?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto mb-6">
                        Our safety technicians provide free on-site inspections and laser measurements across all zones in Chennai, Pondicherry, and Trichy.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button variant="call" size="lg" asChild className="h-11 font-black text-sm">
                            <a href="tel:+917200092393">Call: +91 72000 92393</a>
                        </Button>
                        <Button variant="white" size="lg" asChild className="h-11 font-black text-sm">
                            <Link href="/contact">Schedule Site Visit <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
