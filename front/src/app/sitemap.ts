import type { MetadataRoute } from 'next';

const BASE_URL = 'https://paws-pets.ru';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';

async function fetchAllPages<T extends { id: number }>(
  endpoint: string,
): Promise<T[]> {
  const results: T[] = [];
  let url: string | null = `${BACKEND_URL}${endpoint}?page_size=100`;

  while (url) {
    try {
      const res: Response = await fetch(url, { next: { revalidate: 3600 } } as RequestInit);
      if (!res.ok) break;
      const data = await res.json();
      results.push(...(data.results ?? []));
      url = data.next ?? null;
    } catch {
      break;
    }
  }

  return results;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pets, news] = await Promise.all([
    fetchAllPages<{ id: number; created_at: string }>('/api/pets/'),
    fetchAllPages<{ id: number; date: string }>('/api/news/'),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/pets`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/news`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ];

  const petRoutes: MetadataRoute.Sitemap = pets.map((pet) => ({
    url: `${BASE_URL}/pets/${pet.id}`,
    lastModified: new Date(pet.created_at),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const newsRoutes: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${BASE_URL}/news/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...petRoutes, ...newsRoutes];
}
