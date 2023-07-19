import { StorePayload } from '@interfaces';
import { LogApp } from '@utils';
import { ApiClient } from './axiosClient';

export const simulatorAPI = {
  getMemberInfo: (phone: string) => {
    const url = `/members/web/simulator/info-by-phone/${phone}`;
    return ApiClient.get(url);
  },
  keepOrUse: (id: number, bill: number, use: number) => {
    const url = `/members/${id}/web/simulator/keep-or-use`;
    return ApiClient.post(url, { bill, use });
  },
  preview: (id: number, bill: number, use: number) => {
    const url = `/members/${id}/web/simulator/keep-or-use/preview`;
    return ApiClient.post(url, { bill, use });
  },
  bonusCashback: (phone: string, amount: number) => {
    const url = `/members/web/simulator/cashback`;
    return ApiClient.post(url, { phone, amount });
  },
};
