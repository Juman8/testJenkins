import { AppLayout, LayoutError } from '@layouts';
import { IRoute } from '@interfaces';
import {
  PageError404,
  LoginPage,
  DashboardPage,
  SignUpPage,
  ForgotPasswordPage,
  VerifyEmailPage,
  ResetPasswordPage,
  GeneralSettingPage,
  UserProfilePage,
} from '@pages';
import {
  PATH_404,
  PATH_HOME,
  PATH_LOGIN,
  PATH_DASHBOARD,
  PATH_FORGOT_PASSWORD,
  PATH_SIGN_UP,
  PATH_RESET_PASSWORD,
  PATH_VERIFY_EMAIL,
  PATH_GENERAL,
  PATH_USER_PROFILE,
} from './navigation';

export const routes: Array<IRoute> = [
  //dashboard
  { path: PATH_DASHBOARD, page: DashboardPage, layout: AppLayout },
  //System settings
  { path: PATH_GENERAL, page: GeneralSettingPage, layout: AppLayout },
  { path: PATH_USER_PROFILE, page: UserProfilePage, layout: AppLayout },
  //
  { path: PATH_HOME, page: DashboardPage, layout: AppLayout },
  { path: PATH_404, page: PageError404, layout: LayoutError },
  { page: PageError404, layout: LayoutError },
];

export const normalRoutes = [PATH_HOME];

export const authRoutes: Array<IRoute> = [
  //auth
  { path: PATH_LOGIN, page: LoginPage, auth: true },
  { path: PATH_SIGN_UP, page: SignUpPage, auth: true },
  { path: PATH_FORGOT_PASSWORD, page: ForgotPasswordPage, auth: true },
  { path: PATH_VERIFY_EMAIL, page: VerifyEmailPage, auth: true },
  { path: PATH_RESET_PASSWORD, page: ResetPasswordPage, auth: true },
  { page: PageError404, layout: LayoutError },
];
