import { services } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Phone, Star, ArrowRight } from "lucide-react"
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

    return {
        title: `${service.title} | John Enterprises`,
        description: service.desc,
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

    return (
        <div className="min-h-screen bg-white pt-24 pb-24 relative">
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
                        {service.process && (
                            <FadeIn delay={0.2}>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Installation Process</h3>
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
            </div>
        </div>
    )
}
