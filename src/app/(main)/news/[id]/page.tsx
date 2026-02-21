import { NewsDetailPage } from '@/pages/news';
import { Suspense } from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={null}>
      <NewsDetailPage id={Number(id)} />
    </Suspense>
  );
}
