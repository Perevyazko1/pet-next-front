import { apiClient } from '@/shared/lib/api-client';

export const trackView = (type: 'pets' | 'news', id: number): void => {
  apiClient({ url: `/api/${type}/${id}/view/`, method: 'POST' }).catch(
    () => {},
  );
};
