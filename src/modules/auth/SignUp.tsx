import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { MAIN_THEME_DATA, PATH_FORGOT_PASSWORD, PATH_LOGIN } from '@configs';
import { LogApp, showAppToast } from '@utils';
import { LoginForm, SignUpForm } from '@components';
import { useState } from 'react';
import { debounce } from 'lodash';
import { selectApp, setLoading, useAppDispatch, useAppSelector } from '@redux';
import { authAPI } from '@api';

const schema = yup.object().shape({
  name: yup.string().required('Company name is required'),
  brandName: yup.string().required('Company brand is required'),
  businessType: yup.string().required('Type of business is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Confirm password not match'),
  email: yup.string().required('Work email is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .min(9, 'Phone number is invalid')
    .max(13, 'Phone number is invalid'),
  workPhone: yup.string(),
  workMail: yup.string(),
  fullName: yup.string(),
  people: yup.string().required('Number of company people is required'),
});

export const SignUpModule = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { themeMode } = useAppSelector(selectApp);
  const [agreePolicy, setAgreePolicy] = useState<boolean>(false);

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

  const handleChangeAgreePolicy = debounce(() => {
    setAgreePolicy(!agreePolicy);
  }, 500);

  const handleSignUp = handleSubmit(async (value) => {
    LogApp('Submit Sign up', value);
    const body = {
      email: value.email,
      name: value.name,
      password: value.password,
      phone: value.phone,
      work_phone: value.workPhone,
      work_email: value.workMail,
      brand_name: value.brandName,
      business_type: value.businessType,
      people_amount: Number(value.people),
      theme_color: MAIN_THEME_DATA.mainColor,
      full_name: value.fullName,
    };
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.register(body);
      if (res?.success) {
        showAppToast('Register successfully!', 'success');
        navigate(PATH_LOGIN);
        reset();
      } else {
        throw res?.data;
      }
    } catch (err: any) {
      const error = err?.response?.data;
      setError('people', { type: 'custom', message: error?.message });
      LogApp('API Sign up', err);
    } finally {
      dispatch(setLoading(false));
    }
  });

  return (
    <SignUpForm
      register={register}
      redirectToLogin={handleRedirectToLogin}
      errors={errors}
      handleSignUp={handleSignUp}
      agreePolicy={agreePolicy}
      changeAgreePolicy={handleChangeAgreePolicy}
    />
  );
};
