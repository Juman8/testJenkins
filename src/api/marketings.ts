import { LogApp } from '@utils';
import { IGetAnnouncementsParams, IGetCashbackRulesParams } from '@interfaces';
import { ApiClient } from './axiosClient';

export const marketingAPI = {
  getAnnouncements: (params: IGetAnnouncementsParams) => {
    const url = '/banners';
    LogApp({ params });
    return ApiClient.get(url, { params });
  },

  getOneAnnouncement: (id: number | string) => {
    const url = `/banners/${id}`;
    return ApiClient.get(url);
  },

  createAnnouncement: (body: any) => {
    const url = '/banners';
    return ApiClient.post(url, body);
  },

  updateAnnouncement: (id: number | string, body: any) => {
    const url = `/banners/${id}`;
    return ApiClient.patch(url, body);
  },

  deleteAnnouncement: (id: number | string) => {
    const url = `/banners/${id}`;
    return ApiClient.delete(url);
  },
};
