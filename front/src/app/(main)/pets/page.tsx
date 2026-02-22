import { PetsPage } from '@/pages/pets';
import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Питомцы',
  description: 'Найди своего нового питомца в приюте Лапки — собаки и кошки ждут любящего хозяина в Санкт-Петербурге.',
  alternates: { canonical: 'https://paws-pets.ru/pets' },
  openGraph: {
    title: 'Питомцы | Приют Лапки',
    description: 'Найди своего нового питомца в приюте Лапки — собаки и кошки ждут любящего хозяина в Санкт-Петербурге.',
    url: 'https://paws-pets.ru/pets',
  },
};

export default async function News() {
  return (
    <Suspense fallback={null}>
      <PetsPage />
    </Suspense>
  );
}
