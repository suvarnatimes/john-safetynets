import { services, cities, getCityBySlug, getServiceBySlug, getServiceFaqs, getTestimonials } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, Star, MapPin, HelpCircle, MessageCircle, ShieldCheck, Award } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"

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

    const title = `Best ${service.seoTitle || service.title} in ${city.name} | John Enterprises`
    const description = `Looking for high-quality ${service.title} in ${city.name}? We provide professional safety net installation with 5 years warranty in ${city.name}. Get a free quote today.`

    return {
        title,
        description,
        alternates: {
            canonical: `https://johnbalconysafetynets.com/location/${city.slug}/${service.slug}`,
        },
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
        // Standard service slugs
        services.forEach((service) => {
            params.push({ city: city.slug, service: service.slug })
        })
        
        // SEO keyword slugs
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

    const pageTestimonials = getTestimonials(params.service, params.city)
    const processSteps = service.process

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": `John Enterprises ${city.name}`,
            "image": "https://johnbalconysafetynets.com/logo.png",
            "priceRange": "₹₹",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city.name,
                "addressRegion": city.slug === "pondicherry" ? "Puducherry" : "Tamil Nadu",
                "addressCountry": "IN"
            },
            "telephone": city.phone
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "description": service.fullDesc,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": String(80 + pageTestimonials.length),
            "bestRating": "5"
        },
        ...(pageTestimonials.length > 0 && {
            "review": pageTestimonials.map(t => ({
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": t.name
                },
                "datePublished": t.date,
                "reviewBody": t.text,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": String(t.rating),
                    "bestRating": "5"
                }
            }))
        })
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

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://johnbalconysafetynets.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": city.name,
                "item": `https://johnbalconysafetynets.com/location/${city.slug}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": `https://johnbalconysafetynets.com/location/${city.slug}/${service.slug}`
            }
        ]
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-28 lg:pt-20 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([structuredData, faqSchema, breadcrumbSchema]) }}
            />
            
            <div className="container-large">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-xs text-slate-500 font-bold mb-4" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
                    <span className="mx-1.5 text-slate-400">/</span>
                    <Link href={`/location/${city.slug}`} className="hover:text-blue-700 transition-colors">{city.name}</Link>
                    <span className="mx-1.5 text-slate-400">/</span>
                    <span className="text-slate-900 font-black">{service.title}</span>
                </nav>

                {/* Main Hero Card */}
                <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-7 md:p-8 mb-6 shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Details */}
                        <div className="lg:col-span-7 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] bg-blue-100 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-wider">
                                    <MapPin className="w-3.5 h-3.5" />
                                    Available in {city.name}
                                </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] bg-green-100 border border-green-200 text-green-800 text-xs font-black uppercase tracking-wider">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    5-Year Warranty
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                {service.title} <span className="text-blue-700 block mt-1">in {city.name}</span>
                            </h1>

                            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                                {service.fullDesc} Professional on-site measurement and safety installation serving all residential and commercial zones in {city.name}.
                            </p>

                            {service.longDescription && (
                                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pt-1">
                                    {service.longDescription}
                                </p>
                            )}

                            {/* Direct Action Buttons */}
                            <div className="flex flex-wrap gap-2.5 pt-3">
                                <Button variant="call" size="default" asChild className="font-black text-xs h-10">
                                    <a href={`tel:${city.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5">
                                        <Phone className="w-4 h-4 animate-pulse" />
                                        <span>Call {city.name}: {city.phone}</span>
                                    </a>
                                </Button>
                                <Button variant="whatsapp" size="default" asChild className="font-black text-xs h-10">
                                    <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>WhatsApp Quote</span>
                                    </a>
                                </Button>
                                <Button variant="primary" size="default" asChild className="font-black text-xs h-10">
                                    <Link href="/contact">Book Free Site Visit</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Photo */}
                        <div className="lg:col-span-5 relative">
                            <div className="aspect-[4/3] rounded-[3px] overflow-hidden border-2 border-slate-300 shadow-sm relative bg-slate-100">
                                <Image
                                    src={service.image || "/Invisible Pigeon Net.jpg"}
                                    alt={`${service.title} in ${city.name}`}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-[2px] text-xs text-blue-900 font-bold flex items-center gap-2">
                                <Award className="w-4 h-4 text-blue-700 shrink-0" />
                                <span>Serving all apartments, villas, and commercial buildings in {city.name}.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Localized Insights Card */}
                {city.localInsight && (
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 mb-6 shadow-xs">
                        <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-700" />
                            Local Installation Insights for {city.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-3">
                            {city.localInsight}
                        </p>
                        <p className="text-xs text-slate-500 font-bold mb-4">
                            <strong>Service Area Scope:</strong> {city.serviceArea}
                        </p>
                        {city.neighborhoods && (
                            <div className="pt-3 border-t border-slate-200">
                                <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider block mb-2">
                                    Serving Neighborhoods in {city.name}:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {city.neighborhoods.map((nh) => (
                                        <span key={nh} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold rounded-[2px]">
                                            {nh}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Key Benefits & Process Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Key Benefits */}
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 shadow-xs">
                        <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-blue-700" />
                            Why Choose Our {service.title} in {city.name}
                        </h3>
                        <ul className="space-y-2.5">
                            {(service.benefits || service.features).map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Specifications */}
                    {service.specifications && (
                        <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 shadow-xs">
                            <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-blue-700" />
                                Material & Technical Specifications
                            </h3>
                            <div className="border border-slate-200 rounded-[2px] overflow-hidden">
                                <table className="w-full text-left text-xs sm:text-sm">
                                    <tbody className="divide-y divide-slate-200">
                                        {service.specifications.map((spec: { label: string; value: string }, idx: number) => (
                                            <tr key={idx} className="hover:bg-slate-50">
                                                <td className="p-2.5 font-bold text-slate-900 bg-slate-100/60 w-2/5 border-r border-slate-200">
                                                    {spec.label}
                                                </td>
                                                <td className="p-2.5 text-slate-700 font-medium">
                                                    {spec.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

                {/* Installation Process */}
                {processSteps && (
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 mb-6 shadow-xs">
                        <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                            Local Installation Process in {city.name}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                            {processSteps.map((step: { step: string; desc: string }, idx: number) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200 p-3.5 rounded-[2px] flex flex-col justify-between">
                                    <div>
                                        <div className="w-7 h-7 rounded-[2px] bg-blue-700 text-white font-black text-xs flex items-center justify-center mb-2">
                                            {idx + 1}
                                        </div>
                                        <h4 className="text-xs sm:text-sm font-black text-slate-900 mb-1">{step.step}</h4>
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Testimonials */}
                {pageTestimonials.length > 0 && (
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 mb-6 shadow-xs">
                        <div className="mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-black text-slate-900">
                                Verified Customer Feedback in {city.name}
                            </h3>
                            <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                                <span>4.9 / 5.0 Rating</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pageTestimonials.map((t, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-[2px] p-4 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-1 text-amber-400 mb-2">
                                            {[...Array(t.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-700 font-medium mb-3 italic">
                                            &ldquo;{t.text}&rdquo;
                                        </p>
                                    </div>
                                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                                        <div>
                                            <span className="font-bold text-slate-900">{t.name}</span>
                                            <span className="text-slate-500 ml-1">({t.area}, {t.city})</span>
                                        </div>
                                        <span className="text-[11px] text-slate-400">{t.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* FAQs */}
                {faqs.length > 0 && (
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 shadow-xs">
                        <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-blue-700" />
                            Frequently Asked Questions about {service.title} in {city.name}
                        </h3>
                        <div className="grid gap-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-slate-50 border border-slate-200 rounded-[2px] p-4">
                                    <h4 className="text-xs sm:text-sm font-black text-slate-900 mb-1.5">{faq.question}</h4>
                                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
