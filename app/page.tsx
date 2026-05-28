
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { services } from "@/lib/data"
import { Award, ShieldCheck, Users, Zap, ArrowRight, Play } from "lucide-react"
import { ScrollingImages } from "@/components/ui/scrolling-images"
import dynamic from "next/dynamic"
const InteractiveGrid = dynamic(() => import("@/components/ui/interactive-grid").then(mod => mod.InteractiveGrid))
import { FadeIn } from "@/components/ui/fade-in"
import { ServiceCard } from "@/components/ui/service-card"

export default function Home() {
  const features = [
    {
      title: "Precision Engineering",
      desc: "Our invisible grills are made from 316-grade stainless steel cables, offering ultra-high tensile strength with 0.5mm precision.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Impact Resistance",
      desc: "ISO-certified netting systems designed to withstand impacts beyond 200kg, ensuring absolute safety for high-rise balconies.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Professional Installation",
      desc: "Every project is executed by our team of certified safety engineers with over 10+ years of experience in Chennai.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-4 pb-4 md:py-8 overflow-hidden min-h-[40vh] md:min-h-[60vh] flex items-center">
        <InteractiveGrid className="opacity-60" />
        <div className="container-large relative z-10 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="max-w-4xl pt-4 lg:pt-0">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Award className="w-3.5 h-3.5" />
                  Chennai's Most Trusted Safety Partner
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 leading-[0.9]">
                  Safety Engineered <br />
                  <span className="text-blue-600">Without Limits.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-2xl font-medium leading-relaxed">
                  Premium invisible grills and safety net solutions that blend seamlessly with your architecture while providing maximum protection.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
                  <Button size="lg" variant="primary" asChild>
                    <Link href="/contact">Book Free Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/gallery">View Our Work <Play className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Scrolling Images Container */}
            <div className="relative w-full lg:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50%]">
              <div className="relative w-full h-full min-h-[200px] lg:min-h-0">
                <ScrollingImages />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Trust Bar */}
      <section className="border-y border-slate-100 py-12 bg-slate-50/50">
        <div className="container-large">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "500+", label: "Verified Projects" },
              { val: "10+", label: "Service Years" },
              { val: "5yr", label: "Product Warranty" },
              { val: "2hr", label: "Response Time" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.val}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                The Anatomy of <span className="text-blue-600">True Safety.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed">
                We don't just install nets; we engineer safety environments that protect your most valuable assets with clinical precision.
              </p>

            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="tech-card rounded-2xl p-8 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Wall */}
      <section className="section-padding bg-slate-50">
        <div className="container-large">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Solution <span className="text-blue-600">Matrix.</span></h2>
              <p className="text-lg text-slate-500 font-medium mt-4">Specialized protection systems for every architectural challenge.</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/services">Service Overview</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Callout */}
      <section className="py-32">
        <div className="container-large">
          <FadeIn className="bg-slate-900 rounded-3xl md:rounded-[3rem] p-8 md:p-24 relative overflow-hidden">
            <InteractiveGrid className="opacity-30 text-blue-400" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tighter leading-[1]">Your Safety, <br />Our Formula.</h2>
                <p className="text-xl text-slate-400 font-medium mb-12 max-w-lg leading-relaxed">
                  Join 500+ households in Chennai who have upgraded to our precision safety systems. Expert audit within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="white" className="w-full sm:w-auto" asChild>
                    <Link href="/contact">Inquiry Portal</Link>
                  </Button>
                  <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-transparent" asChild>
                    <Link href="tel:+917200092393">Call Support</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-slate-800 rounded-2xl border border-slate-700 animate-pulse" />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
