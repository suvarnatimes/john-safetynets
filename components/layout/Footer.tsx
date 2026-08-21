"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowUp } from "lucide-react"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-slate-900 text-slate-300 border-t-4 border-blue-600 py-10 md:py-14">
            <div className="container-large">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 mb-10 pb-10 border-b border-slate-800">
                    {/* Column 1: Brand & Bio */}
                    <div className="lg:col-span-4 space-y-4">
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="relative w-10 h-10 bg-white rounded-[2px] p-0.5">
                                <Image
                                    src="/logo.png"
                                    alt="John Enterprises Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                                    John Enterprises
                                </span>
                                <span className="text-[10px] font-black text-yellow-400 uppercase tracking-widest leading-none">
                                    Balcony Safety & Pigeon Nets
                                </span>
                            </div>
                        </Link>

                        <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                            South India&apos;s most trusted provider of premium invisible grills, anti-pigeon balcony nets, child safety nets, and sports practice netting systems across Chennai, Pondicherry, and Trichy.
                        </p>

                        <div className="flex items-center gap-2 pt-1">
                            {[
                                { Icon: Instagram, href: "https://instagram.com/johnenterprises_safetynets", label: "Instagram" },
                                { Icon: Facebook, href: "https://facebook.com/johnenterprisessafetynets", label: "Facebook" },
                                { Icon: Twitter, href: "https://twitter.com/johnsafetynets", label: "Twitter" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-8 h-8 rounded-[3px] border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:text-white hover:bg-blue-600 transition-all shadow-xs"
                                >
                                    <social.Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-3.5 pb-1 border-b border-slate-800">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-xs font-bold">
                            {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                        className="text-slate-400 hover:text-white hover:underline transition-colors block"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Core Services */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-3.5 pb-1 border-b border-slate-800">
                            Our Services
                        </h4>
                        <ul className="space-y-2 text-xs font-bold">
                            {[
                                { label: "Invisible Balcony Grills", href: "/services/invisible-grill-balcony-safety-nets" },
                                { label: "Invisible Pigeon Nets", href: "/services/invisible-pigeon-net" },
                                { label: "Children's Safety Nets", href: "/services/invisible-childrens-safety" },
                                { label: "Sports Practice Nets", href: "/services/sports-practice-nets" },
                                { label: "Duct Area Safety Nets", href: "/services/duct-area-nets" },
                                { label: "Ceiling Cloth Hangers", href: "/services/cloth-hanger-services" },
                                { label: "Pets Safety Nets", href: "/services/pets-safety-nets" },
                            ].map((service) => (
                                <li key={service.label}>
                                    <Link
                                        href={service.href}
                                        className="text-slate-400 hover:text-white hover:underline transition-colors block"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Locations & Popular Local Nets (SEO Crosslinks) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-3.5 pb-1 border-b border-slate-800">
                            Service Locations
                        </h4>
                        <ul className="space-y-2 text-xs font-bold mb-4">
                            {[
                                { name: "Chennai Hub", href: "/location/chennai", address: "Anna Nagar, Chennai" },
                                { name: "Pondicherry Hub", href: "/location/pondicherry", address: "White Town, Puducherry" },
                                { name: "Trichy Hub", href: "/location/trichy", address: "Thillai Nagar, Trichy" }
                            ].map((loc) => (
                                <li key={loc.name}>
                                    <Link
                                        href={loc.href}
                                        className="text-slate-300 hover:text-white transition-colors block font-black"
                                    >
                                        {loc.name}
                                    </Link>
                                    <span className="text-[11px] text-slate-500 block leading-none">{loc.address}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Popular Local Nets SEO Cross-Linking */}
                        <div className="pt-2 border-t border-slate-800">
                            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                                Popular Local Nets
                            </h5>
                            <ul className="space-y-1.5 text-xs">
                                <li>
                                    <Link
                                        href="/location/chennai/invisible-pigeon-net"
                                        className="text-slate-400 hover:text-blue-400 transition-colors block"
                                    >
                                        • Chennai Pigeon Nets
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/location/pondicherry/invisible-grill-balcony-safety-nets"
                                        className="text-slate-400 hover:text-blue-400 transition-colors block"
                                    >
                                        • Pondicherry Invisible Grills
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/location/trichy/sports-practice-nets"
                                        className="text-slate-400 hover:text-blue-400 transition-colors block"
                                    >
                                        • Trichy Sports Nets
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 px-5 bg-slate-950 border border-slate-800 rounded-[3px] mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-[2px] bg-red-600 flex items-center justify-center text-white shrink-0">
                            <Phone className="w-4 h-4" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Phone Call</div>
                            <a href="tel:+917200092393" className="text-xs sm:text-sm font-black text-white hover:text-blue-400">
                                +91 72000 92393
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-[2px] bg-blue-600 flex items-center justify-center text-white shrink-0">
                            <Mail className="w-4 h-4" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Email Inquiry</div>
                            <a href="mailto:johnsafetynets7@gmail.com" className="text-xs sm:text-sm font-black text-white hover:text-blue-400 truncate block">
                                johnsafetynets7@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-[2px] bg-green-600 flex items-center justify-center text-white shrink-0">
                            <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Service Coverage</div>
                            <div className="text-xs sm:text-sm font-bold text-white">
                                Chennai • Pondicherry • Trichy
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright & Disclaimer Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
                    <p>
                        © {new Date().getFullYear()} John Enterprises. All rights reserved. Professional Safety Netting & Invisible Grills.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <button
                            onClick={scrollToTop}
                            aria-label="Scroll back to top"
                            className="w-8 h-8 rounded-[2px] bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors shadow-xs"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
