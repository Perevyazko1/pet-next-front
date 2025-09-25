'use client';

import React, { useState } from 'react';
import { InfoCardInterface } from '@/entities/pets/Info-card';
import { Container } from '@/shared/ui/Container';
import { InfoCard } from '@/shared/ui/info-card';
import { useQueryParams } from '@/shared/hooks/useQueryParams';
import { CustomModalInfo } from '@/shared/ui/custom-modal-info';

export const NewsPage = () => {
  const NEWS: InfoCardInterface[] = [
    {
      id: '1',
      description:
        'Чудесный, молодой Космо ждет свою семью в приюте.\n' +
        '22 МАЯ в приюте для бездомных животных «ЛАПКА» состоится ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ!С 11 до 17 часов\n' +
        'ждём в гости всех старых друзей приюта и будем очень рады новым знакомствам! Если вы мечтаете\n' +
        'погулять с собакой по весеннему лесу и сделать доброе дело — приезжайте к нам ...',
      title: 'День открытых дверей',

      image: '/pictures-news/1.png',
      altImage: 'img',
      date: '15.06.23',
      views: 105,
    },
    {
      id: '2',
      description:
        'Чудесный, молодой Космо ждет свою семью в приюте.\n' +
        '22 МАЯ в приюте для бездомных животных «ЛАПКА» состоится ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ!С 11 до 17 часов\n' +
        'ждём в гости всех старых друзей приюта и будем очень рады новым знакомствам! Если вы мечтаете\n' +
        'погулять с собакой по весеннему лесу и сделать доброе дело — приезжайте к нам ...',
      title: 'День открытых дверей',
      altImage: 'img',
      image: '/pictures-news/1.png',
      date: '15.06.23',
      views: 105,
    },
  ];

  const [currentNews, setCurrentNews] = useState<InfoCardInterface>(NEWS[0]);
  const { setInfoId } = useQueryParams();

  const handleClick = (index: number) => {
    setCurrentNews(NEWS[0]);
    setInfoId(`${index}`);
  };

  return (
    <>
      <Container>
        <div className={'flex flex-col gap-6 md:gap-10'}>
          {NEWS.map((newsItem, i) => (
            <InfoCard
              key={newsItem.id}
              info={newsItem}
              isNews
              onclick={() => handleClick(i)}
            />
          ))}
        </div>
      </Container>
      <CustomModalInfo info={currentNews} />
    </>
  );
};
