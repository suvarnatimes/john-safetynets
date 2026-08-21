"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Send, MessageSquare, MessageCircle } from "lucide-react"

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        city: "Chennai",
        requirement: "Balcony Safety Nets",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { name, phone, city, requirement, message } = formData

        const text = `*New Inquiry for John Enterprises*%0A%0A` +
            `*Name:* ${name}%0A` +
            `*Phone:* ${phone}%0A` +
            `*City:* ${city}%0A` +
            `*Requirement:* ${requirement}%0A` +
            `*Message:* ${message}`

        const whatsappUrl = `https://wa.me/917200092393?text=${text}`
        window.open(whatsappUrl, "_blank")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-28 lg:pt-20 pb-16">
            <div className="container-large">
                {/* Header */}
                <div className="bg-white border-2 border-slate-200 rounded-[3px] p-6 sm:p-8 mb-6 shadow-xs">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-blue-100 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-wider mb-3">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Direct Customer Support & Site Bookings
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                        Schedule a Free Site Inspection & Measurement
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-3xl leading-relaxed">
                        Contact our local safety engineers directly for same-day site visits, custom pricing quotes, and professional installation inquiries in Chennai, Pondicherry, and Trichy.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left: Contact Info Strip */}
                    <div className="lg:col-span-4 space-y-4">
                        {[
                            { icon: <Phone className="w-5 h-5 text-red-600" />, label: "Call Customer Support", val: "+91 72000 92393", sub: "Available 8:00 AM - 9:00 PM Daily", href: "tel:+917200092393" },
                            { icon: <MessageCircle className="w-5 h-5 text-green-600" />, label: "WhatsApp Direct Chat", val: "+91 72000 92393", sub: "Instant Photo Estimate & Quotes", href: "https://wa.me/917200092393" },
                            { icon: <Mail className="w-5 h-5 text-blue-600" />, label: "Email Inquiries", val: "johnsafetynets7@gmail.com", sub: "Quick Response Guaranteed", href: "mailto:johnsafetynets7@gmail.com" },
                            { icon: <MapPin className="w-5 h-5 text-slate-800" />, label: "Service Hubs", val: "Chennai • Pondicherry • Trichy", sub: "Same-Day Site Visit Coverage", href: "#" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-2 border-slate-200 rounded-[3px] p-4 shadow-xs flex items-start gap-3.5">
                                <div className="w-10 h-10 rounded-[2px] bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{item.label}</div>
                                    <a href={item.href} className="text-xs sm:text-sm font-black text-slate-900 hover:text-blue-700 block truncate">
                                        {item.val}
                                    </a>
                                    <div className="text-[11px] text-slate-500 font-semibold">{item.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Booking Form */}
                    <div className="lg:col-span-8 bg-white border-2 border-slate-200 rounded-[3px] p-6 sm:p-8 shadow-xs">
                        <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                            Book Free Site Audit & Quote
                        </h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                                        Your Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. Ramesh Kumar"
                                        className="w-full bg-white border-2 border-slate-300 rounded-[2px] px-3.5 py-2 text-slate-900 focus:outline-none focus:border-blue-700 font-bold text-xs sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                                        Phone / Mobile Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. 9876543210"
                                        className="w-full bg-white border-2 border-slate-300 rounded-[2px] px-3.5 py-2 text-slate-900 focus:outline-none focus:border-blue-700 font-bold text-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                                        Select City *
                                    </label>
                                    <select
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full bg-white border-2 border-slate-300 rounded-[2px] px-3.5 py-2 text-slate-900 focus:outline-none focus:border-blue-700 font-bold text-xs sm:text-sm"
                                    >
                                        <option value="Chennai">Chennai</option>
                                        <option value="Pondicherry">Pondicherry (Puducherry)</option>
                                        <option value="Trichy">Trichy (Tiruchirappalli)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                                        Required Service *
                                    </label>
                                    <select
                                        name="requirement"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        className="w-full bg-white border-2 border-slate-300 rounded-[2px] px-3.5 py-2 text-slate-900 focus:outline-none focus:border-blue-700 font-bold text-xs sm:text-sm"
                                    >
                                        <option value="Balcony Safety Nets">Balcony Safety Nets</option>
                                        <option value="Invisible Grills">316 Marine-Grade Invisible Grills</option>
                                        <option value="Pigeon Nets">Pigeon & Anti-Bird Nets</option>
                                        <option value="Children Safety Nets">Children Safety Nets</option>
                                        <option value="Pet Safety Nets">Pet Safety Nets</option>
                                        <option value="Sports Practice Nets">Sports Practice Nets</option>
                                        <option value="Duct Area Nets">Duct Area Safety Nets</option>
                                        <option value="Cloth Hanger Services">Ceiling Cloth Hangers</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                                    Message / Address / Approx Dimensions
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Enter your location / neighborhood, balcony size, or specific requirements..."
                                    className="w-full bg-white border-2 border-slate-300 rounded-[2px] px-3.5 py-2 text-slate-900 focus:outline-none focus:border-blue-700 font-bold text-xs sm:text-sm resize-none"
                                />
                            </div>

                            <Button type="submit" variant="primary" size="lg" className="w-full h-11 text-xs sm:text-sm font-black uppercase tracking-wider">
                                <span>Submit & Connect on WhatsApp</span>
                                <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
