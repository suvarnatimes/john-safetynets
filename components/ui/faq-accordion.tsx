"use client"

import { useState } from "react"
import { ChevronDown, Sparkles } from "lucide-react"

export interface FAQItem {
  question: string
  answer: string
  tag?: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={idx}
            className={`border-2 rounded-[3px] transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-blue-600 bg-white shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 focus:outline-hidden"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-[2px] flex items-center justify-center shrink-0 text-xs font-black transition-colors ${
                    isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  Q{idx + 1}
                </div>
                <span className="text-xs sm:text-sm md:text-base font-black text-slate-900 leading-snug">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-blue-600" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-slate-100">
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-3">
                  {item.answer}
                </p>
                {item.tag && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-wider rounded-[2px]">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.tag}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
