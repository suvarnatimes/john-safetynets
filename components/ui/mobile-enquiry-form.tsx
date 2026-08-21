"use client"

import { useState } from "react"
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react"

export function MobileEnquiryForm() {
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || phone.trim().length < 8) return

    setSubmitted(true)
    // Dispatch to WhatsApp lead handler
    const message = encodeURIComponent(`Hi John Enterprises, I want a safety nets quote. My contact number is: ${phone}`)
    window.open(`https://wa.me/917200092393?text=${message}`, "_blank")
  }

  return (
    <div className="w-full">
      {submitted ? (
        <div className="bg-white/15 border border-white/30 rounded-2xl p-4 text-center text-white space-y-1">
          <div className="flex items-center justify-center gap-1.5 font-black text-sm text-green-300">
            <CheckCircle2 className="w-4 h-4" />
            Thank you! Connecting to WhatsApp...
          </div>
          <p className="text-xs text-white/80">Our safety specialist will call you immediately.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Please Enter Your Contact Number"
              className="w-full h-12 bg-white text-slate-900 placeholder:text-slate-400 font-bold text-xs sm:text-sm pl-4 pr-11 rounded-full border-2 border-white/80 focus:outline-hidden focus:border-yellow-400 shadow-md"
            />
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-700 pointer-events-none">
              <Phone className="w-4 h-4" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black text-xs sm:text-sm rounded-full shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase transition-all"
          >
            <span>Enquiry Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  )
}
