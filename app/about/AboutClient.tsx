"use client"

import { ShieldCheck, Users, Award, Zap, History, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutClient() {
    const milestones = [
        { year: "2014", title: "Company Inception", desc: "Established in Chennai specializing in heavy-duty balcony safety nets and bird barriers." },
        { year: "2018", title: "ISO Certification", desc: "Achieved ISO 9001:2015 standard certification for high-tensile safety materials and installation procedures." },
        { year: "2021", title: "Regional Expansion", desc: "Opened dedicated service branches and teams in Pondicherry and Trichy with 316 marine-grade invisible grills." },
        { year: "2024+", title: "500+ Projects Milestone", desc: "Over 500+ completed residential apartments, villas, and industrial safety netting installations across Tamil Nadu." },
    ]

    return (
        <div className="min-h-screen bg-slate-50 pt-28 lg:pt-20 pb-16">
            <div className="container-large">
                {/* Hero Box */}
                <div className="bg-white border-2 border-slate-200 rounded-[3px] p-6 sm:p-8 md:p-10 mb-6 shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-blue-100 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-wider">
                                <History className="w-3.5 h-3.5" />
                                10+ Years of Safety Engineering
                            </div>
                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                About John Enterprises
                            </h1>
                            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
                                For over a decade, John Enterprises has protected families, pets, and properties across Chennai, Pondicherry, and Trichy. We combine high-tensile 316 stainless steel invisible grills and UV-stabilized polymer nets to deliver uncompromising structural safety.
                            </p>
                            <div className="flex flex-wrap gap-2.5 pt-2">
                                <Button variant="call" size="default" asChild className="h-10 text-xs font-black">
                                    <a href="tel:+917200092393" className="flex items-center gap-1.5">
                                        <Phone className="w-3.5 h-3.5" />
                                        <span>Call: +91 72000 92393</span>
                                    </a>
                                </Button>
                                <Button variant="primary" size="default" asChild className="h-10 text-xs font-black">
                                    <Link href="/contact">Schedule Site Audit</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-4 bg-slate-900 text-white border-2 border-slate-800 p-6 rounded-[3px] text-center">
                            <div className="w-12 h-12 rounded-[2px] bg-blue-600 flex items-center justify-center text-white mx-auto mb-3">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-black text-white mb-1">ISO Certified Safety</h3>
                            <p className="text-xs text-slate-300 font-medium mb-3">Certified materials and tested 400kg+ load capacity.</p>
                            <span className="inline-block text-[11px] font-black uppercase tracking-widest text-yellow-400 bg-slate-800 px-3 py-1 rounded-[2px] border border-slate-700">
                                5-Year Replacement Warranty
                            </span>
                        </div>
                    </div>
                </div>

                {/* Core Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                        { title: "316 Marine Grade Materials", desc: "We use 316 marine-grade stainless steel cables and virgin HDPE monofilament netting that never rusts or degrades under sun or rain.", icon: <Zap className="w-5 h-5 text-blue-700" /> },
                        { title: "Experienced Safety Crew", desc: "Our certified installation engineers have completed over 500+ residential and commercial projects with 100% zero accident record.", icon: <Users className="w-5 h-5 text-blue-700" /> },
                        { title: "Transparent Pricing & Warranty", desc: "Free on-site laser measurements, upfront transparent pricing with no hidden charges, and a direct 5-year written warranty.", icon: <Award className="w-5 h-5 text-blue-700" /> },
                    ].map((item, i) => (
                        <div key={i} className="bg-white border-2 border-slate-200 rounded-[3px] p-5 shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-[2px] bg-blue-50 border border-blue-200 flex items-center justify-center mb-3">
                                    {item.icon}
                                </div>
                                <h3 className="text-base font-black text-slate-900 mb-1.5">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Milestones Strip */}
                <div className="bg-white border-2 border-slate-200 rounded-[3px] p-6 sm:p-8 shadow-xs">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-200">
                        Our Growth & Key Milestones
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {milestones.map((m, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-[2px]">
                                <div className="text-2xl font-black text-blue-700 mb-1">{m.year}</div>
                                <h4 className="text-sm font-black text-slate-900 mb-1">{m.title}</h4>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
