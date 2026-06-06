import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data"
import { services, cities } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, Phone, MapPin, CheckCircle, BookOpen } from "lucide-react"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params
    const post = getBlogPostBySlug(params.slug)

    if (!post) {
        return {
            title: "Article Not Found",
        }
    }

    return {
        title: `${post.title} | John Enterprises`,
        description: post.metaDescription,
        alternates: {
            canonical: `https://johnbalconysafetynets.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            type: "article",
            publishedTime: post.publishedDate,
            authors: [post.author],
        }
    }
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage(props: Props) {
    const params = await props.params
    const post = getBlogPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    // Schema Markup for Article / BlogPosting
    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": `https://johnbalconysafetynets.com${post.image}`,
        "datePublished": post.publishedDate,
        "author": {
            "@type": "Organization",
            "name": "John Enterprises",
            "url": "https://johnbalconysafetynets.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "John Enterprises",
            "logo": {
                "@type": "ImageObject",
                "url": "https://johnbalconysafetynets.com/logo.png"
            }
        },
        "description": post.metaDescription,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://johnbalconysafetynets.com/blog/${post.slug}`
        }
    }

    // Fetch a couple of featured services for the sidebar CTA
    const featuredServices = services.filter(s => s.isFeatured).slice(0, 3)

    return (
        <div className="min-h-screen bg-white pt-24 pb-24 relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            <InteractiveGrid className="opacity-20 text-blue-100" />
            
            <div className="container-large relative z-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-slate-500 font-medium mb-12" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900 line-clamp-1">{post.title}</span>
                </nav>

                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors group font-semibold text-sm"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog list
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Main Content Area */}
                    <article className="lg:col-span-8 space-y-8">
                        {/* Title block */}
                        <FadeIn>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                                {post.title}
                            </h1>

                            {/* Meta metrics */}
                            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-400 pb-8 border-b border-slate-100">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-600" />
                                    Published: {post.publishedDate}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    {post.readTime}
                                </span>
                                <span className="text-slate-350">|</span>
                                <span className="text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                                    Topic: {post.targetKeyword}
                                </span>
                            </div>
                        </FadeIn>

                        {/* Featured Image */}
                        <FadeIn delay={0.1}>
                            <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-slate-150 shadow-xl relative bg-slate-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                    className="object-cover"
                                />
                            </div>
                        </FadeIn>

                        {/* Article Text Content */}
                        <FadeIn delay={0.2}>
                            <div 
                                className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-table:border prose-table:border-slate-200 prose-th:bg-slate-50 prose-th:p-3 prose-td:p-3 prose-tr:border-b"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </FadeIn>
                    </article>

                    {/* Sidebar CTA Area */}
                    <aside className="lg:col-span-4 space-y-8 sticky top-24">
                        {/* Service booking CTA Card */}
                        <FadeIn delay={0.3} className="bg-slate-900 text-white rounded-[2rem] p-8 relative overflow-hidden shadow-2xl border border-slate-800">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full filter blur-[80px] opacity-40 -mr-16 -mt-16" />
                            
                            <h3 className="text-2xl font-bold tracking-tight mb-4 relative z-10">
                                Professional Safety Net Installations
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                Get certified UV-resistant safety nets, insect screens, and invisible grills with 5-year written warranty. Same-day site audit and estimation.
                            </p>
                            
                            {/* Key Highlights */}
                            <ul className="space-y-3 mb-8 text-sm text-slate-300 font-medium">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                                    5-Year Warranty Certificate
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                                    316 Marine-Grade Steel Cables
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                                    No Hidden Charges or Travel Fees
                                </li>
                            </ul>

                            <div className="space-y-4">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30" size="lg" asChild>
                                    <Link href="/contact">Book Free Site Survey</Link>
                                </Button>
                                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10" variant="outline" size="lg" asChild>
                                    <a href="tel:+917200092393"><Phone className="w-4 h-4 mr-2" /> Call +91 72000 92393</a>
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Local Service Cities Card */}
                        <FadeIn delay={0.4} className="bg-slate-50 border border-slate-200/80 rounded-[2rem] p-8">
                            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                Serviced Locations
                            </h3>
                            <div className="space-y-3">
                                {cities.map((city) => (
                                    <div key={city.slug} className="p-4 bg-white border border-slate-150 rounded-2xl hover:border-blue-600/30 transition-colors">
                                        <h4 className="font-bold text-slate-950 text-sm mb-1">{city.name} Office</h4>
                                        <p className="text-xs text-slate-500 line-clamp-1 mb-2">{city.officeAddress}</p>
                                        <a href={`tel:${city.phone.replace(/\s+/g, '')}`} className="text-xs text-blue-600 font-bold hover:underline inline-flex items-center">
                                            Call local representative <ArrowLeft className="w-3.5 h-3.5 ml-1 rotate-180" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Popular Services Quick Links */}
                        <FadeIn delay={0.5} className="bg-slate-50 border border-slate-200/80 rounded-[2rem] p-8">
                            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-blue-600" />
                                Popular Services
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {featuredServices.map(service => (
                                    <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        className="px-3.5 py-2 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-xl text-slate-700 text-xs font-bold transition-all shadow-sm"
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </FadeIn>
                    </aside>
                </div>
            </div>
        </div>
    )
}
