import { MetadataRoute } from 'next'
import { services, cities } from '@/lib/data'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://johnbalconysafetynets.com'
    const lastModDate = new Date('2026-06-06') // Updated to reflect Phase 2 launch date
    
    // Core standard routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/gallery',
        '/services',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastModDate,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))
    
    // Standard service routes
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: lastModDate,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }))
    
    // City landing routes
    const cityRoutes = cities.map((city) => ({
        url: `${baseUrl}/location/${city.slug}`,
        lastModified: lastModDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))
    
    // City + Service routes
    const cityServiceRoutes: MetadataRoute.Sitemap = []
    
    cities.forEach((city) => {
        services.forEach((service) => {
            cityServiceRoutes.push({
                url: `${baseUrl}/location/${city.slug}/${service.slug}`,
                lastModified: lastModDate,
                changeFrequency: 'monthly' as const,
                priority: 0.75,
            })
        })
    })

    // Blog post routes
    const blogPostRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))
 
    return [...routes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes, ...blogPostRoutes]
}
