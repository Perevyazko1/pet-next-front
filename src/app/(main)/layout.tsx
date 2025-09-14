import { ReactNode } from 'react';
import { SideBarCustom } from '@/shared/ui/side-bar';

interface Props {
  children?: ReactNode;
}

export default async function Layout({ children }: Props) {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1920px] flex-row bg-white px-5 py-10 md:gap-7 md:px-12">
      <SideBarCustom />

      {children}
    </div>
  );
}
