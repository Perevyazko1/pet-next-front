import { NewsPage } from '@/pages/news';
import { Suspense } from 'react';

export default async function News() {
  return (
    <Suspense fallback={null}>
      <NewsPage />
    </Suspense>
  );
}
