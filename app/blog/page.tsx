import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Calendar, Clock, ArrowRight, BookOpen, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Safety & Netting Insights Blog | John Enterprises",
    description: "Expert guides, pricing details, and comparison articles on balcony safety nets, pigeon netting, invisible grills, and ceiling cloth dryers in Chennai, Puducherry, and Trichy.",
    alternates: {
        canonical: "https://johnbalconysafetynets.com/blog",
    },
    openGraph: {
        title: "Safety & Netting Insights Blog | John Enterprises",
        description: "Expert guides, pricing details, and comparison articles on balcony safety nets, pigeon netting, invisible grills, and ceiling cloth dryers in Chennai, Puducherry, and Trichy.",
        type: "website",
    }
}

export default function BlogIndexPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-28 lg:pt-20 pb-16">
            <div className="container-large">
                {/* Header Section */}
                <div className="bg-white border-2 border-slate-200 rounded-[3px] p-6 sm:p-8 mb-6 shadow-xs">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-blue-100 border border-blue-200 text-blue-800 text-xs font-black uppercase tracking-wider mb-3">
                        <BookOpen className="w-3.5 h-3.5" />
                        Technical Articles & Cost Guides
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                        Safety Net & Balcony Grills Knowledge Hub
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-3xl leading-relaxed">
                        Expert advice, material comparisons, installation standards, and price estimation guides for balcony safety nets and invisible grills across Chennai, Pondicherry, and Trichy.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="bg-white border-2 border-slate-200 hover:border-blue-600 rounded-[3px] overflow-hidden shadow-xs flex flex-col justify-between transition-all">
                            {/* Image Container */}
                            <div className="aspect-[16/10] overflow-hidden relative bg-slate-100 border-b border-slate-200">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute top-2 left-2 bg-blue-700 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[2px]">
                                    {post.targetKeyword}
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                                <div className="space-y-2">
                                    {/* Metadata row */}
                                    <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5 text-blue-700" />
                                            {post.publishedDate}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5 text-blue-700" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-base sm:text-lg font-black text-slate-900 leading-snug hover:text-blue-700 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Read more footer */}
                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <Button variant="primary" size="sm" asChild className="h-8 text-xs font-black">
                                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                                            <span>Read Full Guide</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </Button>
                                    <Button variant="call" size="sm" asChild className="h-8 text-xs font-black">
                                        <a href="tel:+917200092393" className="flex items-center gap-1">
                                            <Phone className="w-3.5 h-3.5" />
                                            <span>Get Quote</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="bg-slate-900 border-2 border-slate-800 rounded-[3px] p-6 sm:p-8 text-white text-center shadow-lg">
                    <h2 className="text-xl sm:text-3xl font-black mb-2 tracking-tight">
                        Have Questions About Safety Net Types or Pricing?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto mb-6">
                        Speak directly with our senior safety engineer for free telephone consultation and immediate site assessment.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button variant="call" size="lg" asChild className="h-11 font-black text-sm">
                            <a href="tel:+917200092393">Call: +91 72000 92393</a>
                        </Button>
                        <Button variant="whatsapp" size="lg" asChild className="h-11 font-black text-sm">
                            <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer">WhatsApp Expert</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
