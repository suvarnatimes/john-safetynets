import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export async function getGalleryImages() {
    try {
        const results = await cloudinary.search
            .expression('resource_type:image AND folder:gallery')
            .sort_by('created_at', 'desc')
            .max_results(100)
            .execute();

        return results.resources.map((resource: any) => ({
            src: resource.secure_url,
            title: resource.context?.custom?.caption || "Safety Installation",
            category: resource.context?.custom?.category || "Project",
            client: resource.context?.custom?.client || "John Enterprises",
            public_id: resource.public_id
        }));
    } catch (error) {
        console.error("Cloudinary fetch error:", error);
        return [];
    }
}
