import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { PATH_FORGOT_PASSWORD, PATH_LOGIN, PATH_RESET_PASSWORD } from '@configs';
import { LogApp } from '@utils';
import { VerifyEmailForm } from '@components';
import {
  openToast,
  selectAuth,
  setLoading,
  setResetPassHash,
  setVerifyMailHash,
  useAppDispatch,
  useAppSelector,
} from '@redux';
import { authAPI } from '@api';
import { useLayoutEffect, useState } from 'react';
import moment from 'moment';
import md5 from 'md5';
import { debounce } from 'lodash';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  otp: yup.string().required('OTP is required'),
});

export const VerifyEmailModule = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { verifyMailHash, forgotEmail } = useAppSelector(selectAuth);

  const [resendOTPCountdown, setResendOTPCountdown] = useState<boolean>(false);

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

  useLayoutEffect(() => {
    if (!verifyMailHash) {
      navigate(PATH_LOGIN);
    }
  }, []);

  const handleRedirectToForgot = () => {
    navigate(PATH_FORGOT_PASSWORD);
  };

  const handleVerifyEmail = handleSubmit(async (value) => {
    LogApp('Submit verify', value);
    if (verifyMailHash) {
      const body = {
        otp: value.otp,
        hash: verifyMailHash || '',
      };
      try {
        dispatch(setLoading(true));
        const res: any = await authAPI.verifyEmail(body);
        const data = res.data as string;
        reset({ email: '' });
        if (res?.success) {
          dispatch(setResetPassHash(data));
          navigate(PATH_RESET_PASSWORD);
        } else {
          throw data;
        }
      } catch (err: any) {
        reset({ otp: '' });
        LogApp('ERROR API Verify Email', err?.response);
        const error = err?.response?.data;
        setError('otp', { type: 'custom', message: error?.message });
      } finally {
        dispatch(setLoading(false));
      }
    }
  });

  const genForgotEmailHash = (email: string) => {
    const secretKey = process.env.REACT_APP_SEND_FORGOT_EMAIL_KEY;
    const plainStr = email + secretKey + moment().format('DD/MM/YYYY');
    const checkHash = md5(plainStr);
    return checkHash;
  };

  const handleResendEmail = debounce(() => {
    if (!resendOTPCountdown) {
      handleSendOTP();
    }
  }, 500);

  const onEndResendOTPCountdown = () => {
    setResendOTPCountdown(false);
  };

  const handleSendOTP = async () => {
    if (forgotEmail) {
      const hash = genForgotEmailHash(forgotEmail) as string;
      const body = {
        email: forgotEmail,
        hash: hash,
      };
      try {
        dispatch(setLoading(true));
        const res: any = await authAPI.forgotPassword(body);
        const data = res.data as string;
        if (res?.success) {
          dispatch(setVerifyMailHash(data));
          toast.success('A new verify code has been sent to your email', {
            position: 'top-right',
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            theme: 'light',
          });
          setResendOTPCountdown(true);
        } else {
          throw data;
        }
      } catch (err: any) {
        LogApp('ERROR API Send Forgot Email', err?.response);
        const error = err?.response?.data;
        setError('otp', { type: 'custom', message: error?.message });
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <VerifyEmailForm
      countdown={resendOTPCountdown}
      register={register}
      redirectToForgot={handleRedirectToForgot}
      errors={errors}
      handleVerifyEmail={handleVerifyEmail}
      handleResendEmail={handleResendEmail}
      onEndResendOTPCountdown={onEndResendOTPCountdown}
    />
  );
};
