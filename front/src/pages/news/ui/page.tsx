'use client';

import React, { useState } from 'react';
import { InfoCardInterface } from '@/entities/pets/Info-card';
import { Container } from '@/shared/ui/Container';
import { InfoCard } from '@/shared/ui/info-card';
import { useQueryParams } from '@/shared/hooks/useQueryParams';
import { CustomModalInfo } from '@/shared/ui/custom-modal-info';
import { useNewsList } from '@/shared/api/news/news';
import { trackView } from '@/shared/api/views/trackView';
import { InfoCardSkeleton } from '@/shared/ui/info-card/skeleton';

export const NewsPage = () => {
  const { data, isLoading } = useNewsList();
  const news = data?.results ?? [];

  const [currentNews, setCurrentNews] = useState<InfoCardInterface | null>(
    null,
  );
  const { setInfoId } = useQueryParams();

  const handleClick = (newsItem: InfoCardInterface) => {
    setCurrentNews(newsItem);
    setInfoId(`${newsItem.id}`);
    trackView('news', newsItem.id);
  };

  if (isLoading) {
    return (
      <Container>
        <div className="flex flex-col gap-6 md:gap-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <InfoCardSkeleton key={i} isNews />
          ))}
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <div className={'flex flex-col gap-6 md:gap-10'}>
          {news.map((newsItem) => (
            <InfoCard
              key={newsItem.id}
              info={newsItem}
              isNews
              onclick={() => handleClick(newsItem)}
            />
          ))}
        </div>
      </Container>
      {currentNews && <CustomModalInfo info={currentNews} isNews />}
    </>
  );
};
