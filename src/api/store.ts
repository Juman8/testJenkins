import { StorePayload } from '@interfaces';
import { ApiClient } from './axiosClient';

export const storeAPI = {
  getStores: ({ page, title, limit = 999 }: { page: number; title: string; limit?: number }) => {
    const url = `/stores?page=${page}&name=${title.trim()}&limit=${limit}`;
    return ApiClient.get(url);
  },
  updateStore: (payload: StorePayload, id: number) => {
    const url = `/stores/${id}`;
    return ApiClient.patch(url, payload);
  },
  getStore: (id: number) => {
    const url = `/stores/${id}`;
    return ApiClient.get(url);
  },
};
