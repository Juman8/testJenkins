import styled from 'styled-components';
import { Layout } from 'antd';

import {
  AUTH_THEME_COLOR,
  enumThemeMode,
  HEADER_HEIGHT,
  MAIN_THEME_DATA,
  SIDEBAR_WIDTH,
} from '@configs';

const { Header } = Layout;

export const StyledHeader = styled((props) => <Header {...props} />)<{
  app_theme?: string;
  theme_mode?: enumThemeMode;
}>`
  padding: 2rem 1.2rem;
  box-shadow: 0 0 11px rgb(0 0 0 / 13%);
  transition: 0.2s;
  top: 0;
  left: 0;
  height: ${HEADER_HEIGHT};
  position: fixed;
  width: 100%;
  z-index: 100;

  align-items: center;

  @media (min-width: 768px) {
    display: block;
    --tw-gradient-to: transparent;
    --tw-gradient-from: rgb(var(--color-slate-100));
    --tw-gradient-stops: var(--tw-gradient-from),
      var(--tw-gradient-to, rgb(var(--color-slate-100) / 0));
    background: linear-gradient(to bottom, var(--tw-gradient-stops));
  }

  .header-container {
    height: ${HEADER_HEIGHT};
    background: ${(p: any) =>
      p.theme_mode === enumThemeMode.DARK ? p?.theme.colors?.header?.background : p.app_theme};
    /* width: calc(100vw - 1.2rem * 2); */
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 0.75rem;
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      top: -1.6rem;
      margin-left: 1.75rem;
      margin-right: 1.75rem;
      margin-top: 0.75rem;
      height: 65px;
      border-radius: 0.75rem;
      background-color: ${MAIN_THEME_DATA.mainColor};
      opacity: 0.3;
    }
  }

  .header-logo {
    position: relative;
    width: calc(${SIDEBAR_WIDTH} - 1.2rem);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head {
      display: flex;
      align-items: center;
      .title {
        font-size: 1.9rem;
        font-weight: 2rem;
        color: ${(p: any) => p?.theme.colors?.header?.text};
      }
    }
  }
  .header-divider {
    position: relative;
    height: calc(${HEADER_HEIGHT} - 1rem * 2);
    margin: 0;
    border-left: 1px solid rgb(255 255 255 / 0.08);
  }
  .header-right {
    position: relative;
    padding: 2rem 0;
    width: calc(100vw - ${SIDEBAR_WIDTH});
    .header-content {
      width: 100%;
      padding: 0 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .app-breadcrumb-item:not(:last-child) .app-breadcrumb-link a {
        color: ${(p) => p?.theme.colors?.header?.text};
      }
      .app-breadcrumb-separator {
        color: ${(p) => p?.theme.colors?.header?.subText};
      }
      .app-breadcrumb-item:last-child .app-breadcrumb-link a {
        color: ${(p) => p?.theme.colors?.header?.subText};
      }
    }
  }
`;
