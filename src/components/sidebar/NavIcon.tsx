import { enumNavKey } from '@configs';
import { ICon } from '@interfaces';
import { selectLayout, useAppSelector } from '@redux';
import { useTheme } from '@theme';
import { LogApp } from '@utils';
import styled from 'styled-components';
import {
  AnnouncementMenuIcon,
  BirthdaySpecialMenuIcon,
  BranchGroupIcon,
  CashbackRuleMenuIcon,
  DashboardMenuIcon,
  GroupMenuIcon,
  LoyaltyMenuIcon,
  MarketingMenuIcon,
  MemberMenuIcon,
  MemberTierMenuIcon,
  Store,
} from '../Icon';

interface IProps extends ICon {
  pathKey: enumNavKey;
}

export const NavMenuIcon = (props: IProps) => {
  const { pathKey } = props;

  const { navCurrentKey } = useAppSelector(selectLayout);

  const { theme } = useTheme();

  const genIcon = () => {
    switch (pathKey) {
      case enumNavKey.DASHBOARD:
        return (
          <DashboardMenuIcon
            color={navCurrentKey === pathKey ? theme?.colors?.sidebar?.active : undefined}
            {...props}
          />
        );
      case enumNavKey.LOYALTY_SETTING:
        return (
          <LoyaltyMenuIcon
            color={navCurrentKey === pathKey ? theme?.colors?.sidebar?.active : undefined}
            {...props}
          />
        );
      case enumNavKey.MEMBERSHIP_TIERS:
        return <MemberTierMenuIcon {...props} />;
      case enumNavKey.CASHBACK_RULES:
        return <CashbackRuleMenuIcon {...props} />;
      case enumNavKey.BIRTHDAY_SPECIAL:
        return <BirthdaySpecialMenuIcon {...props} />;
      case enumNavKey.MARKETING:
        return <MarketingMenuIcon {...props} />;
      case enumNavKey.ANNOUNCEMENT:
        return <AnnouncementMenuIcon {...props} />;
      case enumNavKey.MEMBERS:
        return (
          <MemberMenuIcon
            color={navCurrentKey === pathKey ? theme?.colors?.sidebar?.active : undefined}
            {...props}
          />
        );
      case enumNavKey.GROUP:
        return (
          <GroupMenuIcon
            color={navCurrentKey === pathKey ? theme?.colors?.sidebar?.active : undefined}
            {...props}
          />
        );
      case enumNavKey.STORES:
        return (
          <Store
            color={navCurrentKey === pathKey ? theme?.colors?.sidebar?.active : undefined}
            {...props}
          />
        );
      case enumNavKey.BRANCH_GROUP:
        return (
          <BranchGroupIcon
            color={navCurrentKey === pathKey ? theme?.colors?.sidebar?.active : undefined}
            {...props}
          />
        );
      default:
        return <></>;
    }
  };

  return <>{genIcon()}</>;
};

const StyledNavMenuIcon = styled.div<{
  $appTheme?: string;
}>``;
