import { forwardRef, useRef } from 'react';
import { Divider, Menu } from 'antd';
import styled from 'styled-components';

import { enumSettingItemKey, enumThemeMode, MAIN_THEME_DATA } from '@configs';
import { selectAuth, useAppSelector } from '@redux';
import { GeneralIcon, LogoutIcon, PolicyIcon, ProfileIcon } from '../Icon';
import { LogApp, useOnClickOutside } from '@utils';
import { useNavigate } from 'react-router-dom';

interface IMenuDropdownProps {
  handleLogout?: () => void;
  handleCloseDropdown: () => void;
  onSelectMenuItem?: (value: any) => void;
}

export const MenuDropdown = forwardRef(
  (props: IMenuDropdownProps, ref?: React.Ref<HTMLDivElement>) => {
    const { accountInfo } = useAppSelector(selectAuth);

    const { handleLogout, handleCloseDropdown, onSelectMenuItem } = props;

    const navigate = useNavigate();
    const menuDropdown = useRef<HTMLDivElement>(null);

    useOnClickOutside(
      menuDropdown,
      () => {
        handleCloseDropdown();
      },
      'ignoreOutSide-MenuDropdown',
    );

    return (
      <StyledMenuDropdown
        className="dropdown-menu"
        $appTheme={MAIN_THEME_DATA.mainColor}
        // getPopupContainer={() => document.getElementById('root')}
      >
        <div ref={menuDropdown}>
          <div className="heading">
            <div className="name">{accountInfo?.name}</div>
            <div className="email">{accountInfo?.email}</div>
          </div>
          <Divider className="menu-dropdown_divider" />
          <Menu
            onClick={onSelectMenuItem}
            items={[
              {
                key: enumSettingItemKey.GENERAL,
                label: <span>General</span>,
                icon: <GeneralIcon size={15} />,
                // disabled: process.env.NODE_ENV === 'development' ? false : true,
              },
              {
                key: enumSettingItemKey.PROFILE,
                label: <span>Profile</span>,
                icon: <ProfileIcon size={15} />,
                // disabled: process.env.NODE_ENV === 'development' ? false : true,
              },
              // {
              //   key: enumSettingItemKey.BRANCH_GROUP,
              //   label: <span>Branch Group</span>,
              //   disabled: false,
              //   // icon: <PolicyIcon size={15} />,
              // },
              {
                key: enumSettingItemKey.POLICY,
                label: <span>Privacy Policy</span>,
                icon: <PolicyIcon size={15} />,
                // disabled: true,
                // disabled: process.env.NODE_ENV === 'development' ? false : true,
              },
            ]}
          />
          <Divider className="menu-dropdown_divider" />
          <div className="logout" onClick={handleLogout}>
            <LogoutIcon size={16} />
            <span>Logout</span>
          </div>
        </div>
      </StyledMenuDropdown>
    );
  },
);

export const StyledMenuDropdown = styled((props) => <div {...props} />)<{
  size?: string;
  $appTheme?: string;
}>`
  width: 100%;
  height: 100%;
  background: ${(p: any) =>
    p.theme_mode === enumThemeMode.DARK ? p?.theme.colors?.header?.background : p.$appTheme};
  color: ${(p: any) => p?.theme.colors?.header?.text};
  padding: 0.8rem;
  box-shadow: 0px 3px 10px #00000017;
  .heading {
    padding: 0.8rem;
    .name {
      font-weight: 500;
      font-size: 1.4rem;
    }
    .email,
    .brand {
      font-weight: 400;
      font-size: 1.2rem;
    }
  }
  .ant-dropdown-menu {
    /* background: ${(p: any) =>
      p.theme_mode === enumThemeMode.DARK ? p?.theme.colors?.header?.background : p.$appTheme}; */
    background: transparent;
    box-shadow: none;
  }
  .ant-dropdown-menu-item,
  .ant-dropdown-menu-submenu-title {
    color: ${(p: any) => p?.theme.colors?.header?.text};
  }

  .ant-dropdown-menu-item-disabled:hover,
  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title-disabled:hover {
    background-color: rgb(255 255 255 / 0.05);
    border-radius: 0.6rem;
  }

  .menu-dropdown_divider {
    margin: 1rem 0;
    border-top: 1px solid ${(p: any) => p?.theme.colors?.header?.text};
    opacity: 0.3;
  }

  .logout {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    border-radius: 0.6rem;
    span {
      margin-left: 0.8rem;
      font-size: 1.4rem;
      font-weight: 400;
    }
    &:hover {
      cursor: pointer;
      background-color: rgb(255 255 255 / 0.05);
    }
  }
`;
