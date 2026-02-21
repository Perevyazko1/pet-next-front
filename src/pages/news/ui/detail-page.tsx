'use client';

import React from 'react';
import { Container } from '@/shared/ui/Container';
import { InfoCard } from '@/shared/ui/info-card';
import { useNewsRetrieve } from '@/shared/api/news/news';
import { Spinner } from '@heroui/spinner';

interface Props {
  id: number;
}

export const NewsDetailPage = ({ id }: Props) => {
  const { data, isLoading } = useNewsRetrieve(id);

  if (isLoading) {
    return (
      <Container>
        <div className="flex justify-center py-20">
          <Spinner size="lg" />
        </div>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container>
        <p className="py-20 text-center text-text-primary">Не найдено</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mx-auto max-w-[800px]">
        <InfoCard info={data} isNews isModal />
      </div>
    </Container>
  );
};
