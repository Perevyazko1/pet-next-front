import { NewsPage } from '@/pages/news';
import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Новости',
  description:
    'Последние новости приюта для животных Лапки — истории спасения, события и достижения нашего приюта.',
  alternates: { canonical: 'https://paws-pets.ru/news' },
  openGraph: {
    title: 'Новости | Приют Лапки',
    description:
      'Последние новости приюта для животных Лапки — истории спасения, события и достижения нашего приюта.',
    url: 'https://paws-pets.ru/news',
  },
};

export default async function News() {
  return (
    <Suspense fallback={null}>
      <NewsPage />
    </Suspense>
  );
}
