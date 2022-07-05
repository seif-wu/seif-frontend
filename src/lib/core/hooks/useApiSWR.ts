import useSWR, { SWRConfiguration } from 'swr';
import type { Key } from 'swr';
import api from '../api';

function useApiSWR(
  key: Key,
  options?: SWRConfiguration,
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
