import { Skeleton } from '@heroui/skeleton';
import { clsx } from 'clsx';

interface Props {
  isNews?: boolean;
}

export const InfoCardSkeleton = ({ isNews = false }: Props) => {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-accent p-4 md:p-5">
      <Skeleton
        className={clsx(
          isNews ? 'aspect-[1068/467]' : 'aspect-[309/222]',
          'w-full rounded-lg',
        )}
      />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4 rounded-lg" />
      </div>
      <div
        className={clsx(
          isNews ? 'flex-col-reverse gap-6 sm1:flex-row sm1:gap-0' : 'flex-row',
          'flex items-end justify-between',
        )}>
        <Skeleton
          className={clsx(
            isNews ? 'w-full sm1:w-32' : 'w-24',
            'h-[49px] rounded-lg',
          )}
        />
        <Skeleton className="h-5 w-14 rounded-lg" />
      </div>
    </div>
  );
};
