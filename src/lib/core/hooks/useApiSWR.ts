import useSWR, { BareFetcher } from 'swr';
import type { Key } from 'swr';
import api from '../api';
import { PublicConfiguration } from 'swr/dist/types';

function useApiSWR(
  key: Key,
  options?:
    | Partial<
        PublicConfiguration<
          { response: any; status: number },
          any,
          BareFetcher<{ response: any; status: number }>
        >
      >
    | undefined
) {
  const { data, error, ...other } = useSWR(key, api.get, options);

  return {
    data: data?.response?.data,
    error: error?.error,
    status: data?.status || error?.status,
    isLoading: !data,
    ...other,
  };
}

export default useApiSWR;
