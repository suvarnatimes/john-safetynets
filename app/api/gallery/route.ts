import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/cloudinary';

export async function GET() {
    try {
        const images = await getGalleryImages();
        return NextResponse.json(images);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
