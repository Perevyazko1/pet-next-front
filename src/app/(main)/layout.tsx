import { ReactNode } from 'react';
import { SideBarCustom } from '@/shared/ui/side-bar';
import { SidebarMobile } from '@/shared/ui/side-bar-mobile';

interface Props {
  children?: ReactNode;
}

export default async function Layout({ children }: Props) {
  return (
    <div className="relative mx-auto grid min-h-screen max-w-[1920px] grid-cols-1 bg-white px-5 pt-[6.875rem] md:gap-7 md:px-12 lg:grid-cols-[280px_minmax(0,1518px)] lg:py-10">
      <div className={'fixed top-0 z-20 block lg:hidden'}>
        <SidebarMobile />
      </div>
      <div className={'sticky top-10 h-fit'}>
        <div className={'hidden lg:block'}>
          <SideBarCustom />
        </div>
      </div>

      {children}
    </div>
  );
}
