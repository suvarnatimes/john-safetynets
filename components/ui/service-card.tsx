"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, ArrowRight } from "lucide-react"
import { FadeIn } from "./fade-in"

import { useState } from "react"

interface Service {
    slug: string
    title: string
    desc: string
    image: string
    isFeatured?: boolean
}

interface ServiceCardProps {
    service: Service
    index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <FadeIn delay={index * 0.1}>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-slate-200/60 bg-white shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
            >
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 h-full w-full overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    {/* Subtle Overlay Grid */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] bg-center group-hover:opacity-[0.05] transition-opacity duration-700" />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent translate-y-[65%] group-hover:translate-y-[60%] transition-transform duration-700" />
                </div>

                {/* Floating Glass Content Card */}
                <div className="absolute inset-x-6 bottom-6 p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden group-hover:bg-white/60 transition-all duration-500">
                    {/* Glow Effect */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-400/20 blur-[80px] rounded-full group-hover:bg-blue-400/30 transition-colors duration-500" />

                    <div className="relative z-10">
                        <motion.div
                            initial={false}
                            animate={{
                                height: isHovered ? "auto" : 0,
                                opacity: isHovered ? 1 : 0,
                                marginBottom: isHovered ? 16 : 0
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                            className="overflow-hidden"
                        >
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    Premium Grade
                                </div>
                            </div>
                        </motion.div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
                            {service.title}
                        </h3>

                        <motion.div
                            initial={false}
                            animate={{
                                height: isHovered ? "auto" : 0,
                                opacity: isHovered ? 1 : 0,
                                marginBottom: isHovered ? 24 : 0
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                            className="overflow-hidden"
                        >
                            <p className="text-slate-600 font-medium line-clamp-2 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>

                        <div className="flex items-center justify-between">
                            <Link
                                href={`/services/${service.slug}`}
                                className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm tracking-tight group/link"
                            >
                                Explore Solution
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-all duration-300">
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-blue-600/0 group-hover:border-blue-600/20 rounded-[2.5rem] transition-colors duration-700 pointer-events-none" />
            </div>
        </FadeIn>
    )
}
