import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
    title: 'About Us | Premium Safety Nets in Chennai, Pondicherry & Trichy',
    description: 'Learn about John Enterprises, the leading provider of premium safety nets, invisible grills, and structural safety solutions in Chennai, Pondicherry, and Trichy.',
    openGraph: {
        title: 'About John Enterprises',
        description: 'Premium safety nets and invisible grills in Tamil Nadu.',
        type: 'website',
    }
}

export default function AboutPage() {
    return <AboutClient />
}
