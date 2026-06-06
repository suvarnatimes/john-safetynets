import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { FadeIn } from "@/components/ui/fade-in"

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
        <div className="min-h-screen bg-slate-50 pt-24 pb-24 relative overflow-hidden">
            {/* Background design */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 pointer-events-none" />
            <InteractiveGrid className="opacity-20 text-blue-100" />
            
            <div className="container-large relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6">
                            <BookOpen className="w-3.5 h-3.5" />
                            Knowledge Base
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-none">
                            Safety & Netting <span className="text-blue-600">Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-650 leading-relaxed font-medium">
                            Expert advice, pricing guides, and installation safety tips from Chennai, Pondicherry, and Trichy's leading safety nets installer.
                        </p>
                    </FadeIn>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {blogPosts.map((post, idx) => (
                        <FadeIn key={post.slug} delay={idx * 0.1}>
                            <article className="group bg-white rounded-[2rem] border border-slate-200/80 overflow-hidden hover:border-blue-600/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                                {/* Image Container */}
                                <div className="aspect-[16/10] overflow-hidden relative bg-slate-200">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content Container */}
                                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                                    <div className="space-y-4">
                                        {/* Metadata row */}
                                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                                                {post.publishedDate}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5 text-blue-500" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-650 transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h2>

                                        <p className="text-slate-600 font-medium text-base leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    {/* Read more footer */}
                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                                            {post.targetKeyword}
                                        </span>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors group-hover:translate-x-1.5 transition-transform"
                                        >
                                            Read Article
                                            <ArrowRight className="w-4 h-4 ml-1.5" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    )
}
