import useSWR from 'swr';
import type { Key } from 'swr';
import api from '../api';

function useApiSWR(key: Key) {
  const { data, error, ...other } = useSWR(key, api.get);

  return {
    data: data?.response?.data,
    error: error?.error,
    status: data?.status || error?.status,
    isLoading: !data,
    ...other
  };
}

export default useApiSWR;
