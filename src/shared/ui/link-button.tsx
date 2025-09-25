'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { Button } from '@/shared/ui/button';
import { usePathname } from 'next/navigation';
import { LinkPawIcon } from '@/shared/ui/icons/LinkPawIcon';

export const LinkButton = ({
  children,
  href,
}: {
  children?: ReactNode;
  id?: string;
  href: string;
}) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link className={'relative'} href={href}>
      <LinkPawIcon
        className={clsx(
          isActive ? 'paw-bounce block' : 'hidden',
          'absolute -left-[2.125rem] -top-5',
        )}
      />
      <Button
        className={clsx(
          isActive &&
            'border-3 border-primary !bg-transparent pr-1 font-black text-black',
          'h-[47px] w-[128px]',
        )}>
        {children}
      </Button>
    </Link>
  );
};
