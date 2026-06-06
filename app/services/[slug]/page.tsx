import { services, getServiceFaqs, cities, getTestimonials } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Phone, Star, ArrowRight, HelpCircle, MapPin } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { FadeIn } from "@/components/ui/fade-in"

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
        <div className="min-h-screen bg-white pt-24 pb-24 relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
            />
            <InteractiveGrid className="opacity-30 text-blue-100" />
            <div className="container-large relative z-10">
                <Link
                    href="/services"
                    className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-12 transition-colors group font-medium"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to All Services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Content Side */}
                    <div className="space-y-12">
                        {/* Title & Overview */}
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                                <Star className="w-3.5 h-3.5 fill-blue-600" />
                                Premium Service
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1] mb-8">
                                {service.title}
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                                {service.fullDesc}
                            </p>
                            {service.longDescription && (
                                <p className="text-lg text-slate-500 leading-relaxed">
                                    {service.longDescription}
                                </p>
                            )}

                            {/* Service Available In Locations */}
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Service Available In:</span>
                                <div className="flex flex-wrap gap-3">
                                    {cities.map((city) => (
                                        <Link
                                            key={city.slug}
                                            href={`/location/${city.slug}/${service.slug}`}
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-white transition-all shadow-sm"
                                        >
                                            <MapPin className="w-4 h-4 text-blue-600" />
                                            {city.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Benefits Grid */}
                        <FadeIn delay={0.1}>
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600" /> Key Benefits
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
                        {processSteps && (
                            <FadeIn delay={0.2}>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Installation Process</h3>
                                <div className="space-y-6">
                                    {processSteps.map((step: any, idx: number) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                                    {idx + 1}
                                                </div>
                                                {idx !== processSteps.length - 1 && (
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
                                    <a href="tel:+917200092393"><Phone className="mr-2 w-4 h-4" /> Call Expert</a>
                                </Button>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Image Side */}
                    <FadeIn direction="left" delay={0.2} className="relative sticky top-24">
                        <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative">
                            <Image
                                src={service.image || "/Invisible Pigeon Net.jpg"}
                                alt={service.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] hidden md:block border border-slate-100">
                            <div className="text-4xl font-bold text-blue-600 mb-1">5★</div>
                            <div className="text-sm font-medium text-slate-500">Rated by 500+ Happy Customers</div>
                        </div>
                    </FadeIn>
                </div>

                {/* Testimonials Section */}
                {pageTestimonials.length > 0 && (
                    <FadeIn delay={0.3} className="mt-32 max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-3">Customer Reviews</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-3">
                                What Our Customers Say
                            </h2>
                            <p className="text-slate-500 font-medium mt-4">Read verified reviews from satisfied clients.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {pageTestimonials.map((t, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 relative flex flex-col justify-between hover:shadow-lg transition-shadow">
                                    <div>
                                        <div className="flex items-center gap-1 text-amber-400 mb-4">
                                            {[...Array(t.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-slate-650 leading-relaxed font-medium mb-6 italic">
                                            "{t.text}"
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/80">
                                        <div>
                                            <h4 className="font-bold text-slate-950">{t.name}</h4>
                                            <p className="text-xs text-slate-400 font-semibold">{t.area}, {t.city}</p>
                                        </div>
                                        <span className="text-xs font-semibold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">{t.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                )}

                {/* Related Services */}
                {related.length > 0 && (
                    <FadeIn delay={0.4} className="mt-32 max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-3">Explore More</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Related Safety Solutions
                            </h2>
                            <p className="text-slate-500 font-medium mt-4">Discover our other high-quality residential and commercial safety systems.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {related.map((rel, idx) => (
                                <Link 
                                    key={idx} 
                                    href={`/services/${rel.slug}`}
                                    className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-600/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 relative bg-slate-250">
                                            {rel.image && (
                                                <Image 
                                                    src={rel.image}
                                                    alt={rel.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            )}
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{rel.title}</h3>
                                        <p className="text-sm text-slate-500 line-clamp-2">{rel.desc}</p>
                                    </div>
                                    <div className="flex items-center text-blue-600 font-semibold text-sm mt-4 group-hover:translate-x-1 transition-transform">
                                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </FadeIn>
                )}

                {/* FAQ Section */}
                {faqs.length > 0 && (
                    <FadeIn delay={0.4} className="mt-32 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-500 font-medium mt-4">Common questions about our {service.title}.</p>
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
