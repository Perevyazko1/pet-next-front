import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-[1.125rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-secondary',
        // accent:
        //   'bg-[#00AEEF] transition-all duration-150 hover:bg-[#0090D4] active:scale-95 text-white',
        // destructive:
        //   'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        // outline:
        //   'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        // secondary:
        //   'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        // ghost: 'bg-transparent focus-visible:ring-0',
        // link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-6 py-3 text-[1.125rem] font-medium leading-[140%]',
        // sm: 'text-[14px] md:text-[18px] leading-[16px] md:leading-[20px] p-2.5',
        // md: 'rounded-full xl:text-[24px] text-[18px] xl:py-3 xl:px-5 py-2.5 px-[14px] leading-[18px] xl:leading-[24px] font-[500]',
        // lg: 'rounded-full xl:text-[24px] text-[18px] xl:py-4 xl:px-6 py-2.5 px-4 leading-[18px] xl:leading-[24px] font-[500]',
        // xl: 'rounded-full xl:text-[36px] text-[18px] xl:py-6 xl:px-12 py-2.5 px-5 leading-[18px] xl:leading-[24px] font-[200]',
        // icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
