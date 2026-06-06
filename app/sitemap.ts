import { MetadataRoute } from 'next'
import { services, cities } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://johnbalconysafetynets.com'
    const lastModDate = new Date('2026-05-01') // Static date to optimize crawl budget
    
    // Core standard routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/gallery',
        '/services',
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
    
    // City + Service routes - ONLY include canonical service slugs (NO SEO alias duplicates)
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

    return [...routes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes]
}
