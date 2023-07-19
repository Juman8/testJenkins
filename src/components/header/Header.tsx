import { Divider } from 'antd';
import React, { forwardRef } from 'react';

import { enumThemeMode, MAIN_THEME_DATA, MAT_SM_SCREEN_WIDTH } from '@configs';
import { BreadcrumbsModule, MenuDropdownModule } from '@modules';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserHeaderIcon } from '../Icon';
import { SharedDropdown } from '../shared';
import { StyledHeader } from './styles';
import { useMediaQuery } from '@utils';

interface IProps {
  openMenuDropdown?: boolean;
  themeMode?: enumThemeMode;
  collapsed: boolean;
  showMenuDropdown?: boolean;
  changeCollapsed: (value: boolean) => void;
  handleToggleDropdown: () => void;
}

export const Header = (props: IProps) => {
  const isSMScreen = useMediaQuery(`(max-width:${MAT_SM_SCREEN_WIDTH})`);
  const { themeMode, collapsed, showMenuDropdown, changeCollapsed, handleToggleDropdown } = props;
  return (
    <StyledHeader className="header" theme_mode={themeMode} app_theme={MAIN_THEME_DATA.mainColor}>
      <div className="header-container">
        <div className="header-logo">
          <div className="head">
            <span className="title">Admin</span>
          </div>
          {!isSMScreen &&
            React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => changeCollapsed(!collapsed),
            })}
        </div>
        <Divider className="header-divider" type="vertical" />
        <div className="header-right">
          <div className="header-content">
            <BreadcrumbsModule />
            <div className="right-content">
              <div
                className="app-btn settings-btn ignoreOutSide-MenuDropdown"
                onClick={handleToggleDropdown}
              >
                <SharedDropdown
                  dropdown={<MenuDropdownModule />}
                  overlayClassName="header-menu__dropdown ignoreOutSide-MenuDropdown"
                  open={showMenuDropdown}
                >
                  <UserHeaderIcon size={18} />
                </SharedDropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
