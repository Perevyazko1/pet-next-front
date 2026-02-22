'use client';

import React, { useState } from 'react';
import { InfoCardInterface } from '@/entities/pets/Info-card';
import { Container } from '@/shared/ui/Container';
import { InfoCard } from '@/shared/ui/info-card';
import { CustomModalInfo } from '@/shared/ui/custom-modal-info';
import { useQueryParams } from '@/shared/hooks/useQueryParams';
import { usePetsList } from '@/shared/api/pets/pets';
import { trackView } from '@/shared/api/views/trackView';
import { Spinner } from '@heroui/spinner';

export const PetsPage = () => {
  const { data, isLoading } = usePetsList();
  const pets = data?.results ?? [];

  const [currentPet, setCurrentPet] = useState<InfoCardInterface | null>(null);
  const { setInfoId } = useQueryParams();

  const handleClick = (pet: InfoCardInterface) => {
    setCurrentPet(pet);
    setInfoId(`${pet.id}`);
    trackView('pets', pet.id);
  };

  if (isLoading) {
    return (
      <Container>
        <div className="flex justify-center py-20">
          <Spinner size="lg" />
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <div
          className={
            'grid grid-cols-1 gap-7 sm1:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }>
          {pets.map((pet) => (
            <InfoCard key={pet.id} info={pet} onclick={() => handleClick(pet)} />
          ))}
        </div>
      </Container>
      {currentPet && <CustomModalInfo info={currentPet} />}
    </>
  );
};
