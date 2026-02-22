import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../lib/api-client';

export interface ShelterItem {
  id: number;
  name: string;
}

export const sheltersList = (signal?: AbortSignal) =>
  apiClient<ShelterItem[]>({ url: '/api/shelters/', method: 'GET', signal });

export const useSheltersList = () =>
  useQuery({
    queryKey: ['/api/shelters/'],
    queryFn: ({ signal }) => sheltersList(signal),
  });
