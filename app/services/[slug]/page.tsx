import { services, getServiceFaqs, cities, getTestimonials } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Phone, Star, HelpCircle, MapPin, MessageCircle, ShieldCheck, Award } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params
    const service = services.find((s) => s.slug === params.slug)

    if (!service) {
        return {
            title: "Service Not Found",
        }
    }

    const title = `Best ${service.seoTitle || service.title} | Professional Installation`

    return {
        title: `${title} | John Enterprises`,
        description: `${service.fullDesc} High-quality materials, 5-year warranty, professional installation. Get your free quote today.`,
        alternates: {
            canonical: `https://johnbalconysafetynets.com/services/${service.slug}`,
        },
    }
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export default async function ServicePage(props: Props) {
    const params = await props.params
    const service = services.find((s) => s.slug === params.slug)

    if (!service) {
        notFound()
    }

    const faqs = getServiceFaqs(params.slug)
    const pageTestimonials = getTestimonials(params.slug)
    const processSteps = service.process

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.fullDesc,
        "provider": {
            "@type": "Organization",
            "name": "John Enterprises",
            "url": "https://johnbalconysafetynets.com",
            "logo": "https://johnbalconysafetynets.com/logo.png"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": String(120 + pageTestimonials.length),
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

    const related = (service.relatedServices || [])
        .map(slug => services.find(s => s.slug === slug))
        .filter((s): s is typeof services[number] => s !== undefined)

    return (
        <div className="min-h-screen bg-slate-50 pt-28 lg:pt-20 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
            />
            <div className="container-large">
                {/* Back to Overview */}
                <div className="mb-4">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-xs font-black uppercase tracking-wider text-slate-600 hover:text-blue-700 transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                        Back to All Services
                    </Link>
                </div>

                {/* Main Hero Card */}
                <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-7 md:p-8 mb-8 shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Details */}
                        <div className="lg:col-span-7 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] bg-blue-100 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-wider">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    Verified Safety Grade
                                </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] bg-green-100 border border-green-200 text-green-800 text-xs font-black uppercase tracking-wider">
                                    <Star className="w-3.5 h-3.5 fill-green-700" />
                                    5-Year Warranty
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                {service.title}
                            </h1>

                            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                                {service.fullDesc}
                            </p>

                            {service.longDescription && (
                                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pt-1">
                                    {service.longDescription}
                                </p>
                            )}

                            {/* Direct Action Buttons */}
                            <div className="flex flex-wrap gap-2.5 pt-3">
                                <Button variant="call" size="default" asChild className="font-black text-xs h-10">
                                    <a href="tel:+917200092393" className="flex items-center gap-1.5">
                                        <Phone className="w-4 h-4 animate-pulse" />
                                        <span>Call: +91 72000 92393</span>
                                    </a>
                                </Button>
                                <Button variant="whatsapp" size="default" asChild className="font-black text-xs h-10">
                                    <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>WhatsApp Quote</span>
                                    </a>
                                </Button>
                                <Button variant="outline" size="default" asChild className="font-black text-xs h-10">
                                    <Link href="/contact">Book Free Site Visit</Link>
                                </Button>
                            </div>

                            {/* Service Available In Locations */}
                            <div className="pt-4 border-t border-slate-200">
                                <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider block mb-2">
                                    Book This Service In Your City:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {cities.map((city) => (
                                        <Link
                                            key={city.slug}
                                            href={`/location/${city.slug}/${service.slug}`}
                                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[2px] bg-slate-100 border border-slate-300 text-slate-800 text-xs font-black hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-2xs"
                                        >
                                            <MapPin className="w-3.5 h-3.5" />
                                            {city.name} Installation
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Photo */}
                        <div className="lg:col-span-5 relative">
                            <div className="aspect-[4/3] rounded-[3px] overflow-hidden border-2 border-slate-300 shadow-sm relative bg-slate-100">
                                <Image
                                    src={service.image || "/Invisible Pigeon Net.jpg"}
                                    alt={service.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-[2px] text-xs text-blue-900 font-bold flex items-center gap-2">
                                <Award className="w-4 h-4 text-blue-700 shrink-0" />
                                <span>Free on-site measurement & transparent quote within 2 hours.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Benefits & Process Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Key Benefits */}
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 shadow-xs">
                        <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-blue-700" />
                            Key Benefits & Features
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
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 mb-8 shadow-xs">
                        <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                            Professional 5-Step Installation Protocol
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
                    <div className="bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-6 mb-8 shadow-xs">
                        <div className="mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-black text-slate-900">
                                Verified Customer Reviews
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

                {/* Related Safety Solutions */}
                {related.length > 0 && (
                    <div className="mb-8">
                        <div className="mb-4 pb-2 border-b border-slate-200">
                            <h3 className="text-lg font-black text-slate-900">
                                Related Safety Systems
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                            {related.map((rel, idx) => (
                                <div key={idx} className="bg-white border-2 border-slate-200 hover:border-blue-600 rounded-[3px] p-3.5 shadow-xs flex flex-col justify-between transition-all">
                                    <div>
                                        <div className="aspect-[16/10] rounded-[2px] overflow-hidden mb-2.5 relative bg-slate-100 border border-slate-200">
                                            {rel.image && (
                                                <Image 
                                                    src={rel.image}
                                                    alt={rel.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            )}
                                        </div>
                                        <h4 className="font-black text-slate-900 text-sm mb-1 line-clamp-1">{rel.title}</h4>
                                        <p className="text-xs text-slate-600 line-clamp-2">{rel.desc}</p>
                                    </div>
                                    <div className="mt-3 pt-2 border-t border-slate-100">
                                        <Button variant="primary" size="sm" asChild className="w-full text-xs h-7">
                                            <Link href={`/services/${rel.slug}`}>Learn More</Link>
                                        </Button>
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
                            Frequently Asked Questions
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
