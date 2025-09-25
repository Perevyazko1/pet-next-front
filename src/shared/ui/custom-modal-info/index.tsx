'use client';

import React, { useEffect, useState } from 'react';
import { InfoCardInterface } from '@/entities/pets/Info-card';
import * as Dialog from '@radix-ui/react-dialog';
import { IconCross } from '@/shared/ui/icons/IconCross';
import { InfoCard } from '../info-card';
import { useQueryParams } from '@/shared/hooks/useQueryParams';

interface Props {
  info: InfoCardInterface;
}
export const CustomModalInfo = ({ info }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const { setInfoId, infoId } = useQueryParams();

  useEffect(() => {
    if (infoId) {
      setOpen(true);
    }
    if (!isOpen) {
    }
  }, [infoId]);

  const onOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setInfoId('');
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-black/50" />
        <Dialog.Content className="DialogContent no-scrollbar fixed left-1/2 top-0 z-50 h-screen w-full max-w-[1200px] -translate-x-1/2 transform select-none overflow-y-auto px-4 transition focus:outline-none lg:px-0">
          {' '}
          <div
            onClick={() => onOpenChange(false)}
            className={
              'my-4 ml-auto mr-0 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-[16px] bg-white bg-opacity-20 transition hover:bg-opacity-30'
            }>
            <IconCross className={'h-[24px] w-[24px] fill-white'} />
          </div>
          <div className={'relative'}>
            <Dialog.DialogTitle></Dialog.DialogTitle>
            <Dialog.DialogDescription></Dialog.DialogDescription>
            <InfoCard isModal info={info} isNews />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
