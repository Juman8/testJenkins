import { TimePayload } from '@interfaces';
import { LogApp } from '@utils';
import { ApiClient } from './axiosClient';

export const dashboardAPI = {
  getActiveMembers: (params: TimePayload) => {
    const url = `/dashboard/active-member?end_time=${params.end_time}&start_time=${params.start_time}`;
    return ApiClient.get(url);
  },
  getMemberTiers: () => {
    const url = `/dashboard/tier-member`;
    return ApiClient.get(url);
  },
  getOverviewStatistic: () => {
    const url = `/dashboard/total-statistic`;
    return ApiClient.get(url);
  },
  getTopSpentUsers: ({ page, limit }: { page: number; limit: number }) => {
    const url = `/dashboard/spending-member?limit=${limit}&page=${page}`;
    return ApiClient.get(url);
  },
};
