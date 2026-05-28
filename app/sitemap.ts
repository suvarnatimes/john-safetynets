import { MetadataRoute } from 'next'
import { services, cities } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://johnsafetynets.com' // Using a placeholder for their production URL
    
    // Core standard routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/gallery',
        '/services',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))
    
    // Standard service routes
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))
    
    // City landing routes
    const cityRoutes = cities.map((city) => ({
        url: `${baseUrl}/location/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))
    
    // City + Service routes
    const cityServiceRoutes: MetadataRoute.Sitemap = []
    
    cities.forEach((city) => {
        // Optimized keyword URLs
        const seoKeywords = [
            "pigeon-nets-service", 
            "invisible-grills-balcony", 
            "duct-area-safety-nets", 
            "sports-practice-nets",
            "balcony-safety-nets",
            "cloth-hanger-services"
        ]
        
        seoKeywords.forEach((keyword) => {
            cityServiceRoutes.push({
                url: `${baseUrl}/location/${city.slug}/${keyword}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.9, // Higher priority for local search keywords
            })
        })
        
        // Other general service URLs in this city
        services.forEach((service) => {
            if (!seoKeywords.includes(service.slug)) {
                cityServiceRoutes.push({
                    url: `${baseUrl}/location/${city.slug}/${service.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.7,
                })
            }
        })
    })

    return [...routes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes]
}
