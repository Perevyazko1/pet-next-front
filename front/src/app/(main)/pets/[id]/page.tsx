import { PetDetailPage } from '@/pages/pets';
import { Suspense } from 'react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';

  try {
    const res = await fetch(`${backendUrl}/api/pets/${id}/`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error();
    const pet = await res.json();
    const description = pet.description?.slice(0, 160) ?? '';

    return {
      title: pet.title,
      description,
      alternates: { canonical: `https://paws-pets.ru/pets/${id}` },
      openGraph: {
        title: `${pet.title} | Приют Лапки`,
        description,
        url: `https://paws-pets.ru/pets/${id}`,
        images: pet.image ? [{ url: pet.image, alt: pet.alt_image }] : [],
      },
    };
  } catch {
    return { title: 'Питомец' };
  }
}

export default async function PetDetail({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={null}>
      <PetDetailPage id={Number(id)} />
    </Suspense>
  );
}
