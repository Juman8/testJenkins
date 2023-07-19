import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useEffect, useMemo, useState } from 'react';

import { UserProfileSection } from '@components';
import { selectApp, setLoading, useAppDispatch, useAppSelector } from '@redux';
import { LogApp, showAppToast } from '@utils';
import { settingAPI } from '@api';
import { IGetMerchantInfo, IMerchantInfo } from '@interfaces';
import * as yup from 'yup';
const schema = yup.object().shape({
  full_name: yup.string().required('Full name is required'),
});
const passSchema = yup.object({
  password: yup.string().required('Password is required'),
  new_password: yup.string().required('New password is required'),
  conf_password: yup
    .string()
    .oneOf([yup.ref('new_password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});
export const UserProfileModule = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { themeMode } = useAppSelector(selectApp);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    defaultValues: useMemo(() => {
      return {
        email: '',
        full_name: '',
        receive_noti: false,
      };
    }, []),
  });
  const {
    register: registerPass,
    handleSubmit: handleSubmitPass,
    reset: resetPass,
    formState: { errors: errorsPass },
  } = useForm<FieldValues>({
    resolver: yupResolver(passSchema),
    defaultValues: useMemo(() => {
      return {
        password: '',
        new_password: '',
        conf_password: '',
      };
    }, []),
  });
  const getUserInfo = async () => {
    try {
      dispatch(setLoading(true));
      const res: IGetMerchantInfo = await settingAPI.getUserInfo();
      const merchantInfo = res.data as IMerchantInfo;
      reset({
        email: merchantInfo?.email || '',
        full_name: merchantInfo?.full_name || '',
        receive_noti: merchantInfo?.receive_noti,
      });
    } catch (error: any) {
      showAppToast(`${error?.response?.data?.message}`, 'error');
      LogApp(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const updateUserInfo = handleSubmit(async (data) => {
    try {
      dispatch(setLoading(true));
      const res = await settingAPI.updateUserInfo({
        full_name: data.full_name,
        receive_noti: data.receive_noti,
      });
      showAppToast('Edit successfully!', 'success');
    } catch (error: any) {
      showAppToast(`${error?.response?.data?.message}`, 'error');
    } finally {
      dispatch(setLoading(false));
    }
  });
  const changePassword = handleSubmitPass(async (data) => {
    try {
      dispatch(setLoading(true));
      const res = await settingAPI.changePassword({
        password: data.password,
        newPassword: data.new_password,
      });
      showAppToast('Edit successfully!', 'success');
    } catch (error: any) {
      showAppToast(`${error?.response?.data?.message}`, 'error');
      LogApp(error, 'ndherr');
    } finally {
      dispatch(setLoading(false));
    }
  });
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserProfileSection
      errorsPass={errorsPass}
      registerPass={registerPass}
      errors={errors}
      onEditProfile={updateUserInfo}
      register={register}
      watch={watch}
      setValue={setValue}
      onSubmitChangePass={changePassword}
    />
  );
};
