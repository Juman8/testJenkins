import { IGetRulesParams, IGetTiersParams, IUpdateBirthdaySpecialBody } from '@interfaces';
import axiosClient, { ApiClient } from './axiosClient';

export const ruleAPI = {
  getRules: (params: IGetRulesParams) => {
    const url = `/rules?page=${params.page}&limit=${params.num}`;
    return ApiClient.get(url, params);
  },
  getBirthdaySpecialRule: () => {
    const url = '/merchant/birthday-special-rule';
    return ApiClient.get(url);
  },
  updateBirthdaySpecial: (body: IUpdateBirthdaySpecialBody) => {
    const url = '/merchant/birthday-special-rule';
    return ApiClient.patch(url, body);
  },
};
