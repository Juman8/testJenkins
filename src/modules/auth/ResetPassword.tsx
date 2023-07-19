import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useLayoutEffect } from 'react';

import { PATH_LOGIN } from '@configs';
import { LogApp, showAppToast } from '@utils';
import { ResetPasswordForm } from '@components';
import { selectAuth, setLoading, setResetPassHash, useAppDispatch, useAppSelector } from '@redux';
import { authAPI } from '@api';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  newPassword: yup.string().required('New password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('newPassword'), null], 'Confirm password not match'),
});

export const ResetPasswordModule = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { resetPassHash } = useAppSelector(selectAuth);

  useLayoutEffect(() => {
    if (!resetPassHash) {
      navigate(PATH_LOGIN);
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleRedirectToLogin = () => {
    navigate(PATH_LOGIN);
  };

  const handleResetPassword = handleSubmit(async (value) => {
    LogApp('Submit Reset', value);
    if (resetPassHash) {
      const body = {
        newPassword: value.newPassword,
        hash: resetPassHash || '',
      };
      try {
        dispatch(setLoading(true));
        const res: any = await authAPI.resetPassword(body);
        const data = res.data as string;
        reset({ newPassword: '' });
        if (res?.success) {
          dispatch(setResetPassHash(''));
          showAppToast('Password changed! Please login with the new password!', 'success');
          navigate(PATH_LOGIN);
        } else {
          throw data;
        }
      } catch (err: any) {
        reset({ newPassword: '' });
        LogApp('ERROR API Verify Email', err?.response);
        const error = err?.response?.data;
        setError('newPassword', { type: 'custom', message: error?.message });
      } finally {
        dispatch(setLoading(false));
      }
    }
  });

  return (
    <ResetPasswordForm
      register={register}
      redirectToLogin={handleRedirectToLogin}
      errors={errors}
      handleResetPassword={handleResetPassword}
    />
  );
};
