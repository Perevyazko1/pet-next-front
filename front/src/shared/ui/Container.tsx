import { cn } from '@/shared/lib';
import { ReactNode, RefObject } from 'react';

export const Container = ({
  children,
  className,
  ref,
  mobileScreen,
  fullContainer = false,
  id,
}: {
  children?: ReactNode;
  className?: string;
  id?: string;
  ref?: RefObject<HTMLDivElement>;
  mobileScreen?: boolean;
  fullContainer?: boolean;
}) => {
  return (
    <div
      id={id}
      ref={ref}
      className={cn(
        fullContainer ? '' : 'max-w-[1518px]',
        // mobileScreen ? 'px-0' : 'px-4',
        // 'md:px-[40px] xl:px-[100px]',
        'mx-auto w-full',
        className,
      )}>
      {children}
    </div>
  );
};
