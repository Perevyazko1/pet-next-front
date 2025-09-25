'use client';

import { useQueryState } from 'nuqs';

export const useQueryParams = () => {
  const [infoId, setInfoId] = useQueryState('infoId', { defaultValue: '' });

  return {
    infoId,
    setInfoId,
  };
};
