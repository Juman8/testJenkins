import {
  ILoginFields,
  ILogoutFields,
  IRegisterFields,
  IResetPasswordFields,
  ISendMailForgotFields,
  IVerifyEmailFields,
} from '@interfaces';
import axiosClient from './axiosClient';

export const authAPI = {
  login: (values: ILoginFields) => {
    const url = '/merchant/login';
    return axiosClient.post(url, values);
  },
  register: (values: IRegisterFields) => {
    const url = '/merchant/register';
    return axiosClient.post(url, values);
  },
  forgotPassword: (values: ISendMailForgotFields) => {
    const url = '/merchant/send-otp';
    return axiosClient.post(url, values);
  },
  verifyEmail: (values?: IVerifyEmailFields) => {
    const url = '/merchant/verify-otp';
    return axiosClient.post(url, values);
  },
  resetPassword: (values?: IResetPasswordFields) => {
    const url = '/merchant/forget-password';
    return axiosClient.post(url, values);
  },
  logout: (values?: ILogoutFields) => {
    const url = '/merchant/logout';
    return axiosClient.post(url, values);
  },
};
