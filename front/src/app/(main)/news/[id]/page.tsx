import { NewsDetailPage } from '@/pages/news';
import { Suspense } from 'react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';

  try {
    const res = await fetch(`${backendUrl}/api/news/${id}/`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error();
    const news = await res.json();
    const description = news.description?.slice(0, 160) ?? '';

    return {
      title: news.title,
      description,
      alternates: { canonical: `https://paws-pets.ru/news/${id}` },
      openGraph: {
        type: 'article',
        title: `${news.title} | Приют Лапки`,
        description,
        url: `https://paws-pets.ru/news/${id}`,
        images: news.image ? [{ url: news.image, alt: news.alt_image }] : [],
        publishedTime: news.date,
      },
    };
  } catch {
    return { title: 'Новость' };
  }
}

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={null}>
      <NewsDetailPage id={Number(id)} />
    </Suspense>
  );
}
