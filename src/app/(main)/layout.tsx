import {ReactNode} from 'react';
import {SideBarCustom} from "@/shared/ui/side-bar";

interface Props {
  children?: ReactNode;
}

export default async function Layout({ children }: Props) {


  return (
    <div className="relative max-w-[1920px] mx-auto flex min-h-screen flex-row bg-white py-10 px-12 md:gap-7">
        <SideBarCustom />

        {children}

    </div>
  );
}
