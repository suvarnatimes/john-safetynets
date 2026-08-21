import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight, MapPin, ShieldCheck, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { services, cities, getCityBySlug } from "@/lib/data"

type Props = {
    params: Promise<{ city: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params
    const city = getCityBySlug(params.city)

    if (!city) {
        return {
            title: "Location Not Found",
        }
    }

    return {
        title: `Premium Safety Nets in ${city.name} | John Enterprises`,
        description: city.description,
        alternates: {
            canonical: `https://johnbalconysafetynets.com/location/${city.slug}`,
        },
        openGraph: {
            title: `Premium Safety Nets in ${city.name} | John Enterprises`,
            description: city.description,
            type: "website",
        }
    }
}

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }))
}

export default async function LocationPage(props: Props) {
    const params = await props.params
    const city = getCityBySlug(params.city)

    if (!city) {
        notFound()
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `John Enterprises ${city.name}`,
        "description": city.description,
        "image": "https://johnbalconysafetynets.com/logo.png",
        "priceRange": "₹₹",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "20:00"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressRegion": city.slug === "pondicherry" ? "Puducherry" : "Tamil Nadu",
            "addressCountry": "IN"
        },
        "telephone": city.phone,
        "email": city.email,
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
        },
        "url": `https://johnbalconysafetynets.com/location/${city.slug}`
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-28 lg:pt-20 pb-16">
            {/* Inject JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <div className="container-large">
                {/* Header Card */}
                <div className="bg-white border-2 border-slate-200 rounded-[3px] p-6 sm:p-8 mb-6 shadow-xs">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-blue-100 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-wider mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        {city.name} Branch Office & Service Operations
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                        Safety Net & Invisible Grill Installation in {city.name}
                    </h1>

                    <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-3xl leading-relaxed">
                        {city.description} Our professional installation team is equipped for same-day on-site measurements and fast installation across all {city.name} neighborhoods.
                    </p>

                    <div className="flex flex-wrap gap-2.5 mt-5 pt-4 border-t border-slate-100">
                        <Button variant="call" size="sm" asChild className="h-8 text-xs font-black">
                            <a href={`tel:${city.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5" />
                                <span>Call {city.name} Team: {city.phone}</span>
                            </a>
                        </Button>
                        <Button variant="whatsapp" size="sm" asChild className="h-8 text-xs font-black">
                            <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>WhatsApp Quote</span>
                            </a>
                        </Button>
                        <Button variant="primary" size="sm" asChild className="h-8 text-xs font-black">
                            <Link href="/contact">Book Free Site Visit</Link>
                        </Button>
                    </div>
                </div>

                {/* Localized Insights Card */}
                {city.localInsight && (
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 mb-6 shadow-xs">
                        <div className="flex items-center gap-2 text-xs font-black text-blue-700 uppercase tracking-wider mb-2">
                            <ShieldCheck className="w-4 h-4" />
                            Local Climate & Architectural Insights for {city.name}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-3">
                            {city.localInsight}
                        </p>
                        <p className="text-xs text-slate-500 font-bold">
                            <strong>Service Area Scope:</strong> {city.serviceArea}
                        </p>
                    </div>
                )}

                {/* Services Grid for City */}
                <div className="mb-8">
                    <div className="mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                                Available Safety Net Services in {city.name}
                            </h2>
                            <p className="text-xs text-slate-500 font-medium">Click any service to view localized specifications and pricing.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                        {services.map((service, i) => (
                            <ServiceCard key={i} service={service} index={i} href={`/location/${city.slug}/${service.slug}`} />
                        ))}
                    </div>
                </div>

                {/* Neighborhoods Coverage Matrix */}
                {city.neighborhoods && (
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 mb-8 shadow-xs">
                        <h3 className="text-base sm:text-lg font-black text-slate-900 mb-3 pb-2 border-b border-slate-200 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-700" />
                            Active Coverage Zones in {city.name}
                        </h3>
                        <p className="text-xs text-slate-600 font-medium mb-4">
                            We provide immediate on-site inspections, laser measurements, and installations throughout the following localities:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                            {city.neighborhoods.map((nh) => (
                                <div key={nh} className="p-2 bg-slate-50 border border-slate-200 rounded-[2px] text-center">
                                    <span className="text-xs font-black text-slate-800 block truncate">{nh}</span>
                                    <span className="text-[10px] font-black text-green-700 uppercase block">Active Zone</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom Callout */}
                <div className="bg-slate-900 border-2 border-slate-800 rounded-[3px] p-6 sm:p-8 text-white text-center shadow-lg">
                    <h2 className="text-xl sm:text-3xl font-black mb-2 tracking-tight">
                        #1 Rated Safety Net Installation in {city.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto mb-6">
                        Join hundreds of verified households in {city.name} who trust John Enterprises for bird netting, child protection, and invisible grills.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button variant="call" size="lg" asChild className="h-11 font-black text-sm">
                            <a href={`tel:${city.phone.replace(/\s+/g, '')}`}>Call {city.name}: {city.phone}</a>
                        </Button>
                        <Button variant="white" size="lg" asChild className="h-11 font-black text-sm">
                            <Link href="/contact">Book Immediate Site Audit <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
