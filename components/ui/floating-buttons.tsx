"use client"

import { Phone, MessageCircle, LayoutGrid } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function FloatingButtons() {
    const [showTooltip, setShowTooltip] = useState<string | null>(null)

    return (
        <div className="fixed bottom-8 left-8 z-40 flex flex-col gap-4">
            {/* Gallery Button */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setShowTooltip("gallery")}
                onMouseLeave={() => setShowTooltip(null)}
                className="relative"
            >
                <Link
                    href="/gallery"
                    className="w-14 h-14 rounded-xl bg-white border border-slate-200 text-slate-900 shadow-xl hover:border-blue-600 hover:text-blue-600 flex items-center justify-center transition-all bg-white"
                >
                    <LayoutGrid className="w-6 h-6" />
                </Link>

                {/* Tooltip */}
                {showTooltip === "gallery" && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute left-full ml-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg whitespace-nowrap shadow-xl"
                    >
                        Project Lab
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900" />
                    </motion.div>
                )}
            </motion.div>

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/917200092393"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 rounded-xl bg-[#25D366] text-white shadow-xl hover:shadow-[#25D366]/20 flex items-center justify-center group transition-all"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setShowTooltip("whatsapp")}
                onMouseLeave={() => setShowTooltip(null)}
            >
                <MessageCircle className="w-6 h-6" />
                <motion.div
                    className="absolute w-2 h-2 bg-white rounded-full top-2 right-2 border-2 border-[#25D366]"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Tooltip */}
                {showTooltip === "whatsapp" && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute left-full ml-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg whitespace-nowrap shadow-xl"
                    >
                        WhatsApp Hub
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900" />
                    </motion.div>
                )}
            </motion.a>

            {/* Phone Button */}
            <motion.a
                href="tel:+917200092393"
                className="relative w-14 h-14 rounded-xl bg-blue-600 text-white shadow-xl hover:shadow-blue-600/20 flex items-center justify-center group transition-all"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setShowTooltip("phone")}
                onMouseLeave={() => setShowTooltip(null)}
            >
                <Phone className="w-6 h-6" />

                {/* Tooltip */}
                {showTooltip === "phone" && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute left-full ml-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg whitespace-nowrap shadow-xl"
                    >
                        Direct Audio
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900" />
                    </motion.div>
                )}
            </motion.a>
        </div>
    )
}
