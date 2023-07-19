import { Navigate, Outlet, Route, useNavigate } from 'react-router-dom';

import { selectAuth, useAppSelector } from '@redux';
import { ALL_THEMES, PATH_LOGIN } from '@configs';
import { useLayoutEffect } from 'react';
import { setToLS } from '@utils';
import { themes } from '@theme';

export const AppRoute = () => {
  const { accessToken } = useAppSelector(selectAuth);
  // if (process.env.NODE_ENV === 'development') {
  //   return <Outlet />;
  // }

  useLayoutEffect(() => {
    setToLS(ALL_THEMES, themes);
    // WebFont.load({
    //   google: {
    //     families: getFonts(),
    //   },
    // });
  }, []);

  return accessToken ? <Outlet /> : <Navigate to={PATH_LOGIN} />;
};
