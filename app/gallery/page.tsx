import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
    title: 'Project Gallery | John Enterprises Safety Nets',
    description: 'Explore our database of premium safety installations across residential, commercial, and industrial segments in Chennai, Pondicherry, and Trichy.',
    openGraph: {
        title: 'Project Archive | John Enterprises',
        description: 'View our safety net and invisible grill installations.',
        type: 'website',
    }
}

export default function GalleryPage() {
    return <GalleryClient />
}
