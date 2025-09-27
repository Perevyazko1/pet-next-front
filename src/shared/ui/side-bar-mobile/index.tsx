'use client';

import React, { useEffect, useState } from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/shared/ui/sheet';
import { SideBarCustom } from '@/shared/ui/side-bar';
import { IconCross } from '@/shared/ui/icons/IconCross';
import { cn } from '@/shared/lib';
import { airfool } from '@/shared/config/fonts';
import { texts } from '@/shared/constants/texts';
import { BigPawIcon } from '@/shared/ui/icons/BigPawIcon';
import { MenuIcon } from '@/shared/ui/icons/MenuIcon';
import * as Dialog from '@radix-ui/react-dialog';
import { useScreenWidth } from '@/shared/hooks/use-screen-width';
import { usePathname } from 'next/navigation';

export const SidebarMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const screenWidth = useScreenWidth(1280);
  const pathname = usePathname();

  useEffect(() => {
    if (screenWidth >= 1280) {
      setOpen(false);
    }
  }, [screenWidth]);

  useEffect(() => {
    // Закрываем меню при смене маршрута
    if (screenWidth <= 1280) {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <header
      className={
        'relative z-10 h-20 w-screen rounded-lg bg-accent py-6 shadow-2xl'
      }>
      <h1
        className={cn(
          'mx-auto my-auto w-fit text-[2rem] font-normal leading-[100%] tracking-[0px]',
          airfool.className,
        )}>
        {texts.paws}
      </h1>
      <BigPawIcon className="absolute left-1/2 top-1/2 size-[5rem] -translate-x-1/2 -translate-y-1/2" />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className={'hidden max-[1342px]:block'}>
          <div className={'bg-accent'}>
            <MenuIcon
              className={'absolute right-6 top-1/2 size-6 -translate-y-1/2'}
            />
          </div>
        </SheetTrigger>
        <SheetContent
          className="w-full"
          aria-describedby={undefined}
          hideCloseButton>
          <Dialog.Title className="hidden">sidebar</Dialog.Title>
          <SheetHeader className="flex flex-row items-center justify-between">
            <SheetClose className="absolute right-[2.188rem] top-[2.188rem] z-10">
              <IconCross className={'size-6'} />
            </SheetClose>
          </SheetHeader>
          <SideBarCustom classname={'lg:!w-full lg:!h-full'} />
        </SheetContent>
      </Sheet>
    </header>
  );
};
