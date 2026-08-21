"use client"

import Image from "next/image"
import { LayoutGrid, ZoomIn, X, ChevronLeft, ChevronRight, Phone, MessageCircle, ArrowRight, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const staticImages = [
    { src: "/Invisible Grill Balcony Safety Nets.jpg", title: "Invisible Balcony Grill Installation", category: "Invisible Grills", client: "High-Rise Apartment, Chennai" },
    { src: "/Invisible Pigeon Net.jpg", title: "Pigeon Protection Netting", category: "Bird Protection", client: "Residential Society, Pondicherry" },
    { src: "/Sports Practice Nets.jpg", title: "Cricket Practice Net Cage", category: "Sports Nets", client: "Sports Academy, Trichy" },
    { src: "/Duct Area Nets.jpg", title: "Duct Area Safety Shaft Cover", category: "Industrial", client: "Apartment Complex, Chennai" },
    { src: "/Cloth Hanger Services.jpg", title: "Ceiling Cloth Drying Pulley Hanger", category: "Utility", client: "Modern Apartment, Chennai" },
    { src: "/Children's Safety Nets.jpg", title: "Child Fall Protection Balcony Net", category: "Child Safety", client: "Private Villa, Trichy" },
    { src: "/Pets Safety Nets.jpg", title: "Bite-Proof Balcony Cat & Dog Net", category: "Pet Safety", client: "Apartment, Pondicherry" },
    { src: "/safety nets for the Staircase.jpg", title: "Staircase Safety Net Barrier", category: "Interior", client: "Duplex Villa, Chennai" },
    { src: "/farming nets.jpg", title: "Agricultural Shade Netting", category: "Commercial", client: "Commercial Site, Trichy" },
    { src: "/invisible childrens safety.jpg", title: "Invisible Child Safety Grills", category: "Child Safety", client: "High-Rise Apartment, Chennai" },
    { src: "/monkey safety nets.jpg", title: "Heavy-Duty Monkey Safety Nets", category: "Primate Grade", client: "Hillside Home, Trichy" },
    { src: "/staircase invisible grills.jpg", title: "Interior Staircase Invisible Grills", category: "Interior", client: "Contemporary Villa, Chennai" },
    { src: "/Industrial Safety Nets 1.jpg", title: "Construction Fall Arrest Safety Net", category: "Industrial", client: "Building Site, Chennai" },
]

export default function GalleryClient() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
    const [displayImages, setDisplayImages] = useState(staticImages)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch('/api/gallery')
                const data = await response.json()
                if (data && data.length > 0) {
                    setDisplayImages([...data, ...staticImages])
                }
            } catch (error) {
                console.log("Cloudinary fetch failed, using static assets only.")
            } finally {
                setIsLoading(false)
            }
        }
        fetchImages()
    }, [])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return
            if (e.key === "Escape") setSelectedImageIndex(null)
            if (e.key === "ArrowLeft") setSelectedImageIndex((prev) => (prev! - 1 + displayImages.length) % displayImages.length)
            if (e.key === "ArrowRight") setSelectedImageIndex((prev) => (prev! + 1) % displayImages.length)
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedImageIndex, displayImages])

    return (
        <div className="min-h-screen bg-slate-50 pt-28 lg:pt-20 pb-16">
            <div className="container-large">
                {/* Header Box */}
                <div className="bg-white border-2 border-slate-200 rounded-[3px] p-6 sm:p-8 mb-6 shadow-xs">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-blue-100 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-wider mb-3">
                        <LayoutGrid className="w-3.5 h-3.5" />
                        Verified Installation Portfolio
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                        Project Gallery & Work Portfolio
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-3xl leading-relaxed">
                        Browse our completed safety netting, anti-pigeon barriers, and 316 marine-grade invisible grill installations across residential apartments, villas, commercial complexes, and sports academies in Chennai, Pondicherry, and Trichy.
                    </p>
                </div>

                {/* Gallery Wall */}
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 space-y-3">
                        <Loader2 className="w-8 h-8 text-blue-700 animate-spin" />
                        <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Loading Gallery Assets...</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-8">
                        {displayImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="group bg-white border-2 border-slate-200 hover:border-blue-600 rounded-[3px] overflow-hidden shadow-xs cursor-pointer flex flex-col justify-between transition-all"
                                onClick={() => setSelectedImageIndex(idx)}
                            >
                                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                                    <Image
                                        src={img.src}
                                        alt={img.title}
                                        fill
                                        priority={idx < 4}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-2 left-2 bg-slate-900/90 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[2px]">
                                        {img.category}
                                    </div>
                                    <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                        <ZoomIn className="w-7 h-7 bg-slate-900/80 p-1.5 rounded-[2px]" />
                                    </div>
                                </div>

                                <div className="p-3 bg-white">
                                    <h3 className="text-xs sm:text-sm font-black text-slate-900 line-clamp-1 mb-1 group-hover:text-blue-700">
                                        {img.title}
                                    </h3>
                                    <p className="text-[11px] text-slate-500 font-bold truncate">
                                        {img.client}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Bottom Callout */}
                <div className="bg-slate-900 border-2 border-slate-800 rounded-[3px] p-6 sm:p-8 text-white text-center shadow-lg">
                    <h2 className="text-xl sm:text-3xl font-black mb-2 tracking-tight">
                        Like What You See? Get a Free On-Site Measurement
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto mb-6">
                        Contact John Enterprises today for fast same-day site visits, custom estimates, and certified safety net installation.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button variant="call" size="lg" asChild className="h-11 font-black text-sm">
                            <a href="tel:+917200092393">Call: +91 72000 92393</a>
                        </Button>
                        <Button variant="whatsapp" size="lg" asChild className="h-11 font-black text-sm">
                            <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer">WhatsApp Estimate</a>
                        </Button>
                        <Button variant="white" size="lg" asChild className="h-11 font-black text-sm">
                            <Link href="/contact">Book Free Audit <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setSelectedImageIndex(null)}
                >
                    <button
                        className="absolute top-4 right-4 w-10 h-10 rounded-[2px] bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg z-50"
                        onClick={() => setSelectedImageIndex(null)}
                        aria-label="Close Lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div
                        className="relative w-full max-w-4xl bg-white border-2 border-slate-700 rounded-[3px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full md:w-2/3 aspect-[4/3] md:aspect-auto md:min-h-[420px] bg-slate-900">
                            <Image
                                src={displayImages[selectedImageIndex].src}
                                alt={displayImages[selectedImageIndex].title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="w-full md:w-1/3 p-5 sm:p-6 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-slate-200">
                            <div>
                                <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-[2px] border border-blue-200 inline-block mb-2">
                                    {displayImages[selectedImageIndex].category}
                                </span>
                                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight mb-2">
                                    {displayImages[selectedImageIndex].title}
                                </h3>
                                <p className="text-xs text-slate-600 font-medium mb-4">
                                    <strong>Client:</strong> {displayImages[selectedImageIndex].client}
                                </p>
                                <div className="text-xs text-slate-500 font-medium space-y-1 mb-6">
                                    <div>• 316 Marine Grade / UV-Stabilized</div>
                                    <div>• 5-Year Guarantee</div>
                                    <div>• Same-Day Installation Available</div>
                                </div>
                            </div>

                            <div className="space-y-2 pt-4 border-t border-slate-100">
                                <Button variant="call" size="sm" asChild className="w-full h-9 text-xs font-black">
                                    <a href="tel:+917200092393" className="flex items-center justify-center gap-1.5">
                                        <Phone className="w-3.5 h-3.5" />
                                        <span>Call for Similar Net</span>
                                    </a>
                                </Button>
                                <Button variant="whatsapp" size="sm" asChild className="w-full h-9 text-xs font-black">
                                    <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                                        <MessageCircle className="w-3.5 h-3.5" />
                                        <span>WhatsApp Photo for Quote</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-[2px] bg-slate-900/90 text-white border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation()
                            setSelectedImageIndex((prev) => (prev! - 1 + displayImages.length) % displayImages.length)
                        }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-[2px] bg-slate-900/90 text-white border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation()
                            setSelectedImageIndex((prev) => (prev! + 1) % displayImages.length)
                        }}
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            )}
        </div>
    )
}
