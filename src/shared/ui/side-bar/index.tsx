'use client';

import React from 'react';
import { Button } from '@/shared/ui/button';
import { texts } from '@/shared/constants/texts';
import { PhoneIcon } from '@/shared/ui/icons/PhoneIcon';
import { AddressIcon } from '@/shared/ui/icons/AddressIcon';
import { cn } from '@/shared/lib';
import { airfool } from '@/shared/config/fonts';
import { BigPawIcon } from '@/shared/ui/icons/BigPawIcon';
import { LinkButton } from '@/shared/ui/link-button';
import { routes } from '@/app/routes';

export const SideBarCustom = () => {
  return (
    <div
      className={
        'hidden h-[56.313rem] w-[17.5rem] flex-col items-center rounded-lg bg-accent lg:flex'
      }>
      <div className={'relative flex h-[11.25rem] w-full justify-center'}>
        <h1
          className={cn(
            'my-auto text-[2rem] font-normal leading-[100%] tracking-[0px]',
            airfool.className,
          )}>
          {texts.paws}
        </h1>
        <BigPawIcon className="absolute left-1/2 top-1/2 size-[5rem] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div
        className={
          'flex w-[13.25rem] flex-col items-center gap-8 border-b border-t border-[#0000001A] py-[4.75rem]'
        }>
        <LinkButton href={routes.home}>{texts.main}</LinkButton>
        <LinkButton href={routes.pets}>{texts.pets}</LinkButton>
        <LinkButton href={routes.news}>{texts.news}</LinkButton>
      </div>
      <div className={'flex flex-col items-center gap-5 pt-16'}>
        <div className={'flex flex-row gap-1'}>
          <PhoneIcon className={'size-6'} />
          <p
            className={
              'text-xl font-normal leading-[100%] tracking-[0px] text-text-primary'
            }>
            {texts.numberPhone}
          </p>
        </div>
        <div className={'flex w-[12.75rem] flex-row gap-1'}>
          <AddressIcon className={'h-[24px] w-[52px]'} />
          <p
            className={
              'text-xl font-normal leading-[100%] tracking-[0px] text-text-primary'
            }>
            {texts.address}
          </p>
        </div>
        <div className={'flex flex-row gap-1'}>
          <p
            className={
              'flex flex-row flex-wrap gap-2 text-xl font-normal leading-[100%] tracking-[0px] text-text-primary'
            }>
            <p className={'text-primary'}>{texts.openingDays}</p>
            {texts.openingHours}
          </p>
        </div>
        <p
          className={
            'mt-5 text-xl font-black leading-[100%] tracking-[0px] text-primary'
          }>
          {texts.weAreWaitingForYouEveryDay}
        </p>
      </div>
    </div>
  );
};
