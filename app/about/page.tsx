"use client"

import { motion } from "framer-motion"
import { Shield, Target, Users, Award, ShieldCheck, Zap, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { InteractiveGrid } from "@/components/ui/interactive-grid"

export default function AboutPage() {
    const milestones = [
        { year: "2014", title: "Inception", desc: "John Enterprises was established in Chennai with a focus on high-tensile netting solutions." },
        { year: "2018", title: "Certification", desc: "Achieved ISO 9001:2015 certification for our installation protocols and materials." },
        { year: "2021", title: "Expansion", desc: "Integrated invisible grill technology and expanded service centers across Tamil Nadu." },
        { year: "2024", title: "Market Leader", desc: "Trusted by over 500+ premium residential projects and industrial complexes." },
    ]

    return (
        <main className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden">
            <InteractiveGrid className="opacity-20" />
            <div className="container-large relative z-10">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-32">
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-6"
                        >
                            <History className="w-4 h-4" />
                            The Legacy of Precision
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tight leading-[0.9] mb-8"
                        >
                            Safety as a <br /><span className="text-blue-600">Science.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-500 font-medium leading-relaxed mb-10"
                        >
                            For over a decade, John Enterprises has redefined protection in Chennai. We combine structural engineering principles with premium materials to secure your spaces with clinical precision.
                        </motion.p>
                        <div className="flex gap-4">
                            <Button size="lg" variant="primary" asChild>
                                <Link href="/contact">Inquiry Portal</Link>
                            </Button>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-6 aspect-square bg-slate-50 border border-slate-200 rounded-[3rem] p-12 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 grid-lines opacity-40 group-hover:opacity-60 transition-opacity" />
                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                            <div className="w-24 h-24 rounded-3xl bg-blue-600 flex items-center justify-center text-white mb-8 shadow-2xl">
                                <ShieldCheck className="w-12 h-12" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">ISO Certified Protocols</h3>
                            <p className="text-slate-500 font-medium max-w-xs uppercase tracking-widest text-[10px]">Chennai Residential Standards 2024</p>
                        </div>
                    </motion.div>
                </div>

                {/* Philosophy Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                    {[
                        { title: "Pure Materials", desc: "316 Marine Grade Stainless Steel and UV-stabilized HDPE monofilaments.", icon: <Zap className="w-6 h-6 text-blue-600" /> },
                        { title: "Field Expertise", desc: "Our technicians undergo 500+ hours of safety protocol training.", icon: <Users className="w-6 h-6 text-blue-600" /> },
                        { title: "Absolute Trust", desc: "A flawless track record of 500+ zero-incident installations.", icon: <Award className="w-6 h-6 text-blue-600" /> },
                    ].map((item, i) => (
                        <div key={i} className="space-y-6">
                            <div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-blue-600">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="bg-slate-50 border border-slate-200 rounded-[3.5rem] p-12 md:p-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-20 tracking-tighter">Installation <span className="text-blue-600">Milestones.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {milestones.map((m, i) => (
                            <div key={i} className="relative">
                                <div className="text-4xl font-bold text-blue-600 mb-4">{m.year}</div>
                                <h4 className="text-lg font-bold text-slate-900 mb-3">{m.title}</h4>
                                <p className="text-sm font-medium text-slate-500 leading-relaxed">{m.desc}</p>
                                {i < milestones.length - 1 && (
                                    <div className="hidden lg:block absolute top-[1.2rem] -right-6 w-full h-px bg-slate-200 -z-10" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
