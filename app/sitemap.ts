import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gltradingcompany.com';
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/box-board',
    '/coated-duplex-board',
    '/duplex-paper-board',
    '/kraft-paper-solutions',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
