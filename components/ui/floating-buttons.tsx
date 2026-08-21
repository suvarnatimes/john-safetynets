"use client"

import { Phone, MessageCircle, Mail, LayoutGrid } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function FloatingButtons() {
    const [showTooltip, setShowTooltip] = useState<string | null>(null)

    return (
        <>
            {/* ========================================================================= */}
            {/* MOBILE FIXED FLOATING ICONS (Fixed 3-Circle Stack on Right Viewport Edge) */}
            {/* ========================================================================= */}
            <div className="lg:hidden fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
                {/* Red Circle - Phone Call */}
                <a
                    href="tel:+917200092393"
                    aria-label="Call John Enterprises"
                    className="w-11 h-11 bg-red-600 hover:bg-red-700 active:scale-90 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white transition-transform"
                >
                    <Phone className="w-5 h-5 fill-white animate-pulse" />
                </a>

                {/* Green Circle - WhatsApp */}
                <a
                    href="https://wa.me/917200092393"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp John Enterprises"
                    className="w-11 h-11 bg-[#25D366] hover:bg-[#20ba5a] active:scale-90 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white transition-transform"
                >
                    <MessageCircle className="w-5 h-5 fill-white" />
                </a>

                {/* Blue Circle - Email */}
                <a
                    href="mailto:johnsafetynets7@gmail.com"
                    aria-label="Email John Enterprises"
                    className="w-11 h-11 bg-blue-600 hover:bg-blue-700 active:scale-90 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white transition-transform"
                >
                    <Mail className="w-5 h-5 text-white" />
                </a>
            </div>

            {/* ========================================================================= */}
            {/* DESKTOP FLOATING BUTTONS (Preserved in Bottom-Right Corner)               */}
            {/* ========================================================================= */}
            <div className="hidden lg:flex fixed bottom-5 right-5 z-40 flex-col gap-2.5">
                {/* WhatsApp Quick Action */}
                <a
                    href="https://wa.me/917200092393"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    onMouseEnter={() => setShowTooltip("whatsapp")}
                    onMouseLeave={() => setShowTooltip(null)}
                    className="relative w-12 h-12 rounded-[3px] bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg border-2 border-[#1fa851] flex items-center justify-center transition-all hover:scale-105"
                >
                    <MessageCircle className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#25D366] animate-ping" />

                    {showTooltip === "whatsapp" && (
                        <div className="absolute right-full mr-3 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider rounded-[2px] whitespace-nowrap shadow-md">
                            WhatsApp Quote
                        </div>
                    )}
                </a>

                {/* Direct Phone Call Quick Action */}
                <a
                    href="tel:+917200092393"
                    aria-label="Direct Phone Call"
                    onMouseEnter={() => setShowTooltip("phone")}
                    onMouseLeave={() => setShowTooltip(null)}
                    className="relative w-12 h-12 rounded-[3px] bg-red-600 hover:bg-red-700 text-white shadow-lg border-2 border-red-700 flex items-center justify-center transition-all hover:scale-105"
                >
                    <Phone className="w-5 h-5 animate-pulse" />

                    {showTooltip === "phone" && (
                        <div className="absolute right-full mr-3 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider rounded-[2px] whitespace-nowrap shadow-md">
                            Call: +91 72000 92393
                        </div>
                    )}
                </a>

                {/* Gallery / Project Showcase Quick Action */}
                <Link
                    href="/gallery"
                    aria-label="View Installation Gallery"
                    onMouseEnter={() => setShowTooltip("gallery")}
                    onMouseLeave={() => setShowTooltip(null)}
                    className="relative w-12 h-12 rounded-[3px] bg-blue-700 hover:bg-blue-800 text-white shadow-lg border-2 border-blue-800 flex items-center justify-center transition-all hover:scale-105"
                >
                    <LayoutGrid className="w-5 h-5" />

                    {showTooltip === "gallery" && (
                        <div className="absolute right-full mr-3 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider rounded-[2px] whitespace-nowrap shadow-md">
                            Project Gallery
                        </div>
                    )}
                </Link>
            </div>
        </>
    )
}
