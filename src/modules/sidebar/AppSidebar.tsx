import { memo, useEffect, useState } from 'react';
import { MenuProps, Tooltip } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { NavMenuIcon, Sidebar } from '@components';
import {
  selectApp,
  selectLayout,
  setCurrentPage,
  setNavCurrentIsOpenKey,
  setNavCurrentKey,
  setSidebarCollapsed,
  useAppDispatch,
  useAppSelector,
} from '@redux';
import {
  enumMainNavKey,
  enumNavKey,
  INITIAL_PAGE,
  MAT_SM_SCREEN_WIDTH,
  PATH_BRANCH_GROUP,
  PATH_DASHBOARD,
  PATH_MEMBER,
  SIDEBAR_DATA,
} from '@configs';
import { LogApp, useForceUpdate, useMediaQuery } from '@utils';

export const SidebarModule = memo(() => {
  const { themeMode } = useAppSelector(selectApp);
  const { sidebarCollapsed, navCurrentKey } = useAppSelector(selectLayout);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const forceUpdate = useForceUpdate();

  const isSMScreen = useMediaQuery(`(max-width:${MAT_SM_SCREEN_WIDTH})`);

  const handleChangeCollapsed = (value: boolean) => {
    dispatch(setSidebarCollapsed(value));
  };

  const handleSelectMenuItem: MenuProps['onClick'] = (e) => {
    LogApp('selectNav', e);
    const currentKey = Number(e.key);
    switch (currentKey) {
      case enumNavKey.DASHBOARD:
        dispatch(setNavCurrentIsOpenKey(enumMainNavKey.DASHBOARD));
        navigate(PATH_DASHBOARD);
        break;

      case enumNavKey.MEMBERS:
        dispatch(setNavCurrentIsOpenKey(enumMainNavKey.MEMBERS));
        dispatch(setCurrentPage(INITIAL_PAGE));
        navigate(PATH_MEMBER);
        break;
      default:
        return;
    }
    // dispatch(setNavCurrentKey(currentKey));
  };

  const navbarItems: MenuProps['items'] = SIDEBAR_DATA.map((item, _) => {
    LogApp('C0', item);
    return {
      key: item.pathKey,
      icon: (
        <Tooltip title={item?.label}>
          <NavMenuIcon pathKey={item.pathKey} className="menu__icon" />
        </Tooltip>
      ),
      label: item?.label,
      children: item?.subItems?.length
        ? item?.subItems?.map((subItem, _) => {
            return {
              key: subItem?.pathKey,
              label: subItem?.label,
              icon: (
                <Tooltip placement="right" title={subItem?.label}>
                  <NavMenuIcon pathKey={subItem?.pathKey} className="sub-menu__icon" size={20} />
                </Tooltip>
              ),
              children: subItem?.subOptions?.length
                ? item?.subItems?.map((option, _) => {
                    return {
                      key: option?.pathKey,
                      label: option?.label,
                      icon: (
                        <Tooltip title={option?.label}>
                          <NavMenuIcon
                            pathKey={option?.pathKey}
                            className="sub-option__icon"
                            size={20}
                          />
                        </Tooltip>
                      ),
                    };
                  })
                : undefined,
            };
          })
        : undefined,
    };
  });

  useEffect(() => {
    switch (true) {
      case pathname?.includes(PATH_DASHBOARD):
        dispatch(setNavCurrentKey(enumNavKey.DASHBOARD));
        break;
      case pathname?.includes(PATH_MEMBER):
        dispatch(setNavCurrentKey(enumNavKey.MEMBERS));
        break;
      default:
        dispatch(setNavCurrentKey(undefined));
        dispatch(setNavCurrentIsOpenKey(undefined));
        return;
    }
  }, [pathname]);

  return (
    <Sidebar
      isSMScreen={isSMScreen}
      collapsed={sidebarCollapsed}
      onChangeCollapsed={handleChangeCollapsed}
      themeMode={themeMode}
      navbarItems={navbarItems}
      onSelectMenuItem={handleSelectMenuItem}
    />
  );
});
