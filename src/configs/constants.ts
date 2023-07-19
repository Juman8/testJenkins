import {
  enumNavKey,
  enumRuleType,
  enumCashbackType,
  enumStatus,
  enumGender,
  enumPageSize,
  enumMemberType,
  enumDashboardFilterTime,
} from './enum';
import { PATH_DASHBOARD, PATH_GENERAL } from './../routes/navigation';

export const DEFAULT_LANGUAGE = process.env.REACT_APP_LANGUAGE || 'en';
const ALL_THEMES = 'themes';
const CURRENT_THEME = 'theme';

const SIDEBAR_WIDTH = '260px';
const SIDEBAR_COLLAPSED_WIDTH = '105px';
const SIDEBAR_ICON_SIZE = '24px';
const HEADER_HEIGHT = '65px';
const HEADER_PADDING_TOP = '20px';

const SIDEBAR_DATA = [
  {
    label: 'Dashboard',
    path: PATH_DASHBOARD,
    pathKey: enumNavKey.DASHBOARD,
  },
  {
    label: 'Loyalty Setting',
    path: PATH_DASHBOARD,
    pathKey: enumNavKey.DASHBOARD,
    subItems: [
      {
        label: 'Membership Tiers',
        path: PATH_DASHBOARD,
        pathKey: enumNavKey.DASHBOARD,
        subOptions: [],
      },
    ],
  },
];

const AUTH_THEME_COLOR = '#184f64';

const MAIN_THEME_DATA = {
  mainColor: '#184f64',
};

const MAT_SM_SCREEN_WIDTH = '1279px';
const MAT_SM_SCREEN_WIDTH_MIN = '1280px';

const RESET = 'RESET';

const CASHBACK_RULE_TYPE = [
  {
    value: enumRuleType.standard,
    label: 'Standard Cashback Rule',
  },
  {
    value: enumRuleType.superior,
    label: 'Superior Cashback Rule',
  },
];

const CASHBACK_TYPE = [
  {
    value: enumCashbackType.cost,
    label: '$',
  },
  {
    value: enumCashbackType.percent,
    label: '%',
  },
];

const STATUS_TYPE = [
  {
    value: enumStatus.ACTIVE,
    label: 'Active',
  },
  {
    value: enumStatus.INACTIVE,
    label: 'Inactive',
  },
  {
    value: enumStatus.NONE,
    label: 'All',
  },
];

const GENDER_TYPE = [
  {
    value: enumGender.MALE,
    label: 'Male',
  },
  {
    value: enumGender.FEMALE,
    label: 'Female',
  },
];
export const TOP_FILTER = [
  {
    value: 10,
    label: 'Top 10',
  },
  {
    value: 20,
    label: 'Top 20',
  },
  {
    value: 50,
    label: 'Top 50',
  },
];

const PAGE_SIZE_OPTIONS = [
  {
    value: enumPageSize.LIMIT_10,
    label: '10',
  },
  {
    value: enumPageSize.LIMIT_20,
    label: '20',
  },
  {
    value: enumPageSize.LIMIT_50,
    label: '50',
  },
];

const FILTER_MEMBER_TYPE = [
  {
    value: enumMemberType.ACTIVE,
    label: 'Active members',
  },
  {
    value: enumMemberType.NEW_MEMBER,
    label: 'New members',
  },
  {
    value: enumMemberType.ALL,
    label: 'All',
  },
];

const DASHBOARD_FILTER_TIME = [
  {
    value: enumDashboardFilterTime.ALL_DAYS,
    label: 'All days',
  },
  {
    value: enumDashboardFilterTime.TODAY,
    label: 'Today',
  },
  {
    value: enumDashboardFilterTime.YESTERDAY,
    label: 'Yesterday',
  },
  {
    value: enumDashboardFilterTime.LAST_7_DAYS,
    label: 'Last 7 days',
  },
  {
    value: enumDashboardFilterTime.LAST_14_DAYS,
    label: 'Last 14 days',
  },
  {
    value: enumDashboardFilterTime.LAST_21_DAYS,
    label: 'Last 21 days',
  },
  {
    value: enumDashboardFilterTime.LAST_28_DAYS,
    label: 'Last 28 days',
  },
  {
    value: enumDashboardFilterTime.LAST_60_DAYS,
    label: 'Last 60 days',
  },
  {
    value: enumDashboardFilterTime.CUSTOM,
    label: 'Custom date',
  },
];

const OPENING_TYPE = {
  ALL: 1,
  CUSTOM: 2,
};
const DAYS = {
  MON: 'monday',
  TUE: 'tuesday',
  WED: 'wednesday',
  THU: 'thursday',
  FRI: 'friday',
  SAT: 'saturday',
  SUN: 'sunday',
};
const DEFAULT_OPENING_HOUR = {
  [DAYS.MON]: {
    openHour: '00:00:00',
    closeHour: '23:59:59',
    timezone: 8,
    isOpen: true,
  },
  [DAYS.TUE]: {
    openHour: '00:00:00',
    closeHour: '23:59:59',
    timezone: 8,
    isOpen: true,
  },
  [DAYS.WED]: {
    openHour: '00:00:00',
    closeHour: '23:59:59',
    timezone: 8,
    isOpen: true,
  },
  [DAYS.THU]: {
    openHour: '00:00:00',
    closeHour: '23:59:59',
    timezone: 8,
    isOpen: true,
  },
  [DAYS.FRI]: {
    openHour: '00:00:00',
    closeHour: '23:59:59',
    timezone: 8,
    isOpen: true,
  },
  [DAYS.SAT]: {
    openHour: '00:00:00',
    closeHour: '23:59:59',
    timezone: 8,
    isOpen: false,
  },
  [DAYS.SUN]: {
    openHour: '00:00:00',
    closeHour: '23:59:59',
    timezone: 8,
    isOpen: false,
  },
};
export const DEFAULT_WELCOMED_BENEFITS_VALUE = {
  CASHBACK: 'cashback',
  POINTS: 'point',
  COUPONS: 'coupon',
  FREE_ITEMS: 'item',
};
const DEFAULT_WELCOMED_BENEFITS = [
  { value: DEFAULT_WELCOMED_BENEFITS_VALUE.CASHBACK, label: 'Cashback', disabled: false },
  { value: DEFAULT_WELCOMED_BENEFITS_VALUE.POINTS, label: 'Points', disabled: false },
  { value: DEFAULT_WELCOMED_BENEFITS_VALUE.COUPONS, label: 'Coupons', disabled: false },
  { value: DEFAULT_WELCOMED_BENEFITS_VALUE.FREE_ITEMS, label: 'Free items', disabled: false },
];
export const ruleDateFormat = 'DD-MM-YYYY';
export const ruleTimeFormat = 'HH:mm:ss';
export const dateOfBirthFormat = 'DD/MM/YYYY';
export const dateTimeFormat = 'DD-MM-YYYY HH:mm:ss';
export const dateFormat = 'DD-MM-YYYY';

export const RESEND_OTP_COUNTDOWN_TIME = 60; //seconds
export const MEMBER_LINK = 'https://member/';
export const INITIAL_PAGE = 1;
export const DEFAULT_ANNOUNCEMENT_TYPE = 'redirect';
export const DEFAULT_ANNOUNCEMENT_STATUS = true;
export const MAXIMUM_IMAGE_SIZE = 1000000; //bytes - 1 MB
export const MAXIMUM_LIMIT = 1000000; //bytes - 1 MB

export {
  ALL_THEMES,
  MAIN_THEME_DATA,
  CURRENT_THEME,
  HEADER_HEIGHT,
  SIDEBAR_WIDTH,
  SIDEBAR_DATA,
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_ICON_SIZE,
  AUTH_THEME_COLOR,
  HEADER_PADDING_TOP,
  MAT_SM_SCREEN_WIDTH,
  MAT_SM_SCREEN_WIDTH_MIN,
  RESET,
  CASHBACK_TYPE,
  CASHBACK_RULE_TYPE,
  STATUS_TYPE,
  GENDER_TYPE,
  PAGE_SIZE_OPTIONS,
  FILTER_MEMBER_TYPE,
  OPENING_TYPE,
  DEFAULT_OPENING_HOUR,
  DAYS,
  DEFAULT_WELCOMED_BENEFITS,
  DASHBOARD_FILTER_TIME,
};
