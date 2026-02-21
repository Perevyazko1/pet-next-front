// import { IconSearch } from '@/shared/ui/icons/IconSearch';
import { clsx } from 'clsx';
import React, { InputHTMLAttributes } from 'react';
// import { IconCross } from '@/shared/ui/icons/IconCross';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  // onClickIcon: any;
  classNameInput?: string;
  classNameIcon?: string;
  deleteValue: () => void;
}

export const InputSearch = ({
  // onClickIcon,
  className,
  classNameInput,
  classNameIcon,
  value,
  deleteValue,
  onChange,
  placeholder,
  ...props
}: Props) => {
  return (
    <div
      className={clsx(
        className,
        'relative w-full overflow-hidden rounded-[30px] border-none',
      )}>
      {/*<IconSearch*/}
      {/*  onClick={onClickIcon}*/}
      {/*  className={clsx(*/}
      {/*    classNameIcon*/}
      {/*      ? classNameIcon*/}
      {/*      : 'h-[16px] w-[16px] min-w-[18px] md:h-[24px] md:w-[24px] md:min-w-[24px]',*/}
      {/*    'absolute left-[18px] top-[50%] translate-y-[-50%] cursor-pointer fill-white transition hover:scale-105 md:left-[24px]',*/}
      {/*  )}*/}
      {/*/>*/}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          classNameInput,
          'block h-full w-full border-none bg-bg-dark-secondary py-2 pl-[40px] pr-[55px] text-base font-medium text-white placeholder:text-tertiary focus:outline-none active:outline-none md:py-[18px] md:pl-[60px] md:text-custom-xl',
        )}
        {...props}
      />
      {value && (
        <div
          onClick={deleteValue}
          className={'absolute right-[18px] top-[50%] cursor-pointer'}>
          {/*<IconCross*/}
          {/*  className={*/}
          {/*    'h-[16px] w-[16px] min-w-[18px] translate-y-[-50%] fill-white md:h-[24px] md:w-[24px] md:min-w-[24px]'*/}
          {/*  }*/}
          {/*/>*/}
        </div>
      )}
    </div>
  );
};
