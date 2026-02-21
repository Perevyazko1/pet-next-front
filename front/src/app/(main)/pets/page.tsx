import { PetsPage } from '@/pages/pets';
import { Suspense } from 'react';

export default async function News() {
  return (
    <Suspense fallback={null}>
      <PetsPage />
    </Suspense>
  );
}
