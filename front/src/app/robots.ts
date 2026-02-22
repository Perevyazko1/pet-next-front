import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://paws-pets.ru/sitemap.xml',
    host: 'https://paws-pets.ru',
  };
}
