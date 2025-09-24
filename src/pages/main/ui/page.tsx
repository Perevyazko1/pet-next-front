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
import { Input } from '@heroui/input';
import { Carousel } from '@/shared/ui/carousel';

const inputClassNames = {
  inputWrapper: [
    '!px-6 !py-3 !rounded-lg !bg-white',
    'border-outline-primary border-b',
    'after:!h-[1px] after:bottom-[-1px] after:bg-white',
    'group-data-[invalid=true]:border-error',
    'group-data-[invalid=true]:after:!bg-error',
    'md:h-[3.5rem] h-[3rem]',
  ],
  innerWrapper: 'pb-0',
  // label: [
  //   '!top-3',
  //   'text-[0.75rem] font-medium',
  //   '!text-dark-inactive',
  //   'group-data-[focus=true]:!text-dark-inactive',
  //   'group-data-[invalid=true]:!text-error',
  // ],
  input:
    '!text-black !font-normal placeholder:text-[#121212B2] placeholder:text-base',
};

const CAROUSEL_PHOTO = [
  { id: 0, url: '/carousel/1.png' },
  { id: 1, url: '/carousel/3.png' },
  { id: 3, url: '/carousel/5.png' },
  { id: 4, url: '/carousel/1.png' },
  { id: 5, url: '/carousel/3.png' },
  { id: 6, url: '/carousel/5.png' },
];

export const HomePage = () => {
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
                  'chaotic-animation absolute left-[4vw] top-[3vw] md:size-[clamp(5rem,2.208rem+5.816vw,9.188rem)]'
                }
              />
              <MiniBoneIcon
                className={
                  'chaotic-animation absolute left-[10.5vw] top-[5vw] md:size-[clamp(1.5rem,0.667rem+1.736vw,2.75rem)]'
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
                  'mb-10 mt-1 text-center text-[clamp(1rem,0.971rem+0.128vw,1.125rem)] font-normal text-text-primary max-md:leading-[100%] md:mb-6 md:mt-3 md:text-left'
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
                'chaotic-animation absolute right-[80%] top-[57vw] size-[clamp(5.625rem,4.375rem+2.604vi,7.5rem)] md:right-[2.5vw] md:top-[3vw]'
              }
            />
            <MiniBoneIcon
              className={
                'chaotic-animation absolute right-auto top-[60vw] size-[clamp(2.5rem,2.083rem+0.868vi,3.125rem)] max-md:left-[100px] md:right-[2.5vw] md:top-[3.5vw]'
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

          <div
            className={
              'relative rounded-lg bg-accent md:aspect-[1518/294] md:px-12'
            }>
            <p
              className={
                'mb-3 mt-16 w-[80%] text-center text-[clamp(1.5rem,1.154rem+1.538vi,3rem)] font-bold text-black max-md:mx-auto md:mb-0 md:mt-9 md:w-full md:max-w-[65%] md:text-left'
              }>
              {texts.record_visit}
            </p>
            <BigPawIcon
              className={
                'absolute left-1/2 top-[44px] size-[clamp(5rem,2.5rem+5.208vi,8.75rem)] max-md:-translate-x-1/2 md:left-12 md:top-2'
              }
            />
            <p
              className={
                'px-4 text-center text-[clamp(1rem,0.971rem+0.128vw,1.125rem)] font-normal text-text-primary max-md:leading-[100%] md:mb-6 md:max-w-fit md:px-0 md:text-left'
              }>
              {texts.record_subtitle}
            </p>
            <div
              className={
                'mt-6 flex flex-col flex-wrap items-center gap-7 px-10 md:mb-16 md:mt-0 md:max-w-[80%] md:flex-row md:items-baseline md:px-0 lg1:max-w-[60%]'
              }>
              <Input
                className="h-[44px] w-full md:h-[46px] md:w-[210px]"
                classNames={inputClassNames}
                // value={fullName}
                placeholder={texts.yor_name}
                // onChange={(e) =>
                //   onChangeHandler(e.target.value, 'fullName', setFullName)
                // }
                // isInvalid={!!errors.fullName}
                // isDisabled={!isEditMode}
              />
              <Input
                className="h-[44px] w-full md:h-[46px] md:w-[210px]"
                classNames={inputClassNames}
                // value={fullName}
                placeholder={texts.yor_phone}
                // onChange={(e) =>
                //   onChangeHandler(e.target.value, 'fullName', setFullName)
                // }
                // isInvalid={!!errors.fullName}
                // isDisabled={!isEditMode}
              />
              <Input
                className="h-[44px] w-full md:h-[46px] md:w-[210px]"
                classNames={inputClassNames}
                // value={fullName}
                placeholder={texts.yor_email}
                // onChange={(e) =>
                //   onChangeHandler(e.target.value, 'fullName', setFullName)
                // }
                // isInvalid={!!errors.fullName}
                // isDisabled={!isEditMode}
              />{' '}
              <Input
                className="h-[44px] w-full md:h-[46px] md:w-[210px]"
                classNames={inputClassNames}
                // value={fullName}
                placeholder={texts.shelters}
                // onChange={(e) =>
                //   onChangeHandler(e.target.value, 'fullName', setFullName)
                // }
                // isInvalid={!!errors.fullName}
                // isDisabled={!isEditMode}
              />
              <Button className={'h-[49px] w-[140px] md:h-[46px] md:w-auto'}>
                {texts.send}
              </Button>
            </div>
            <div
              className={
                'relative bottom-0 right-0 aspect-[319/187] w-full md:absolute md:-bottom-2 md:aspect-[474/188] md:w-[37%]'
              }>
              <BigBoneIcon
                className={
                  'chaotic-animation absolute bottom-[20%] right-7 size-[clamp(10.375rem,0.449rem+44.118vi,21.625rem)] rotate-[1rad] md:h-[clamp(8.625rem,4.875rem+7.813vi,14.25rem)] md:w-[clamp(8.813rem,5.063rem+7.813vi,14.438rem)]'
                }
              />
              <MiniBoneIcon
                className={
                  'chaotic-animation absolute left-5 top-[30%] size-[clamp(3.063rem,2.229rem+1.736vi,4.313rem)] rotate-[2rad] md:-top-4 md:right-[83%]'
                }
              />
              <Image
                width={474}
                height={188}
                className={
                  'absolute bottom-0 z-10 w-full object-cover md:bottom-auto'
                }
                src={'/mini-korgi.png'}
                alt={'mini-korgi'}
              />
            </div>
          </div>
          <div className={'relative rounded-lg bg-accent pb-[60px] md:px-12'}>
            <div
              className={
                'absolute left-1/2 top-[64px] text-[clamp(1.5rem,1.154rem+1.538vi,3rem)] font-bold text-black max-md:-translate-x-1/2 md:left-[2vw] md:top-[3.5vw]'
              }>
              {texts.photo}
            </div>
            <BigPawIcon
              className={
                'absolute left-1/2 top-[44px] size-[clamp(5rem,2.5rem+5.208vi,8.75rem)] max-md:-translate-x-1/2 md:left-[1.5vw] md:top-[1.5vw]'
              }
            />
            <MiniBoneIcon
              className={
                'chaotic-animation absolute right-5 top-[30%] size-[clamp(3.063rem,2.229rem+1.736vi,4.313rem)] md:right-[20%] md:top-[20%]'
              }
            />
            <BigPawIcon
              className={
                'chaotic-animation absolute bottom-[44px] size-[clamp(5.625rem,3.125rem+5.208vi,9.375rem)] md:bottom-[5%] md:left-[20%]'
              }
            />
            <div className={'mt-[11rem]'}>
              <Carousel
                speed={1000}
                autoplay
                dotsMobile
                infinite
                length={CAROUSEL_PHOTO?.length}>
                {CAROUSEL_PHOTO &&
                  CAROUSEL_PHOTO.map((photo, i) => (
                    <div className={'aspect-[300/300]'} key={photo.id}>
                      <Image
                        className={'w-full object-cover'}
                        width={300}
                        height={300}
                        src={photo.url}
                        alt={photo.url}
                      />
                    </div>
                  ))}
              </Carousel>
            </div>
          </div>
          <div
            className={
              'relative flex flex-col rounded-lg bg-accent px-4 md:px-12'
            }>
            <p
              className={
                'mb-3 mt-16 text-center text-[clamp(1.5rem,1.154rem+1.538vi,3rem)] font-bold text-black max-md:mx-auto md:mb-0 md:mt-9 md:text-left'
              }>
              {texts.how_get_new_friend}
            </p>
            <BigPawIcon
              className={
                'absolute left-1/2 top-[44px] size-[clamp(5rem,2.5rem+5.208vi,8.75rem)] max-md:-translate-x-1/2 md:left-12 md:top-2'
              }
            />
            <BigBoneIcon
              className={
                'chaotic-animation absolute right-auto top-1/2 size-[9.375rem] md:right-[2.5vw] md:top-[3vw] md:size-[clamp(5.625rem,3.542rem+4.34vi,8.75rem)]'
              }
            />
            <MiniBoneIcon
              className={
                'chaotic-animation absolute right-auto top-1/2 size-[clamp(2.5rem,2.083rem+0.868vi,3.125rem)] max-md:left-[70%] md:right-[2.5vw] md:top-[3.5vw]'
              }
            />
            <BigBoneIcon
              className={
                'chaotic-animation absolute bottom-[70%] left-[30%] size-[clamp(5.625rem,4.375rem+2.604vi,7.5rem)] md:bottom-[8vw] md:left-[2.5vw]'
              }
            />
            <div
              className={
                'mt-11 flex max-w-[46.25rem] flex-col flex-wrap justify-between gap-7 max-lg:mx-auto md:max-w-full md:flex-row md:flex-nowrap lg:gap-3'
              }>
              <div className={'flex flex-col items-center'}>
                <div
                  className={cn(
                    'text-[6rem] font-normal leading-[100%] tracking-[0px]',
                    airfool.className,
                  )}>
                  1
                </div>
                <div
                  className={
                    'text-ellipsis px-1 text-center text-[clamp(1rem,0.971rem+0.128vw,1.125rem)] font-normal text-text-primary max-md:leading-[100%] md:whitespace-pre-line'
                  }>
                  {texts.selectBeast}
                </div>
              </div>
              <div className={'flex flex-col items-center'}>
                <div
                  className={cn(
                    'text-[6rem] font-normal leading-[100%] tracking-[0px]',
                    airfool.className,
                  )}>
                  2
                </div>
                <div
                  className={
                    'text-ellipsis px-1 text-center text-[clamp(1rem,0.971rem+0.128vw,1.125rem)] font-normal text-text-primary max-md:leading-[100%] md:whitespace-pre-line'
                  }>
                  {texts.fillOutTheForm}
                </div>
              </div>

              <div className={'flex flex-col items-center'}>
                <div
                  className={cn(
                    'text-[6rem] font-normal leading-[100%] tracking-[0px]',
                    airfool.className,
                  )}>
                  3
                </div>
                <div
                  className={
                    'text-ellipsis px-1 text-center text-[clamp(1rem,0.971rem+0.128vw,1.125rem)] font-normal text-text-primary max-md:leading-[100%] md:whitespace-pre-line'
                  }>
                  {texts.expectACall}
                </div>
              </div>
              <div className={'flex flex-col items-center'}>
                <div
                  className={cn(
                    'text-[6rem] font-normal leading-[100%] tracking-[0px]',
                    airfool.className,
                  )}>
                  4
                </div>
                <div
                  className={
                    'text-ellipsis px-1 text-center text-[clamp(1rem,0.971rem+0.128vw,1.125rem)] font-normal text-text-primary max-md:leading-[100%] md:whitespace-pre-line'
                  }>
                  {texts.getYourNewFriend}
                </div>
              </div>
            </div>
            <Button
              className={
                'mx-auto mb-14 mt-9 h-[49px] w-full md:mt-6 md:w-[134px]'
              }>
              {texts.shelter}
            </Button>
          </div>
          <div
            className={
              'donates-block relative grid grid-cols-1 rounded-lg bg-accent md:aspect-[1518/624] md:grid-cols-2 md:pl-12 md:pr-0'
            }>
            <p
              className={
                'header-donates mb-3 mt-16 w-[80%] text-center text-[clamp(1.5rem,1.154rem+1.538vi,3rem)] font-bold text-black max-md:mx-auto md:mb-0 md:mt-9 md:w-full md:max-w-[65%] md:text-left'
              }>
              {texts.donates}
            </p>
            <BigPawIcon
              className={
                'absolute left-1/2 top-[44px] size-[clamp(5rem,2.5rem+5.208vi,8.75rem)] max-md:-translate-x-1/2 md:left-12 md:top-2'
              }
            />
            <div className={'buttons-donates w-full'}>
              <p
                className={
                  'text-ellipsis text-center text-[clamp(1rem,0.971rem+0.128vw,1.125rem)] font-normal text-text-primary max-md:leading-[100%] md:w-[150%] md:text-left'
                }>
                {texts.togetherWeCan}
              </p>
              <p
                className={
                  'mt-6 text-center text-[clamp(1.125rem,1.038rem+0.385vi,1.5rem)] leading-[160%] tracking-[0px] md:w-[150%] md:text-left'
                }>
                {texts.selectYourDonationAmount}
              </p>
              <div className={'mt-6 flex flex-col items-center gap-4 md:pb-12'}>
                <Button className={'h-[44px] w-[50%] md:h-[49px] md:w-[50%]'}>
                  {texts.twoHundred}
                </Button>
                <Button className={'h-[44px] w-[50%] md:h-[49px] md:w-[60%]'}>
                  {texts.fiveHundred}
                </Button>
                <Button className={'h-[44px] w-[50%] md:h-[49px] md:w-[70%]'}>
                  {texts.thousand}
                </Button>
                <Button className={'h-[44px] w-[50%] md:h-[49px] md:w-[80%]'}>
                  {texts.twoThousand}
                </Button>

                <Input
                  className="h-[44px] w-[50%] md:h-[49px] md:w-full"
                  classNames={inputClassNames}
                  // value={fullName}
                  placeholder={texts.otherAmount}
                  // onChange={(e) =>
                  //   onChangeHandler(e.target.value, 'fullName', setFullName)
                  // }
                  // isInvalid={!!errors.fullName}
                  // isDisabled={!isEditMode}
                />
              </div>
            </div>
            <div
              className={'img-mops relative flex w-full items-end justify-end'}>
              <Image
                width={553}
                height={623}
                className={'max-h-full object-contain max-md:w-full'}
                src={'/big-mops.png'}
                alt={'big-mops'}
              />
            </div>
            <BigPawIcon
              className={
                'chaotic-animation absolute bottom-1/2 left-1/2 block size-[clamp(5.625rem,3.125rem+5.208vi,9.375rem)] max-[1700px]:hidden'
              }
            />
            <BigBoneIcon
              className={
                'chaotic-animation absolute bottom-[70%] left-[30%] block size-[clamp(5.625rem,4.375rem+2.604vi,7.5rem)] max-[1700px]:hidden md:bottom-[8vw] md:left-1/2'
              }
            />
            <MiniBoneIcon
              className={
                'chaotic-animation absolute left-[10%] top-1/2 size-[clamp(2.5rem,2.083rem+0.868vi,3.125rem)] md:left-[2.5vw] md:top-1/2'
              }
            />
            <BigBoneIcon
              className={
                'chaotic-animation absolute bottom-[70%] left-[10%] block size-[clamp(5.625rem,4.375rem+2.604vi,7.5rem)] md:bottom-[8vw] md:hidden'
              }
            />
            <BigPawIcon
              className={
                'chaotic-animation absolute bottom-[60%] right-[10%] block size-[clamp(5.625rem,4.375rem+2.604vi,7.5rem)] md:hidden'
              }
            />
          </div>
        </div>
      </Container>
    </>
  );
};
