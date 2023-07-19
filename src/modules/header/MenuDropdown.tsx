import { useNavigate } from 'react-router-dom';
import { MenuProps } from 'antd';
import { useRef } from 'react';

import { MenuDropdown } from '@components';
import {
  logout,
  setNavCurrentIsOpenKey,
  setNavCurrentKey,
  setShowHeaderMenu,
  useAppDispatch,
} from '@redux';
import {
  enumNavKey,
  enumSettingItemKey,
  PATH_BRANCH_GROUP,
  PATH_GENERAL,
  PATH_POLICY,
  PATH_USER_PROFILE,
  RESET,
} from '@configs';
import { LogApp, useOnClickOutside } from '@utils';

interface IProps {
  any?: any;
}

export const MenuDropdownModule = (props: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCloseDropdown = () => {
    dispatch(setShowHeaderMenu(false));
    LogApp('ddddd');
  };

  const menuDropdown = useRef<HTMLDivElement>(null);

  const handleSelectMenuItem: MenuProps['onClick'] = (e) => {
    LogApp('selectNav', e);
    const currentKey = Number(e.key);
    switch (currentKey) {
      case enumSettingItemKey.GENERAL:
        navigate(PATH_GENERAL);
        break;
      case enumSettingItemKey.PROFILE:
        navigate(PATH_USER_PROFILE);
        break;
      case enumSettingItemKey.POLICY:
        navigate(PATH_POLICY);
        break;
      case enumSettingItemKey.BRANCH_GROUP:
        navigate(PATH_BRANCH_GROUP);
        break;
      default:
        return;
    }
    dispatch(setNavCurrentKey(undefined));
    dispatch(setNavCurrentIsOpenKey(undefined));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch({ type: RESET });
  };

  return (
    <MenuDropdown
      ref={menuDropdown}
      handleCloseDropdown={handleCloseDropdown}
      handleLogout={handleLogout}
      onSelectMenuItem={handleSelectMenuItem}
    />
  );
};
