import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight, MapPin, ShieldCheck, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { FadeIn } from "@/components/ui/fade-in"
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
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressRegion": "Tamil Nadu",
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
        <main className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden">
            {/* Inject JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <InteractiveGrid className="opacity-20" />
            <div className="container-large relative z-10">
                {/* Header */}
                <div className="max-w-4xl mb-16 mx-auto text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <MapPin className="w-4 h-4" />
                            {city.name} Headquarters
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1] mb-6">
                            Safety Net Solutions in <br /><span className="text-blue-600">{city.name}.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                            {city.description} Our professional team is available across {city.name} for immediate installation.
                        </p>
                    </FadeIn>
                    
                    <FadeIn delay={0.3} className="mt-8">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" variant="primary" className="shadow-xl shadow-blue-200" asChild>
                                <Link href="/contact">Book Free Audit in {city.name} <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href={`tel:${city.phone.replace(/\s+/g, '')}`}><Phone className="mr-2 w-4 h-4" /> Call Local Expert</a>
                            </Button>
                        </div>
                    </FadeIn>
                </div>

                {/* Services Grid for Location */}
                <div className="mt-24 mb-16 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Services in {city.name}</h2>
                     <p className="text-slate-500 font-medium max-w-2xl mx-auto">We provide a comprehensive range of protection systems specifically designed for {city.name}'s architecture.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* We link to the specific city's service pages rather than global ones */}
                    {services.map((service, i) => (
                         <ServiceCard key={i} service={{...service, slug: `../location/${city.slug}/${service.slug}`}} index={i} />
                    ))}
                </div>

                {/* Quality Callout Localized */}
                <FadeIn className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <InteractiveGrid className="opacity-30 text-blue-500" />
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                            #1 Rated in <span className="text-blue-500">{city.name}</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
                            Join hundreds of households in {city.name} who have upgraded to our precision safety systems. Expert audit within 24 hours.
                        </p>
                        <Button size="lg" variant="white" className="rounded-xl px-12" asChild>
                            <Link href="/contact">Get a Quote Today <ArrowRight className="ml-2 w-5 h-5" /></Link>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </main>
    )
}
