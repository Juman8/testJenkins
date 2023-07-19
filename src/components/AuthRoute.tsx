import { PATH_DASHBOARD } from '@configs';
import { selectAuth, useAppSelector } from '@redux';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthRoute = () => {
  const { accessToken } = useAppSelector(selectAuth);
  // if (process.env.NODE_ENV === 'development') {
  //   return <Outlet />;
  // }
  return accessToken ? <Navigate to={PATH_DASHBOARD} /> : <Outlet />;
};
