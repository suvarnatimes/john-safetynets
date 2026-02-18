"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { services } from "@/lib/data"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
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
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" : "bg-transparent border-transparent py-5"
            )}
        >
            <nav className="container-large flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                        <Image
                            src="/logo.png"
                            alt="John Enterprises Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                            John Enterprises
                        </span>
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest leading-none">
                            Precision Engineering
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.href}
                                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1"
                            >
                                {item.name}
                                {item.children && <ChevronDown className="w-4 h-4" />}
                            </Link>
                            {item.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                                    <div className="bg-white border border-slate-200 rounded-xl p-4 min-w-[260px] shadow-xl grid grid-cols-1 gap-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-all truncate"
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

                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-600">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold">+91 72000 92393</span>
                    </div>
                    <Button variant="primary" size="sm" asChild>
                        <Link href="/contact">Free Audit</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 m-4 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 lg:hidden max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <div key={item.name} className="flex flex-col">
                                    <Link
                                        href={item.href}
                                        className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors px-2 py-1"
                                        onClick={() => !item.children && setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-slate-100">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="text-sm font-medium text-slate-600 hover:text-blue-600 px-2 py-1"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="h-px bg-slate-100 my-2" />
                            <Button variant="primary" size="lg" className="w-full justify-between" asChild>
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
