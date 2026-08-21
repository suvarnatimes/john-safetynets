import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data"
import { services, cities } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, Phone, MapPin, BookOpen, MessageCircle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

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

    const featuredServices = services.filter(s => s.isFeatured).slice(0, 4)

    return (
        <div className="min-h-screen bg-slate-50 pt-28 lg:pt-20 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            
            <div className="container-large">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-xs text-slate-500 font-bold mb-3" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
                    <span className="mx-1.5 text-slate-400">/</span>
                    <Link href="/blog" className="hover:text-blue-700 transition-colors">Blog</Link>
                    <span className="mx-1.5 text-slate-400">/</span>
                    <span className="text-slate-900 font-black line-clamp-1">{post.title}</span>
                </nav>

                <div className="mb-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-xs font-black uppercase tracking-wider text-slate-600 hover:text-blue-700 transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                        Back to Articles
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Main Content Area */}
                    <article className="lg:col-span-8 bg-white border-2 border-slate-200 rounded-[3px] p-5 sm:p-7 md:p-8 shadow-xs">
                        {/* Title block */}
                        <div className="pb-4 mb-6 border-b border-slate-200">
                            <span className="inline-block text-[10px] font-black text-blue-800 uppercase tracking-widest bg-blue-100 px-2 py-0.5 rounded-[2px] border border-blue-200 mb-2">
                                {post.targetKeyword}
                            </span>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5 text-blue-700" />
                                    {post.publishedDate}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5 text-blue-700" />
                                    {post.readTime}
                                </span>
                                <span>•</span>
                                <span>By {post.author}</span>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-[16/9] rounded-[2px] overflow-hidden border border-slate-200 shadow-xs relative bg-slate-100 mb-6">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 66vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Article Text Content */}
                        <div 
                            className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight prose-a:text-blue-700 prose-a:font-bold hover:prose-a:underline prose-table:border prose-table:border-slate-300 prose-th:bg-slate-100 prose-th:p-2.5 prose-th:text-xs prose-td:p-2.5 prose-td:text-xs prose-tr:border-b"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Sidebar CTA Area */}
                    <aside className="lg:col-span-4 space-y-4 sticky top-20">
                        {/* Service booking CTA Card */}
                        <div className="bg-slate-900 text-white rounded-[3px] p-5 border-2 border-slate-800 shadow-lg">
                            <div className="flex items-center gap-2 text-yellow-400 text-xs font-black uppercase tracking-wider mb-2">
                                <ShieldCheck className="w-4 h-4" />
                                Direct Quote & Site Visit
                            </div>
                            
                            <h3 className="text-base sm:text-lg font-black tracking-tight mb-2">
                                Professional Safety Net Installations
                            </h3>
                            <p className="text-slate-300 text-xs mb-4 leading-relaxed">
                                Get certified UV-resistant safety nets, insect screens, and 316 marine-grade invisible grills with a 5-year written warranty.
                            </p>

                            <div className="space-y-2">
                                <Button variant="call" size="sm" className="w-full h-9 font-black text-xs" asChild>
                                    <a href="tel:+917200092393" className="flex items-center justify-center gap-1.5">
                                        <Phone className="w-3.5 h-3.5 animate-pulse" />
                                        <span>Call: +91 72000 92393</span>
                                    </a>
                                </Button>
                                <Button variant="whatsapp" size="sm" className="w-full h-9 font-black text-xs" asChild>
                                    <a href="https://wa.me/917200092393" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                                        <MessageCircle className="w-3.5 h-3.5" />
                                        <span>WhatsApp Quote</span>
                                    </a>
                                </Button>
                                <Button variant="white" size="sm" className="w-full h-9 font-black text-xs" asChild>
                                    <Link href="/contact">Book Free Site Survey</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Local Service Cities Card */}
                        <div className="bg-white border-2 border-slate-200 rounded-[3px] p-4 shadow-xs">
                            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3 pb-1 border-b border-slate-100 flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                                Local Branch Offices
                            </h3>
                            <div className="space-y-2">
                                {cities.map((city) => (
                                    <div key={city.slug} className="p-2.5 bg-slate-50 border border-slate-200 rounded-[2px]">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-black text-slate-900 text-xs">{city.name}</h4>
                                            <a href={`tel:${city.phone.replace(/\s+/g, '')}`} className="text-[11px] text-blue-700 font-bold hover:underline">
                                                {city.phone}
                                            </a>
                                        </div>
                                        <p className="text-[11px] text-slate-500 truncate mt-0.5">{city.officeAddress}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Popular Services Quick Links */}
                        <div className="bg-white border-2 border-slate-200 rounded-[3px] p-4 shadow-xs">
                            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3 pb-1 border-b border-slate-100 flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                                Popular Services
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {featuredServices.map(service => (
                                    <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        className="px-2.5 py-1 bg-slate-100 border border-slate-200 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-[2px] text-slate-750 text-xs font-bold transition-colors truncate"
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}
