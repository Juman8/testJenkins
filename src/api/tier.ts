import { IGetTiersParams, ITierParams, IUpdateTierLevelBody } from '@interfaces';
import { LogApp } from '@utils';
import axiosClient, { ApiClient } from './axiosClient';

export const tierAPI = {
  getTiers: (params: IGetTiersParams) => {
    LogApp(params, 'log');
    const url = `/tiers?page=${params.page}&limit=${
      params.num
    }&name=${params.name?.trim()}&status=${params?.status}`;
    return ApiClient.get(url, { signal: params.signal });
  },
  createTier: (body: ITierParams) => {
    const url = '/tiers';
    return ApiClient.post(url, body);
  },
  getTierDetail: (id: number) => {
    const url = `/tiers/${id}`;
    return ApiClient.get(url, id);
  },
  editTier: (id: number, body: ITierParams) => {
    const url = `/tiers/${id}`;
    return ApiClient.patch(url, body);
  },
  updateTierLevel: (body: IUpdateTierLevelBody) => {
    const url = `/tiers/update-rank`;
    return ApiClient.post(url, body);
  },
};
