import { enumDashboardFilterTime } from '@configs';

export type TimePayload = { start_time: number; end_time: number };

export interface IDashboardPayload {
  filterTime?: enumDashboardFilterTime;
  filterStore?: string | number;
  filterBranhGroup?: string | number;
  startTime?: number;
  endTime?: number;
}

export interface ActiveMember {
  total: number;
  date: string;
}

export interface ActiveMemberRoot {
  success: boolean;
  code: number;
  data: ActiveMember[];
  message: string;
}

export interface TierStatistic {
  id: number;
  name: string;
}

export interface TierStatisticResponse {
  tier_id?: number;
  total: number;
  name: string;
  tier?: TierStatistic;
}

export interface TierStatisticRoot {
  success: boolean;
  code: number;
  data: TierStatisticResponse[];
  message: string;
}

export interface OverviewStatistic {
  totalMember: number;
  totalSpending: number;
}

export interface OverviewStatisticRoot {
  success: boolean;
  code: number;
  data: OverviewStatistic;
  message: string;
}
export interface TopSpentUserColumn {
  key: React.Key;
  no: number;
  name: string;
  total: string;
}

export interface Member {
  id: number;
  name: string;
}

export interface Result {
  member_id: number;
  total: string;
  name: string;
  member: Member;
}

export interface TopSpentResponse {
  result: Result[];
  total: number;
  maxPage: number;
  page: number;
  limit: number;
}

export interface TopSpentRoot {
  success: boolean;
  code: number;
  data: TopSpentResponse;
  message: string;
}

export interface TopSpentData {
  count: number;
  limit: number;
  data: TopSpentUserColumn[];
}
