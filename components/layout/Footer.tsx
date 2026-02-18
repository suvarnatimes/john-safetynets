"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowUp } from "lucide-react"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-16 md:py-24">
            <div className="container-large">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="John Enterprises Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">John Enterprises</span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            Premium safety solutions engineered for precision. Chennai's leading provider of invisible grills and professional netting systems.
                        </p>
                        <div className="flex items-center gap-3">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-blue-600 hover:text-blue-600 hover:bg-white transition-all shadow-sm"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Services</h4>
                        <ul className="space-y-4">
                            {["Invisible Grills", "Pigeon Nets", "Sports Nets", "Bird Protection", "Safety Audits"].map((service) => (
                                <li key={service}>
                                    <Link href="/services" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Reach Us</h4>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">Call Today</p>
                                    <p className="text-sm font-bold text-slate-900">+91 72000 92393</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">Email Support</p>
                                    <p className="text-sm font-bold text-slate-900">johnsafetynets7@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs font-semibold text-slate-400">
                        © 2024 John Enterprises. All rights reserved. | Developed by <span className="text-blue-600 font-bold uppercase tracking-tighter">AltarVision</span>
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-xs font-semibold text-slate-400 hover:text-blue-600 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs font-semibold text-slate-400 hover:text-blue-600 transition-colors">Terms of Service</Link>
                        <button
                            onClick={scrollToTop}
                            className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm group"
                        >
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
