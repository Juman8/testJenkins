import { enumStatus } from './../configs/enum';
import { IGetCashbackRulesParams, MemberPayload } from '@interfaces';
import { ApiClient } from './axiosClient';

export const memberAPI = {
  getMembers: (params: MemberPayload) => {
    const url = '/members';
    return ApiClient.get(url, { params });
  },

  getOneMember: (id: number | string) => {
    const url = `/members/id/${id}`;
    return ApiClient.get(url);
  },

  updateActive: (id: number, body: { status: enumStatus }) => {
    const url = `/members/${id}`;
    return ApiClient.patch(url, body);
  },

  updateProfile: (id: number | string, body: any) => {
    const url = `/members/${id}`;
    return ApiClient.patch(url, body);
  },

  delete: (id: number, body: any) => {
    const url = `/members/${id}`;
    return ApiClient.patch(url, body);
  },

  getSimulatorMember: (phone: number | string) => {
    const url = `/members/${phone}`;
    return ApiClient.get(url);
  },
};
