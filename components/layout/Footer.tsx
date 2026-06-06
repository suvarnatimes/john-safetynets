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
                    <div className="lg:col-span-3 space-y-6">
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
                            Premium safety solutions engineered for precision. South India's leading provider of invisible grills and professional netting systems.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { Icon: Instagram, href: "https://instagram.com/johnenterprises_safetynets" },
                                { Icon: Facebook, href: "https://facebook.com/johnenterprisessafetynets" },
                                { Icon: Twitter, href: "https://twitter.com/johnsafetynets" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-blue-600 hover:text-blue-600 hover:bg-white transition-all shadow-sm"
                                >
                                    <social.Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map((link) => (
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
                            {[
                                { label: "Invisible Grills", href: "/services/invisible-grill-balcony-safety-nets" },
                                { label: "Pigeon Nets", href: "/services/invisible-pigeon-net" },
                                { label: "Sports Nets", href: "/services/sports-practice-nets" },
                                { label: "Children Safety", href: "/services/invisible-childrens-safety" },
                                { label: "Monkey Nets", href: "/services/monkey-safety-nets" },
                            ].map((service) => (
                                <li key={service.label}>
                                    <Link href={service.href} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Locations</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Chennai", address: "Anna Nagar, Chennai" },
                                { name: "Pondicherry", address: "White Town, Puducherry" },
                                { name: "Trichy", address: "Thillai Nagar, Trichy" }
                            ].map((loc) => (
                                <li key={loc.name}>
                                    <Link href={`/location/${loc.name.toLowerCase()}`} className="text-sm text-slate-500 hover:text-blue-600 transition-colors block font-semibold">
                                        {loc.name}
                                    </Link>
                                    <span className="text-[10px] text-slate-400 block mt-0.5 leading-tight">{loc.address}</span>
                                </li>
                            ))}
                        </ul>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-6 mb-3">Popular Local Nets</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/location/chennai/invisible-pigeon-net" className="text-xs text-slate-500 hover:text-blue-600 transition-colors">
                                    Chennai Pigeon Nets
                                </Link>
                            </li>
                            <li>
                                <Link href="/location/pondicherry/invisible-grill-balcony-safety-nets" className="text-xs text-slate-500 hover:text-blue-600 transition-colors">
                                    Pondicherry Grills
                                </Link>
                            </li>
                            <li>
                                <Link href="/location/trichy/sports-practice-nets" className="text-xs text-slate-500 hover:text-blue-600 transition-colors">
                                    Trichy Sports Nets
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">
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
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">Office Hubs</p>
                                    <p className="text-xs font-semibold text-slate-650">
                                        Chennai | Puducherry | Trichy
                                    </p>
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
