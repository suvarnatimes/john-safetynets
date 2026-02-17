
import Image from "next/image"
import Link from "next/link"
import { Shield, ArrowRight, LayoutGrid, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { FadeIn } from "@/components/ui/fade-in"
import { ServiceCard } from "@/components/ui/service-card"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden">
            <InteractiveGrid className="opacity-20" />
            <div className="container-large relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <LayoutGrid className="w-4 h-4" />
                            Complete Portfolio
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1] mb-6">
                            Engineered <br /><span className="text-blue-600">Protection Systems.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                            Comprehensive safety solutions tailored for every residential, commercial, and industrial need.
                        </p>
                    </FadeIn>
                </div>



                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <ServiceCard key={i} service={service} index={i} />
                    ))}
                </div>

                {/* Global CTA */}
                <FadeIn className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <InteractiveGrid className="opacity-30 text-blue-500" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready for a <span className="text-blue-500">Precision Upgrade?</span></h2>
                        <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">Our safety engineers are available across Chennai for free immediate site inspections and audits.</p>
                        <Button size="lg" variant="white" className="rounded-xl px-12" asChild>
                            <Link href="/contact">Launch Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </main>
    )
}
