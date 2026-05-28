import { Inter, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/ui/floating-buttons";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://johnbalconysafetynets.com'),
  title: "John Enterprises | Premium Safety Nets in Chennai, Pondicherry & Trichy",
  description: "High-quality invisible grills, pigeon nets, sports nets, and balcony safety nets. Professional installation in Chennai, Pondicherry, and Trichy.",
  keywords: "Pigeon nets service, Invisible grills Balcony, Duct area safety nets, Sports practice nets, Balcony safety nets, Cloth Hanger services",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, spaceGrotesk.variable, outfit.variable, "min-h-screen flex flex-col antialiased font-inter overflow-x-hidden")}>
        <Navbar />
        <main className="flex-1 flex flex-col pt-16">
          {children}
        </main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
