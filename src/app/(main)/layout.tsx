import { ReactNode } from 'react';
import { SideBarCustom } from '@/shared/ui/side-bar';

interface Props {
  children?: ReactNode;
}

export default async function Layout({ children }: Props) {
  return (
    <div className="relative mx-auto grid min-h-screen max-w-[1920px] grid-cols-1 bg-white px-5 py-10 md:gap-7 md:px-12 lg:grid-cols-[280px_minmax(0,1518px)]">
      <SideBarCustom />

      {children}
    </div>
  );
}
