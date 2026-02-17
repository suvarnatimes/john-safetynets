"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, ShieldCheck, Clock, Zap, MessageSquare } from "lucide-react"
import { InteractiveGrid } from "@/components/ui/interactive-grid"

export default function ContactPage() {
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
                        <MessageSquare className="w-4 h-4" />
                        Communication Hub
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tight leading-[0.9] mb-8"
                    >
                        Schedule a <br /><span className="text-blue-600">Safety Audit.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed"
                    >
                        Connect with our engineering team for immediate technical consultation and
                        on-site safety assessments in Chennai.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Information Strip */}
                    <div className="lg:col-span-4 space-y-8">
                        {[
                            { icon: <Phone className="w-6 h-6" />, label: "Direct Support", val: "+91 72000 92393", sub: "Available 9am - 8pm" },
                            { icon: <Mail className="w-6 h-6" />, label: "Technical Inquiry", val: "info@johnsafetynets.com", sub: "Response within 2 hours" },
                            { icon: <MapPin className="w-6 h-6" />, label: "Service Hub", val: "Chennai, Tamil Nadu", sub: "Covering all city zones" }
                        ].map((item, i) => (
                            <div key={i} className="tech-card rounded-[2rem] p-8 flex items-start gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                                    <div className="text-xl font-bold text-slate-900 mb-1">{item.val}</div>
                                    <div className="text-xs font-semibold text-slate-500">{item.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form Complex */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight uppercase tracking-tighter">Inquiry Portal</h3>
                                <form className="space-y-6">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Identification</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Legal Name"
                                                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold text-sm placeholder:text-slate-300"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone Contact"
                                                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold text-sm placeholder:text-slate-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Requirement Matrix</label>
                                        <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold text-sm">
                                            <option>Structural Audit (Invisible Grills)</option>
                                            <option>Safety Assessment (Pigeon Nets)</option>
                                            <option>Professional Facility Netting</option>
                                        </select>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Technical Brief</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Specify measurements, location, or architectural specifics..."
                                            className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold text-sm placeholder:text-slate-300 resize-none"
                                        />
                                    </div>

                                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-7">
                                        Initialize Protocol <Send className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            </div>

                            <div className="space-y-12 flex flex-col justify-center border-l border-slate-200 pl-16 hidden md:block">
                                <div className="space-y-8">
                                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest">Protocol Assurance</h4>
                                    {[
                                        { icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, title: "Technical Precision", text: "ISO certified measurement tools" },
                                        { icon: <Clock className="w-5 h-5 text-blue-600" />, title: "Fast Deployment", text: "24-hour site visit guarantee" },
                                        { icon: <Zap className="w-5 h-5 text-blue-600" />, title: "Expert Lead", text: "Consultation by senior engineers" }
                                    ].map((check, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="shrink-0 pt-1">{check.icon}</div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 mb-1">{check.title}</div>
                                                <div className="text-xs font-medium text-slate-500">{check.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 rounded-2xl bg-blue-600 text-white">
                                    <p className="text-xs font-bold leading-relaxed mb-4">"Our team is currently operating in high-priority zones across Chennai."</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Operational Status: High</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}
