"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { services } from "@/lib/data"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navigation = [
        { name: "Home", href: "/" },
        {
            name: "Services",
            href: "/services",
            children: services.map(s => ({ name: s.title, href: `/services/${s.slug}` }))
        },
        { name: "Gallery", href: "/gallery" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header
            className={cn(
                "sticky lg:fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-slate-200",
                isScrolled ? "shadow-md" : "shadow-xs"
            )}
        >
            {/* 1. Mobile Scrolling News Marquee with Overlapping Center Call Button */}
            <div className="lg:hidden relative">
                <div className="bg-blue-700 text-white text-[11px] font-bold h-7.5 flex items-center overflow-hidden border-b border-blue-800 select-none">
                    <div className="animate-marquee inline-flex gap-6 items-center">
                        <span>🔴 FLASH NEWS: Premium Balcony Safety Nets &amp; 316 Marine Invisible Grills in Chennai, Pondicherry &amp; Trichy • 5-Year Warranty • Free On-Site Inspection &amp; Same-Day Quotes • Pigeon Protection Nets • Sports Nets • 24/7 Helpline: +91 72000 92393 •</span>
                        <span>🔴 FLASH NEWS: Premium Balcony Safety Nets &amp; 316 Marine Invisible Grills in Chennai, Pondicherry &amp; Trichy • 5-Year Warranty • Free On-Site Inspection &amp; Same-Day Quotes • Pigeon Protection Nets • Sports Nets • 24/7 Helpline: +91 72000 92393 •</span>
                    </div>
                </div>

                {/* Overlapping Call Button (Half in Scrolling Bar, Half in Header Row) */}
                <a
                    href="tel:+917200092393"
                    aria-label="Call John Enterprises"
                    className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-black text-[10px] sm:text-[11px] py-0.5 px-3 rounded-full shadow-md tracking-wider flex items-center gap-1.5 border border-white transition-transform active:scale-95 whitespace-nowrap"
                >
                    <Phone className="w-2.5 h-2.5 fill-white animate-pulse" />
                    <span>+91 72000 92393</span>
                </a>
            </div>

            {/* 2. Main Header Navigation Row */}
            <nav className="container-large flex items-center justify-between py-2 sm:py-2.5 relative">
                {/* Brand Logo & Name */}
                <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                        <Image
                            src="/logo.png"
                            alt="John Enterprises Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors leading-tight">
                            John Enterprises
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-bold text-blue-700 uppercase tracking-widest leading-none">
                            Safety Nets & Invisible Grills
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-6">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.href}
                                className="text-xs font-black uppercase tracking-wider text-slate-800 hover:text-blue-700 transition-colors flex items-center gap-1 py-1"
                            >
                                {item.name}
                                {item.children && <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />}
                            </Link>
                            {item.children && (
                                <div className="absolute top-full left-0 pt-2 hidden group-hover:block animate-in fade-in slide-in-from-top-1 z-50">
                                    <div className="bg-white border-2 border-slate-300 rounded-[3px] p-2 min-w-[280px] shadow-xl grid grid-cols-1 gap-0.5">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-[2px] transition-colors truncate"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop Quick Phone Call & Quote Actions */}
                <div className="hidden lg:flex items-center gap-2 md:gap-3">
                    <Button variant="call" size="sm" asChild className="h-8 text-xs font-black">
                        <a href="tel:+917200092393" className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 animate-pulse" />
                            <span>+91 72000 92393</span>
                        </a>
                    </Button>
                    <Button variant="primary" size="sm" asChild className="h-8 text-xs font-black">
                        <Link href="/contact">Free Audit</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle (Solid Purple/Indigo button) */}
                <button
                    aria-label="Toggle Navigation Menu"
                    className="lg:hidden w-9 h-9 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white rounded-[4px] flex items-center justify-center shadow-xs transition-colors shrink-0"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="lg:hidden border-t border-slate-200 bg-white p-4 shadow-xl max-h-[75vh] overflow-y-auto">
                    <div className="flex flex-col gap-2">
                        {navigation.map((item) => (
                            <div key={item.name} className="flex flex-col">
                                <Link
                                    href={item.href}
                                    className="text-sm font-black text-slate-900 hover:text-blue-700 py-1.5 border-b border-slate-100"
                                    onClick={() => !item.children && setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.children && (
                                    <div className="pl-3 py-1 flex flex-col gap-1 border-l-2 border-blue-600 bg-slate-50 my-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="text-xs font-bold text-slate-600 hover:text-blue-700 py-1"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                            <Button variant="call" size="default" asChild className="w-full justify-center">
                                <a href="tel:+917200092393" className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>Call: +91 72000 92393</span>
                                </a>
                            </Button>
                            <Button variant="whatsapp" size="default" asChild className="w-full justify-center">
                                <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </Button>
                            <Button variant="primary" size="default" asChild className="w-full justify-center">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <span>Book Free Site Measurement</span>
                                    <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
