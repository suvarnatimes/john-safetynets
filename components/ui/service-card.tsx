"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
    slug: string
    title: string
    desc: string
    image: string
    isFeatured?: boolean
}

interface ServiceCardProps {
    service: Service
    index?: number
    href?: string
}

export function ServiceCard({ service, href }: ServiceCardProps) {
    const targetHref = href || `/services/${service.slug}`

    return (
        <div className="group bg-white border-2 border-slate-200 hover:border-blue-600 rounded-[3px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={80}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[2px] shadow">
                    Verified
                </div>
            </div>

            {/* Content Container */}
            <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div>
                    <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-1 mb-1.5">
                        <Link href={targetHref}>
                            {service.title}
                        </Link>
                    </h3>
                    <p className="text-xs text-slate-600 font-medium line-clamp-2 leading-relaxed">
                        {service.desc}
                    </p>
                </div>

                {/* Dense Action Row */}
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                    <Button variant="primary" size="sm" asChild className="flex-1 text-xs py-1.5 h-8">
                        <Link href={targetHref} className="flex items-center justify-center gap-1">
                            <span>View Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </Button>
                    <Button variant="call" size="sm" asChild className="px-2.5 h-8">
                        <a href="tel:+917200092393" aria-label={`Call for ${service.title}`}>
                            <Phone className="w-3.5 h-3.5" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
