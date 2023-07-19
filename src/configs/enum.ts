export enum enumEnum {
  ENUM = 'ENUM',
}

export enum enumSizeIcon {
  DESKTOP = 58,
  TABLET = 40,
  DEFAULT = 78,
}

export enum enumBreakPoint {
  DESKTOP = 1280,
  TABLET = 1024,
  _2k = 2048,
  _3k = 38,
}

export enum enumPagination {
  _1 = 1,
  _2 = 2,
  _3 = 3,
  _4 = 4,
}

export const pagesIntroduction: enumPagination[] = [
  enumPagination._1,
  enumPagination._2,
  enumPagination._3,
  enumPagination._4,
];

export enum enumThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum enumOrderDate {
  Y_M_D = 'year/month/day',
  D_M_Y = 'day/month/year',
  D_Y_M = 'day/year/month',
  M_D_Y = 'month/day/year',
  M_Y_D = 'month/year/day',
  Y_D_M = 'year/day/month',
}

export enum enumBtnStyle {
  BASIC = 'basic',
  ROUNDED = 'rounded',
  ICON = 'icon',
}

export enum enumRuleType {
  standard = 'standard',
  superior = 'superior',
  birthday = 'birthday',
}

export enum enumCashbackType {
  cost = 'cashback',
  percent = 'percentage',
}

export enum enumNavKey {
  DASHBOARD = 1,
  LOYALTY_SETTING,
  MEMBERSHIP_TIERS,
  CASHBACK_RULES,
  BIRTHDAY_SPECIAL,
  MARKETING,
  ANNOUNCEMENT,
  MEMBERS,
  BRANCH_GROUP,
  GROUP,
  SETTINGS,
  STORES,
}

export enum enumMainNavKey {
  DASHBOARD = enumNavKey.DASHBOARD,
  LOYALTY_SETTING = enumNavKey.LOYALTY_SETTING,
  MARKETING = enumNavKey.MARKETING,
  MEMBERS = enumNavKey.MEMBERS,
  BRANCH_GROUP = enumNavKey.BRANCH_GROUP,
  SETTINGS = enumNavKey.SETTINGS,
  STORES = enumNavKey.STORES,
}

export enum enumStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  NONE = '',
}

export enum enumMemberType {
  ALL = '',
  ACTIVE = 'active',
  NEW_MEMBER = 'new',
}

export enum enumSettingItemKey {
  GENERAL = 1,
  PROFILE,
  POLICY,
  BRANCH_GROUP,
}

export enum enumUploadType {
  BUTTON = 1,
  IMAGE,
}

export enum enumGender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum enumPageSize {
  LIMIT_10 = 10,
  LIMIT_20 = 20,
  LIMIT_50 = 50,
}

export enum enumBirthday {
  BIRTHDAY = 'birthday',
}

export enum enumSimulatorBy {
  BY_TOTAL_AMOUNT = 1,
  BY_PRODUCT,
}

export enum enumDashboardFilterTime {
  ALL_DAYS = 'all-days',
  TODAY = 'today',
  YESTERDAY = 'yesterday',
  LAST_7_DAYS = 7,
  LAST_14_DAYS = 14,
  LAST_21_DAYS = 21,
  LAST_28_DAYS = 28,
  LAST_60_DAYS = 60,
  CUSTOM = 'custom',
}

export enum enumDemoStatus {
  DRAFT = 1,
  NOT_ACTIVE,
  ACTIVE,
  END,
  CANCELED,
  OVERDUE,
}
