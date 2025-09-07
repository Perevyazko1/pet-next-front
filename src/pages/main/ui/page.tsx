'use client';

import React from 'react';
import { Container } from '@/shared/ui/Container';
import { texts } from '@/shared/constants/texts';
import { Button } from '@/shared/ui/button';
import { BigBoneIcon } from '@/shared/ui/icons/BigBoneIcon';
import { MiniBoneIcon } from '@/shared/ui/icons/MiniBoneIcon';
import { BigPawIcon } from '@/shared/ui/icons/BigPawIcon';
import Image from 'next/image';
import { cn } from '@/shared/lib';
import { airfool } from '@/shared/config/fonts';

export const MainPage = () => {
  return (
    <>
      <Container>
        <div className={'flex flex-col gap-6 md:gap-12'}>
          <div
            className={
              'relative overflow-hidden rounded-lg bg-accent md:aspect-[1518/900]'
            }>
            <div className={'relative hidden md:block'}>
              <BigBoneIcon
                className={
                  'absolute left-[4vw] top-[3vw] md:size-[clamp(5rem,2.208rem+5.816vw,9.188rem)]'
                }
              />
              <MiniBoneIcon
                className={
                  'absolute left-[10.5vw] top-[5vw] md:size-[clamp(1.5rem,0.667rem+1.736vw,2.75rem)]'
                }
              />
            </div>
            <div
              className={
                'relative top-7 flex w-full flex-col items-center p-4 md:absolute md:left-[50px] md:top-1/2 md:w-fit md:-translate-y-1/2 md:items-start md:p-0'
              }>
              <h1 className={'text-center'}>
                <span
                  className={
                    'text-center text-[clamp(1.5rem,0.808rem+3.077vw,4.5rem)] font-bold leading-[110%] tracking-[0px] md:text-left md:leading-[140%] md:-tracking-[1.44px]'
                  }>
                  {texts.mainTitle}
                </span>
                <span
                  className={cn(
                    'relative ml-[0.625rem] text-[clamp(1.5rem,0.808rem+3.077vw,4.5rem)] font-bold leading-[110%] tracking-[0px] md:leading-[140%] md:-tracking-[1.44px]',
                    airfool.className,
                  )}>
                  {texts.paws}
                  <BigPawIcon className="absolute left-[70%] top-1/2 h-[clamp(3.125rem,0.962rem+9.615vw,12.5rem)] w-[clamp(3.125rem,0.962rem+9.615vw,12.5rem)] -translate-x-1/2 -translate-y-1/2" />
                </span>
              </h1>

              <h2
                className={
                  'mb-10 mt-1 text-center text-[clamp(1rem,0.971rem+0.128vw,1.125rem)] font-normal max-md:leading-[100%] md:mb-6 md:mt-3 md:text-left'
                }>
                {texts.mainSubTitle}
              </h2>
              <div
                className={
                  'flex w-full flex-col gap-x-6 gap-y-[1.5rem] md:w-fit md:flex-row md:gap-y-[1.875rem]'
                }>
                <Button>{texts.shelter}</Button>
                <Button>{texts.donate}</Button>
              </div>
            </div>

            <div
              className={
                'relative bottom-0 right-0 w-full md:absolute md:-bottom-2 md:aspect-[928/517] md:w-[50%]'
              }>
              <Image
                width={928}
                height={517}
                className={'w-full object-cover'}
                src={'/big-korgi.png'}
                alt={'big-korgi'}
              />
            </div>
          </div>

          <div
            className={
              'relative grid grid-cols-1 justify-end gap-10 rounded-lg bg-accent pt-[120px] max-md:px-4 md:aspect-[1518/508] md:grid-cols-[1fr_1.5fr] md:px-10 md:pb-16 md:pt-16'
            }>
            <div
              className={
                'absolute left-1/2 top-[64px] text-[clamp(1.5rem,1.154rem+1.538vi,3rem)] font-bold text-black max-md:-translate-x-1/2 md:left-[2vw] md:top-[3.5vw]'
              }>
              {texts.aboutUs.title}
            </div>
            <BigPawIcon
              className={
                'absolute left-1/2 top-[44px] size-[clamp(5rem,2.5rem+5.208vi,8.75rem)] max-md:-translate-x-1/2 md:left-[2.5vw] md:top-[2vw]'
              }
            />
            <BigPawIcon
              className={
                'absolute bottom-[39vw] right-[4vw] size-[clamp(5.625rem,4.375rem+2.604vi,7.5rem)] md:bottom-[4vw]'
              }
            />
            <BigBoneIcon
              className={
                'absolute right-auto top-[57vw] size-[clamp(5.625rem,4.375rem+2.604vi,7.5rem)] md:right-[1.5vw] md:top-[2vw]'
              }
            />
            <MiniBoneIcon
              className={
                'absolute right-auto top-[60vw] size-[clamp(2.5rem,2.083rem+0.868vi,3.125rem)] max-md:left-[60px] md:right-[1.5vw] md:top-[2.5vw]'
              }
            />
            <div
              className={
                'order-2 mt-auto aspect-[587/356] md:order-1 md:max-h-[356px] md:max-w-[587px]'
              }>
              <Image
                className={'w-full object-cover'}
                width={587}
                height={356}
                src={'/dog-and-cat.png'}
                alt={'dog-and-cat.png'}
              />
            </div>

            <div
              className={
                'order-1 flex max-w-[791px] flex-col justify-end gap-3 text-base text-text-secondary max-md:text-center md:order-2 md:gap-6 md:text-[clamp(1rem,0.917rem+0.174vi,1.125rem)]'
              }>
              <p>
                <p className={'mr-1 inline text-2xl font-bold text-primary'}>
                  {texts.aboutUs.partOne}
                </p>
                {texts.aboutUs.partTwo}
              </p>
              <p>{texts.aboutUs.partThree}</p>
              <p>{texts.aboutUs.partFour}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
