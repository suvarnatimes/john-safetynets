import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
    title: 'Contact Us | John Enterprises Safety Nets',
    description: 'Get in touch with our engineering team for immediate technical consultation and on-site safety assessments in Chennai, Pondicherry, and Trichy.',
    openGraph: {
        title: 'Contact John Enterprises',
        description: 'Book a free safety audit in Chennai, Pondicherry, or Trichy.',
        type: 'website',
    }
}

export default function ContactPage() {
    return <ContactClient />
}
