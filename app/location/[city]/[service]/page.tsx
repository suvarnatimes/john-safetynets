import { services, cities, getCityBySlug, getServiceBySlug, getServiceFaqs } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Phone, Star, ArrowRight, MapPin, HelpCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { FadeIn } from "@/components/ui/fade-in"

type Props = {
    params: Promise<{ city: string; service: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params
    const city = getCityBySlug(params.city)
    const service = getServiceBySlug(params.service)

    if (!city || !service) {
        return {
            title: "Service Not Found",
        }
    }

    const title = `${service.title} in ${city.name} | John Enterprises`
    const description = `Looking for ${service.title} in ${city.name}? ${service.desc} Contact John Enterprises today.`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
        }
    }
}

export async function generateStaticParams() {
    const params: { city: string; service: string }[] = []
    
    cities.forEach((city) => {
        // Support generating standard service slugs
        services.forEach((service) => {
            params.push({ city: city.slug, service: service.slug })
        })
        
        // Include optimized keyword slugs (if different from default service slug)
        const seoKeywords = [
            "pigeon-nets-service", 
            "invisible-grills-balcony", 
            "duct-area-safety-nets", 
            "sports-practice-nets",
            "balcony-safety-nets",
            "cloth-hanger-services"
        ]
        seoKeywords.forEach(keyword => {
            params.push({ city: city.slug, service: keyword })
        })
    })

    return params
}

export default async function CityServicePage(props: Props) {
    const params = await props.params
    const city = getCityBySlug(params.city)
    const service = getServiceBySlug(params.service)

    if (!city || !service) {
        notFound()
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": `John Enterprises ${city.name}`,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city.name,
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
            },
            "telephone": city.phone
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "description": service.fullDesc
    }

    const faqs = getServiceFaqs(params.service)
    
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <div className="min-h-screen bg-white pt-24 pb-24 relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([structuredData, faqSchema]) }}
            />
            
            <InteractiveGrid className="opacity-30 text-blue-100" />
            <div className="container-large relative z-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-slate-500 font-medium mb-12" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href={`/location/${city.slug}`} className="hover:text-blue-600 transition-colors">{city.name}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">{service.title}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Content Side */}
                    <div className="space-y-12">
                        {/* Title & Overview */}
                        <FadeIn>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                                    <Star className="w-3.5 h-3.5 fill-blue-600" />
                                    Premium Service
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
                                    <MapPin className="w-3.5 h-3.5" />
                                    Available in {city.name}
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1] mb-8">
                                {service.title} <span className="text-blue-600 block mt-2">in {city.name}</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                                {service.fullDesc} Professional installation services serving all neighborhoods in {city.name}.
                            </p>
                            {service.longDescription && (
                                <p className="text-lg text-slate-500 leading-relaxed">
                                    {service.longDescription}
                                </p>
                            )}
                        </FadeIn>

                        {/* Benefits Grid */}
                        <FadeIn delay={0.1}>
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600" /> Why Choose Us in {city.name}
                                </h3>
                                <ul className="space-y-4">
                                    {(service.benefits || service.features).map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                                            <span className="text-slate-700 font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        {/* Process Section */}
                        {service.process && (
                            <FadeIn delay={0.2}>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Local Installation Process</h3>
                                <div className="space-y-6">
                                    {service.process.map((step: any, idx: number) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                                    {idx + 1}
                                                </div>
                                                {idx !== service.process.length - 1 && (
                                                    <div className="w-px h-full bg-blue-100 my-2" />
                                                )}
                                            </div>
                                            <div className="pb-6">
                                                <h4 className="text-lg font-bold text-slate-900 mb-1">{step.step}</h4>
                                                <p className="text-slate-500">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        )}

                        {/* Specifications Table */}
                        {service.specifications && (
                            <FadeIn delay={0.3}>
                                <div className="border rounded-2xl overflow-hidden">
                                    <table className="w-full text-left text-sm">
                                        <tbody className="divide-y divide-slate-100">
                                            {service.specifications.map((spec: any, idx: number) => (
                                                <tr key={idx} className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-semibold text-slate-900 bg-slate-50/30 w-1/3">{spec.label}</td>
                                                    <td className="p-4 text-slate-600">{spec.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </FadeIn>
                        )}

                        {/* CTA Buttons */}
                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" variant="primary" className="shadow-xl shadow-blue-200" asChild>
                                    <Link href="/contact">Get Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <a href={`tel:${city.phone.replace(/\s+/g, '')}`}><Phone className="mr-2 w-4 h-4" /> Call Local Expert</a>
                                </Button>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Image Side */}
                    <FadeIn direction="left" delay={0.2} className="relative sticky top-24">
                        <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative">
                            <Image
                                src={service.image || "/Invisible Pigeon Net.jpg"}
                                alt={`${service.title} in ${city.name}`}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] hidden md:block border border-slate-100">
                            <div className="text-4xl font-bold text-blue-600 mb-1">#1</div>
                            <div className="text-sm font-medium text-slate-500">Rated Service in {city.name}</div>
                        </div>
                    </FadeIn>
                </div>

                {/* FAQ Section */}
                {faqs.length > 0 && (
                    <FadeIn delay={0.4} className="mt-32 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-500 font-medium mt-4">Everything you need to know about our {service.title} in {city.name}.</p>
                        </div>
                        <div className="grid gap-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8">
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                )}
            </div>
        </div>
    )
}
