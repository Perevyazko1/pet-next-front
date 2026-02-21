import { PetDetailPage } from '@/pages/pets';
import { Suspense } from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PetDetail({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={null}>
      <PetDetailPage id={Number(id)} />
    </Suspense>
  );
}
