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
  isModal?: boolean;
  onclick?: () => void;
}
export const InfoCard = ({
  info,
  onclick,
  isNews = false,
  isModal = false,
}: Props) => {
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
      {isModal ? (
        <p
          className={clsx(
            isNews
              ? 'text-[clamp(1rem,0.971rem+0.128vi,1.125rem)]'
              : 'text-base',
            'font-normal leading-[140%] tracking-[0px] text-text-primary',
          )}>
          {info.description}
        </p>
      ) : (
        <p
          className={clsx(
            isNews
              ? 'line-clamp-2 text-[clamp(1rem,0.971rem+0.128vi,1.125rem)] sm1:line-clamp-3'
              : 'line-clamp-2 text-base',
            'font-normal leading-[140%] tracking-[0px] text-text-primary',
          )}>
          {info.description}
        </p>
      )}
      {/*<p*/}
      {/*  className={clsx(*/}
      {/*    isNews*/}
      {/*      ? 'line-clamp-2 text-[clamp(1rem,0.971rem+0.128vi,1.125rem)] sm1:line-clamp-3'*/}
      {/*      : 'line-clamp-2 text-base',*/}
      {/*    'font-normal leading-[140%] tracking-[0px] text-text-primary',*/}
      {/*  )}>*/}
      {/*  {info.description}*/}
      {/*</p>*/}
      <div
        className={clsx(
          isNews ? 'flex-col-reverse gap-6 sm1:flex-row sm1:gap-0' : 'flex-row',
          'flex items-end justify-between',
        )}>
        {!isModal && (
          <Button
            onClick={onclick}
            className={clsx(
              isNews ? 'w-full sm1:w-auto' : 'w-auto',
              'h-[49px]',
            )}>
            {texts.readMore}
          </Button>
        )}

        <div
          className={clsx(
            isModal
              ? 'ml-auto w-full justify-end'
              : isNews
                ? 'w-full justify-between sm1:w-auto sm1:justify-end'
                : '',
            'w-full justify-end sm1:w-auto',
            'flex flex-row',
          )}>
          {isNews && info?.date && (
            <div className={'mr-8 flex flex-row gap-[5px]'}>
              <CalendarIcon className={'size-6'} />
              <p
                className={
                  'text-[clamp(1rem,0.971rem+0.128vi,1.125rem)] font-normal leading-[140%] tracking-[0px] text-text-primary'
                }>
                {info.date}
              </p>
            </div>
          )}
          <div className={'flex flex-row gap-[5px]'}>
            <EyeIcon className={'size-6'} />
            <p
              className={
                'text-[clamp(1rem,0.971rem+0.128vi,1.125rem)] font-normal leading-[140%] tracking-[0px] text-text-primary'
              }>
              {info.views}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
