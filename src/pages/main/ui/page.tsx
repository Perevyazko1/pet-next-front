'use client';

import React from 'react';
import {Container} from "@/shared/ui/Container";
import {texts} from "@/shared/constants/texts";
import {Button} from "@/shared/ui/button";
import {BigBoneIcon} from "@/shared/ui/icons/BigBoneIcon";
import {MiniBoneIcon} from "@/shared/ui/icons/MiniBoneIcon";
import {BigPawIcon} from "@/shared/ui/icons/BigPawIcon";
import Image from "next/image";
import {cn} from "@/shared/lib";
import {airfool} from "@/shared/config/fonts";

export const MainPage = () => {


  return (
    <>
      <Container>


        <div>
          <div className={'rounded-lg overflow-hidden bg-accent relative md:aspect-[1518/900]'}>
            <div className={'relative hidden md:block'}>
              <BigBoneIcon className={'absolute top-[3vw] left-[4vw] md:size-[clamp(5rem,2.208rem+5.816vw,9.188rem)]'} />
              <MiniBoneIcon className={'absolute top-[5vw] left-[10.5vw] md:size-[clamp(1.5rem,0.667rem+1.736vw,2.75rem)]'}/>
            </div>
            <div className={'w-full relative top-7 p-4 flex flex-col items-center md:items-start md:p-0 md:left-[50px] md:w-fit md:top-1/2 md:-translate-y-1/2 md:absolute'}>


              <h1 className={'text-center'} >
                <span className={'text-[clamp(1.5rem,0.808rem+3.077vw,4.5rem)] text-center md:text-left md:leading-[140%] leading-[110%] tracking-[0px] md:-tracking-[1.44px] font-bold'}>{texts.mainTitle}</span>


                  <span className={cn('relative ml-[0.625rem] text-[clamp(1.5rem,0.808rem+3.077vw,4.5rem)] md:leading-[140%] leading-[110%] tracking-[0px] md:-tracking-[1.44px] font-bold',airfool.className)}>
                    {texts.paws}
                    <BigPawIcon
                        className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[clamp(3.125rem,0.962rem+9.615vw,12.5rem)] h-[clamp(3.125rem,0.962rem+9.615vw,12.5rem)]"
                    />
                  </span>

              </h1>

              <h2 className={'font-normal text-[clamp(1rem,0.971rem+0.128vw,1.125rem)] text-center md:text-left max-md:leading-[100%] mt-1 mb-10 md:mt-3 md:mb-6'}>{texts.mainSubTitle}</h2>
              <div className={'flex w-full flex-col gap-y-[1.5rem] md:flex-row md:gap-y-[1.875rem] md:w-fit gap-x-6'}>
                <Button>{texts.shelter}</Button>
                <Button>{texts.donate}</Button>
              </div>
            </div>



            <div className={'relative bottom-0 right-0 md:w-[50%] w-full md:-bottom-2 md:absolute md:aspect-[928/517]'}>
              <Image width={928} height={517} className={'object-cover w-full'} src={'/big-korgi.png'} alt={'big-korgi'}/>
            </div>

          </div>

        </div>
      </Container>

    </>
  );
};










