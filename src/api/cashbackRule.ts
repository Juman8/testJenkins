import { LogApp } from '@utils';
import { IGetCashbackRulesParams } from '@interfaces';
import { ApiClient } from './axiosClient';

export const cashbackRuleAPI = {
  getRules: (params: IGetCashbackRulesParams) => {
    const url = '/rules';
    LogApp({ params });
    return ApiClient.get(url, { params });
  },

  getOneRule: (id: number | string) => {
    const url = `/rules/${id}`;
    return ApiClient.get(url);
  },

  create: (body: any) => {
    const url = '/rules';
    return ApiClient.post(url, body);
  },

  update: (id: number | string, body: any) => {
    const url = `/rules/${id}`;
    return ApiClient.patch(url, body);
  },
};
