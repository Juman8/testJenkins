import styled, { css } from 'styled-components';
import { Layout } from 'antd';

import {
  enumThemeMode,
  HEADER_HEIGHT,
  HEADER_PADDING_TOP,
  MAT_SM_SCREEN_WIDTH,
  SIDEBAR_ICON_SIZE,
} from '@configs';
import { opacityHex } from '@theme';

const { Sider } = Layout;

export const StyledSidebar = styled((props) => <Sider {...props} />)<{
  $appTheme?: string;
  $themeMode?: enumThemeMode;
  $collapsed?: boolean;
  $isSMScreen?: boolean;
}>`
  left: 0;
  /* top: ${HEADER_HEIGHT}; */
  z-index: 9;
  background: ${(p) => p?.theme.colors?.sidebar?.background};
  padding: calc(${HEADER_HEIGHT} + ${HEADER_PADDING_TOP} + 3.2rem) 2rem;
  transition: 0.2s;
  svg.menu__icon {
    opacity: 0.75;
  }
  .ant-menu-item,
  .ant-menu-inline.ant-menu-root .ant-menu-submenu-title {
    padding: 2.5rem 0;
    border-radius: 1.2rem;
    padding-left: 2rem !important;
  }

  .ant-menu-submenu-title {
    /* ${(p) =>
      p.$collapsed &&
      css` */
        border-radius: 1.2rem;
        margin-bottom: 0.6rem;
      /* `}  */
  }

  .ant-layout-sider-children,
  .ant-menu {
    background: ${(p) => p?.theme.colors?.sidebar?.background};
  }

  .ant-menu-item,
  /* .ant-menu-inline .ant-menu-submenu, */
  .ant-menu-inline .ant-menu-submenu-title,
  .ant-menu-inline .ant-menu-item {
    .ant-menu-title-content {
      font-size: 1.4rem;
      color: #4f5e70;
      font-weight: 400;
    }
    &:not(:last-child) {
      margin-bottom: 0.6rem;
    }
  }

  .ant-menu-inline .ant-menu-submenu-title {
    margin-bottom: 0.6rem;
  }

  .ant-menu-light .ant-menu-submenu-title:hover,
  .ant-menu-inline .ant-menu-item:hover
  /* .ant-menu-light .ant-menu-submenu-title:focus,
  .ant-menu-inline .ant-menu-item:focus  */ {
    background-color: #f1f5f9;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }

  /* .ant-menu-submenu-open .ant-menu-submenu-title {
    background-color: #f1f5f9;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  } */
  .ant-menu-submenu-selected .ant-menu-submenu-title {
    background-color: #f1f5f9;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }

  .ant-menu-inline .ant-menu-item:after {
    border: none;
  }

  .ant-menu.ant-menu-inline-collapsed > .ant-menu-item,
  .ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
    padding: 0 calc(50% - ${SIDEBAR_ICON_SIZE} / 2);
  }

  .ant-layout-sider-trigger {
    /* display: none; */
    left: 0;
    background: ${(p: any) =>
      p.$themeMode === enumThemeMode.DARK
        ? p?.theme.colors?.sidebar?.background
        : p.$appTheme.mainColor};
  }

  .ant-menu .ant-menu-item-selected {
    background-color: #f1f5f9;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    .ant-menu-title-content {
      font-weight: 500;
      color: ${(p) => p.theme?.colors?.sidebar?.active};
    }
    .ant-menu-item-icon {
      path {
        /* fill: ${(p) => p.theme?.colors?.active}; */
        /* stroke: ${(p) => p.theme?.colors?.active}; */
      }
    }
  }

  .ant-menu-sub {
    background-color: #f1f5f98d;
    padding: 0.4rem;
    margin-bottom: 0.4rem;
    border-radius: 1.2rem;
    position: relative;
    overflow: hidden;
    .ant-menu-item {
      &:after {
        /* border-right: 3px solid
          ${(p: any) =>
          p.$themeMode === enumThemeMode.DARK
            ? p?.theme.colors?.sidebar?.active
            : p.$appTheme + opacityHex[65]}; */
        border-right: 3px solid ${(p: any) => p?.theme.colors?.sidebar?.active};
      }
    }

    .ant-menu-item-selected {
      border-radius: unset;
      background-color: #ffffffb5;
      border-radius: 0.8rem 0 0 0.8rem;
      box-shadow: none;
      .ant-menu-title-content {
        font-weight: 500;
        color: ${(p) => p.theme?.colors?.sidebar?.active};
      }
      .ant-menu-item-icon {
        path {
          fill: ${(p) => p.theme?.colors?.sidebar?.active};
          stroke: ${(p) => p.theme?.colors?.sidebar?.active};
        }
      }
    }
  }

  .ant-menu-item .ant-menu-item-icon + span,
  .ant-menu-submenu-title .ant-menu-item-icon + span {
    @media (max-width: ${MAT_SM_SCREEN_WIDTH}) {
      margin-left: 2.2rem;
    }
    ${(p) =>
      p.$collapsed &&
      css`
        margin-left: 2.2rem;
      `}
  }

  .ant-menu-submenu-arrow {
    @media (max-width: calc(${MAT_SM_SCREEN_WIDTH})) {
      display: none;
    }
    ${(p) =>
      (p.$collapsed || p?.$isSMScreen) &&
      css`
        display: none;
      `}
  }
`;
