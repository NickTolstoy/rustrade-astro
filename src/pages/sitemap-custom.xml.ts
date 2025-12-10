import type { APIRoute } from 'astro';
import { newsArticles } from '@/data/news';

const SITE_URL = 'https://rustrade.pro';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternates?: Array<{ hreflang: string; href: string }>;
}

function generateUrl(url: SitemapUrl): string {
  let xml = `  <url>\n`;
  xml += `    <loc>${url.loc}</loc>\n`;
  
  if (url.lastmod) {
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
  }
  
  if (url.changefreq) {
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
  }
  
  if (url.priority !== undefined) {
    xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
  }
  
  // Add hreflang alternates for multilingual support
  if (url.alternates && url.alternates.length > 0) {
    url.alternates.forEach(alt => {
      xml += `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />\n`;
    });
  }
  
  xml += `  </url>\n`;
  return xml;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [];
  
  // Define static pages with their properties
  // New URL structure:
  // - Russian: /page (no prefix)
  // - English: /eng/page
  const staticPages = [
    { path: '', priority: 1.0, changefreq: 'daily' as const },
    { path: '/about', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/turbines', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/turbogenerators', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/blades', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/oil-coolers', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/condensers', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/cases', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/news', priority: 0.9, changefreq: 'daily' as const },
    { path: '/contacts', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/cooperation', priority: 0.6, changefreq: 'monthly' as const },
    { path: '/design', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/faq', priority: 0.6, changefreq: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' as const },
  ];
  
  // Generate URLs for Russian (root) and English (/eng)
  for (const page of staticPages) {
    const ruUrl = `${SITE_URL}${page.path || '/'}`;
    const enUrl = `${SITE_URL}/eng${page.path}`;
    
    const alternates = [
      { hreflang: 'ru', href: ruUrl },
      { hreflang: 'en', href: enUrl },
      { hreflang: 'x-default', href: ruUrl }
    ];
    
    // Russian version
    urls.push({
      loc: ruUrl,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
      alternates
    });
    
    // English version
    urls.push({
      loc: enUrl,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
      alternates
    });
  }
  
  // Add news articles
  for (const article of newsArticles) {
    const ruUrl = `${SITE_URL}/news/${article.slug}`;
    const enUrl = `${SITE_URL}/eng/news/${article.slug}`;
    
    const alternates = [
      { hreflang: 'ru', href: ruUrl },
      { hreflang: 'en', href: enUrl },
      { hreflang: 'x-default', href: ruUrl }
    ];
    
    // Russian version
    urls.push({
      loc: ruUrl,
      lastmod: article.date,
      changefreq: 'monthly',
      priority: 0.6,
      alternates
    });
    
    // English version
    urls.push({
      loc: enUrl,
      lastmod: article.date,
      changefreq: 'monthly',
      priority: 0.6,
      alternates
    });
  }
  
  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
  
  for (const url of urls) {
    xml += generateUrl(url);
  }
  
  xml += `</urlset>`;
  
  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
