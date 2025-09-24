'use client';

import React from 'react';
import { InfoCardInterface } from '@/entities/pets/Info-card';
import { Container } from '@/shared/ui/Container';
import { InfoCard } from '@/shared/ui/info-card';

export const PetsPage = () => {
  const PETS: InfoCardInterface[] = [
    {
      id: '1',
      description:
        'Чудесный, молодой Космо ждет свою семью в приюте. Чтобы найти контакт ...',
      title: 'В приюте с 13.06.2023',
      views: 150,
      altImage: 'img',
      image: '/pictures-pets/1.png',
    },
    {
      id: '2',

      description:
        'Чудесный, молодой Космо ждет свою семью в приюте. Чтобы найти контакт ...',
      title: 'В приюте с 13.06.2023',
      views: 150,
      altImage: 'img',
      image: '/pictures-pets/2.png',
    },
    {
      id: '3',
      description:
        'Чудесный, молодой Космо ждет свою семью в приюте. Чтобы найти контакт ...',
      title: 'В приюте с 13.06.2023',
      views: 150,
      altImage: 'img',
      image: '/pictures-pets/3.png',
    },
    {
      id: '4',
      description:
        'Чудесный, молодой Космо ждет свою семью в приюте. Чтобы найти контакт ...',
      title: 'В приюте с 13.06.2023',
      views: 150,
      altImage: 'img',
      image: '/pictures-pets/4.png',
    },
    {
      id: '5',

      description:
        'Чудесный, молодой Космо ждет свою семью в приюте. Чтобы найти контакт ...',
      title: 'В приюте с 13.06.2023',
      views: 150,
      altImage: 'img',
      image: '/pictures-pets/5.png',
    },
    {
      id: '6',
      description:
        'Чудесный, молодой Космо ждет свою семью в приюте. Чтобы найти контакт ...',
      title: 'В приюте с 13.06.2023',
      views: 150,
      altImage: 'img',
      image: '/pictures-pets/6.png',
    },
  ];
  return (
    <>
      <Container>
        <div
          className={
            'grid grid-cols-1 gap-7 sm1:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }>
          {PETS.map((pet) => (
            <InfoCard key={pet.id} info={pet} />
          ))}
        </div>
      </Container>
    </>
  );
};
