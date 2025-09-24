'use client';

import React from 'react';
import { InfoCardInterface } from '@/entities/pets/Info-card';
import Image from 'next/image';
import { clsx } from 'clsx';
import { Button } from '@/shared/ui/button';
import { texts } from '@/shared/constants/texts';
import { EyeIcon } from '@/shared/ui/icons/EyeIcon';
import { CalendarIcon } from '@/shared/ui/icons/CalendarIcon';
interface Props {
  info: InfoCardInterface;
  isNews?: boolean;
}
export const InfoCard = ({ info, isNews = false }: Props) => {
  return (
    <div className={'flex flex-col gap-5 rounded-lg bg-accent p-4 md:p-5'}>
      <div
        className={clsx(
          isNews ? 'aspect-[1068/467]' : 'aspect-[309/222]',
          'relative overflow-hidden rounded-lg',
        )}>
        {isNews ? (
          <Image
            width={1068}
            height={467}
            src={info.image}
            alt={info.altImage}
            className={'h-full w-full object-cover'}
          />
        ) : (
          <Image
            width={309}
            height={222}
            src={info.image}
            alt={info.altImage}
            className={'h-full w-full object-cover'}
          />
        )}
        <p
          className={clsx(
            isNews
              ? 'bottom-5 left-5 text-[clamp(1.125rem,0.923rem+0.897vi,2rem)]'
              : 'bottom-4 left-4 text-[clamp(1.125rem,1.038rem+0.385vi,1.5rem)]',
            'absolute font-black leading-[160%] tracking-[0px] text-white underline',
          )}>{`#${info.title}`}</p>
      </div>

      <p
        className={clsx(
          isNews
            ? 'line-clamp-3 text-[clamp(1rem,0.971rem+0.128vi,1.125rem)]'
            : 'line-clamp-2 text-base',
          'font-normal leading-[140%] tracking-[0px] text-text-primary',
        )}>
        {info.description}
      </p>
      <div className={'flex flex-row items-end justify-between'}>
        <Button className={'h-[49px] w-auto'}>{texts.readMore}</Button>
        <div className={'flex flex-row gap-[5px]'}>
          <EyeIcon className={'size-6'} />
          <p
            className={
              'text-[clamp(1rem,0.971rem+0.128vi,1.125rem)] font-normal leading-[140%] tracking-[0px] text-text-primary'
            }>
            {info.views}
          </p>
        </div>
        {isNews && (
          <div className={'flex flex-row gap-[5px]'}>
            <CalendarIcon className={'size-6'} />
            <p
              className={
                'text-[clamp(1rem,0.971rem+0.128vi,1.125rem)] font-normal leading-[140%] tracking-[0px] text-text-primary'
              }>
              {info.date}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
