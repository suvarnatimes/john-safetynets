"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { LayoutGrid, ZoomIn, X, ChevronLeft, ChevronRight, Share2, Download, ArrowRight, Shield, Zap, Target } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { InteractiveGrid } from "@/components/ui/interactive-grid"

const images = [
    { src: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1000&auto=format&fit=crop", title: "Luxury Balcony Integration", category: "Invisible Grills", client: "Private Villa" },
    { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop", title: "Apartment Safety Matrix", category: "Pigeon Nets", client: "Appaswamy Real Estates" },
    { src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop", title: "Modern Residential Shield", category: "Residential", client: "Individual Home" },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop", title: "Pool Perimeter Safety", category: "Outdoor", client: "Resort Complex" },
    { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop", title: "Commercial Safety Netting", category: "Commercial", client: "IT Park Chennai" },
    { src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop", title: "Sports Facility Protocol", category: "Sports Nets", client: "Cricket Academy" },
]

export default function GalleryPage() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return
            if (e.key === "Escape") setSelectedImageIndex(null)
            if (e.key === "ArrowLeft") setSelectedImageIndex((prev) => (prev! - 1 + images.length) % images.length)
            if (e.key === "ArrowRight") setSelectedImageIndex((prev) => (prev! + 1) % images.length)
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedImageIndex])

    return (
        <main className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden">
            <InteractiveGrid className="opacity-20" />

            <div className="container-large relative z-10">
                {/* Header */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-6"
                    >
                        <LayoutGrid className="w-4 h-4" />
                        Project Archive
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tight leading-[0.9] mb-8"
                    >
                        Precision in <br /><span className="text-blue-600">Practice.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 font-medium leading-relaxed"
                    >
                        Explore our database of premium safety installations across residential, commercial, and industrial segments in Chennai.
                    </motion.p>
                </div>

                {/* Gallery Wall */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer"
                            onClick={() => setSelectedImageIndex(idx)}
                        >
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Technical Overlay */}
                            <div className="absolute inset-x-4 bottom-4 glass-tech rounded-[2rem] p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{img.category}</span>
                                    <ZoomIn className="w-4 h-4 text-slate-400" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 tracking-tight">{img.title}</h3>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Client: {img.client}</span>
                                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Callout */}
                <div className="mt-32 p-12 md:p-24 bg-slate-50 border border-slate-200 rounded-[3.5rem] text-center relative overflow-hidden">
                    <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-[1]">Experience the <br /><span className="text-blue-600">Precision Difference.</span></h2>
                        <Button size="lg" variant="primary" asChild>
                            <Link href="/contact">Book Immediate Audit</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Lightbox / Viewport */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-3xl flex items-center justify-center p-6"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <div className="absolute top-8 right-8 flex gap-4">
                            <button className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button
                                className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
                                onClick={() => setSelectedImageIndex(null)}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="relative w-full max-w-6xl flex flex-col md:flex-row gap-12 items-center" onClick={(e) => e.stopPropagation()}>
                            <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[70vh] rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl shrink-0">
                                <Image
                                    src={images[selectedImageIndex].src}
                                    alt={images[selectedImageIndex].title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col text-left max-w-sm">
                                <span className="text-blue-600 text-xs font-black tracking-[0.3em] uppercase mb-4">{images[selectedImageIndex].category}</span>
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1]">{images[selectedImageIndex].title}</h3>
                                <p className="text-slate-500 font-medium mb-12">Project technical data: 316-grade stainless steel cables, impact-tested for residential high-rise standards.</p>

                                <div className="space-y-6 mb-12">
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                        <span className="text-xs font-bold text-slate-400">Location</span>
                                        <span className="text-sm font-bold text-slate-900">Chennai, TN</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                        <span className="text-xs font-bold text-slate-400">Safety Class</span>
                                        <span className="text-sm font-bold text-slate-900">Premium Residential</span>
                                    </div>
                                </div>

                                <Button className="w-full gap-2" size="lg">
                                    Download Case Study <Download className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Arrows */}
                        <div className="absolute left-8 bottom-8 flex gap-4">
                            <button
                                className="w-16 h-16 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedImageIndex((prev) => (prev! - 1 + images.length) % images.length)
                                }}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                className="w-16 h-16 rounded-2xl border border-slate-200 bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedImageIndex((prev) => (prev! + 1) % images.length)
                                }}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}
