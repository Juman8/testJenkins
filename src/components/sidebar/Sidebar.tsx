import { Menu } from 'antd';
import React, { forwardRef, memo } from 'react';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

import {
  enumMainNavKey,
  enumNavKey,
  enumThemeMode,
  MAIN_THEME_DATA,
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_WIDTH,
} from '@configs';
import { StyledSidebar } from './style';
import { selectLayout, useAppSelector } from '@redux';
import { LogApp } from '@utils';

interface IProps {
  isSMScreen?: boolean;
  themeMode?: enumThemeMode;
  collapsed?: boolean;
  navbarItems?: ItemType[];
  onChangeCollapsed?: (value: boolean) => void;
  onSelectMenuItem?: (value: any) => void;
}

export const Sidebar = memo(
  forwardRef((props: IProps, ref?: React.Ref<any>) => {
    const { themeMode, collapsed, navbarItems, isSMScreen, onChangeCollapsed, onSelectMenuItem } =
      props;

    const { navCurrentKey, navCurrentIsOpenKey } = useAppSelector(selectLayout);
    LogApp(navCurrentKey, navCurrentIsOpenKey, 'kaka');
    return (
      <StyledSidebar
        width={isSMScreen || collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}
        // collapsed={collapsed}
        onCollapse={onChangeCollapsed}
        className="Sidebar"
        $themeMode={themeMode}
        $appTheme={MAIN_THEME_DATA.mainColor}
        $collapsed={collapsed}
        $isSMScreen={isSMScreen}
        // collapsible
      >
        <Menu
          onClick={onSelectMenuItem}
          mode="inline"
          selectedKeys={[`${navCurrentIsOpenKey}`, `${navCurrentKey}`]}
          defaultSelectedKeys={[`${navCurrentIsOpenKey}`, `${navCurrentKey}`]}
          defaultOpenKeys={[`${navCurrentIsOpenKey}`]}
          style={{ height: '100%', borderRight: 0 }}
          items={navbarItems}
        />
      </StyledSidebar>
    );
  }),
);
