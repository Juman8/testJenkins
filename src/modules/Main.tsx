import { Routes } from 'react-router';
import { BrowserRouter, Route, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { useEffect } from 'react';

import { IRoute } from '@interfaces';
import { authRoutes, routes } from 'src/routes';
import { DefaultLayout } from '@layouts';
import { selectAppLoading, selectThemeMode, useAppSelector } from 'src/redux';
import { enumThemeMode } from '@configs';
import { themes, useTheme } from '@theme';
import { AppRoute, AppToast, AuthRoute } from '@components';

interface IProps {
  setTheme: (theme: any) => void;
}
export const ModuleMain = (props: IProps) => {
  const { setTheme } = props;
  const { setCurrentTheme } = useTheme();
  const themeMode = useAppSelector(selectThemeMode);
  const appLoading = useAppSelector(selectAppLoading);

  useEffect(() => {
    updateTheme();
  }, [themeMode]);

  const updateTheme = () => {
    if (themeMode === enumThemeMode.LIGHT) {
      setTheme(themes.theme.light);
    } else {
      setTheme(themes.theme.dark);
    }
  };

  // DEV: Update theme when dev
  // if (process.env.NODE_ENV === 'development') {
  useEffect(() => {
    if (themeMode === enumThemeMode.LIGHT) {
      setTheme(themes.theme.light);
      setCurrentTheme(themes.theme.light);
    } else {
      setTheme(themes.theme.dark);
      setCurrentTheme(themes.theme.dark);
    }
  }, []);
  // }

  return (
    <Spin className="app-loading" spinning={appLoading} size="large">
      <BrowserRouter>
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<AppRoute />}>
            {routes.map((route: IRoute, index: number) => {
              const Page = route.page;
              const Layout = route.layout || DefaultLayout;
              if (route.auth) return;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout {...route}>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Route>
          {/* Auth Route */}
          <Route path="/" element={<AuthRoute />}>
            {authRoutes.map((route: IRoute, index: number) => {
              const Page = route.page;
              const Layout = route.layout || DefaultLayout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout {...route}>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Route>
        </Routes>
        <AppToast />
      </BrowserRouter>
    </Spin>
  );
};
