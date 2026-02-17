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
  title: "John Safety Nets | Premium Safety Net Solutions in Chennai",
  description: "High-quality invisible grills, pigeon nets, sports nets, and more. Professional installation in Chennai.",
  icons: {
    icon: '/logo.ico',
    apple: '/logo.png',
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
