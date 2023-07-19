import { BranchPayload, ILogoutFields } from '@interfaces';
import { ContentStateConverter } from 'draft-convert';
import axiosClient, { ApiClient } from './axiosClient';

export const settingAPI = {
  getUserInfo: () => {
    const url = '/merchant/info';
    return ApiClient.get(url);
  },
  updateGeneralSetting: (body?: any) => {
    const url = '/merchant/general-setting';
    return ApiClient.patch(url, body);
  },
  updateUserInfo: (body?: { full_name: string; receive_noti: boolean }) => {
    const url = '/merchant/profile';
    return ApiClient.patch(url, body);
  },
  changePassword: (body?: { password: string; newPassword: boolean }) => {
    const url = '/merchant/change-password';
    return ApiClient.patch(url, body);
  },
  updatePrivacyPolicy: (body?: { privacy_policy: ContentStateConverter }) => {
    const url = '/merchant/privacy-policy';
    return ApiClient.patch(url, body);
  },
  getPrivacyPolicy: () => {
    const url = '/merchant/privacy-policy';
    return ApiClient.get(url);
  },
  createBranchGroup: (payload: BranchPayload) => {
    const url = `/branch-group`;
    return ApiClient.post(url, payload);
  },
  getBranchGroup: ({ page, num, title }: { page: number; num: number; title: string }) => {
    const url = `/branch-group?page=${page}&num=${num}&title=${title}`;
    return ApiClient.get(url);
  },
  getBranchGroupDetail: (id: number) => {
    const url = `/branch-group/${id}`;
    return ApiClient.get(url);
  },
  updateBranchGroupDetail: (id: number, payload: BranchPayload) => {
    const url = `/branch-group/${id}`;
    return ApiClient.patch(url, payload);
  },
  deleteBranchGroup: (id: number) => {
    const url = `/branch-group/${id}`;
    return ApiClient.delete(url);
  },
  uploadImage: (form: FormData) => {
    const url = `/upload/single`;
    return ApiClient.post(url, form);
  },
};
