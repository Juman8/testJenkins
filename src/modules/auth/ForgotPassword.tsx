import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import md5 from 'md5';

import { PATH_LOGIN, PATH_VERIFY_EMAIL } from '@configs';
import { LogApp } from '@utils';
import { ForgotPasswordForm } from '@components';
import moment from 'moment';
import { setForgotEmail, setLoading, setVerifyMailHash, useAppDispatch } from '@redux';
import { authAPI } from '@api';

const schema = yup.object().shape({
  email: yup.string().required('Email is required'),
});

export const ForgotPasswordModule = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

  const genForgotEmailHash = (email: string) => {
    const secretKey = process.env.REACT_APP_SEND_FORGOT_EMAIL_KEY;
    const plainStr = email + secretKey + moment().format('DD/MM/YYYY');
    const checkHash = md5(plainStr);
    return checkHash;
  };

  const handleForgotPassword = handleSubmit(async (value) => {
    const hash = genForgotEmailHash(value?.email) as string;
    LogApp('Submit forgot', value);
    const body = {
      email: value?.email,
      hash: hash,
    };
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.forgotPassword(body);
      const data = res.data as string;
      reset({ email: '' });
      if (res?.success) {
        dispatch(setVerifyMailHash(data));
        dispatch(setForgotEmail(value.email));
        navigate(PATH_VERIFY_EMAIL);
      } else {
        throw data;
      }
    } catch (err: any) {
      reset({ email: '' });
      LogApp('ERROR API Send Forgot Email', err?.response);
      const error = err?.response?.data;
      setError('email', { type: 'custom', message: error?.message });
    } finally {
      dispatch(setLoading(false));
    }
  });

  return (
    <ForgotPasswordForm
      register={register}
      redirectToLogin={handleRedirectToLogin}
      errors={errors}
      handleForgotPassword={handleForgotPassword}
    />
  );
};
