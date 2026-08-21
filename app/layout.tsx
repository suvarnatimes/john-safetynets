import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/ui/floating-buttons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://johnbalconysafetynets.com'),
  title: "John Enterprises | Premium Safety Nets in Chennai, Pondicherry & Trichy",
  description: "High-quality invisible grills, pigeon nets, sports nets, and balcony safety nets. Professional installation in Chennai, Pondicherry, and Trichy.",
  keywords: "Pigeon nets service, Invisible grills Balcony, Duct area safety nets, Sports practice nets, Balcony safety nets, Cloth Hanger services",
  alternates: {
    canonical: 'https://johnbalconysafetynets.com',
  },
  icons: {
    icon: '/logo.ico',
    apple: '/logo.png',
  },
  verification: {
    google: "p5yGXwViT7sjb0FrwubUroEyZHrtTSh-VDhA4qsn7Mw",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "John Enterprises",
    "url": "https://johnbalconysafetynets.com",
    "logo": "https://johnbalconysafetynets.com/logo.png",
    "telephone": "+91-72000-92393",
    "email": "johnsafetynets7@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "areaServed": ["Chennai", "Pondicherry", "Trichy"],
    "priceRange": "₹₹"
  }

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-inter overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="flex-1 flex flex-col pt-0">
          {children}
        </main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
