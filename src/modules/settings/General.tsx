import { useForm, useFormState } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useEffect, useMemo, useState } from 'react';

import { GeneralSection } from '@components';
import { selectApp, setLoading, useAppDispatch, useAppSelector } from '@redux';
import { LogApp, showAppToast } from '@utils';
import { ruleAPI, settingAPI } from '@api';
import { BirthdaySpecialFormSchema, CompanyInfoFormSchema } from '@validations';
import {
  IBirthdaySpecialRule,
  IGetBirthdaySpecialRoot,
  IGetMerchantInfo,
  IImageInfo,
  IMerchantInfo,
} from '@interfaces';

export const GeneralModule = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { themeMode } = useAppSelector(selectApp);
  const [data, setData] = useState<IMerchantInfo>();
  const [selectedImage, setSelectedImage] = useState(undefined);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    setValue,
    getValues,
    control,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(CompanyInfoFormSchema),
    defaultValues: useMemo(() => {
      return {
        workMail: data?.work_email,
        businessType: data?.business_type,
        phone: data?.phone,
        workPhone: data?.work_phone,
        peopleAmount: data?.people_amount,
        color: data?.theme_color?.color,
        font_size: data?.theme_color?.font_size,
        logo: data?.theme_color?.logo,
        allow_send_sms: false,
      };
    }, []),
  });
  const changeSelectedImage = (value: any) => {
    LogApp(value, 'vll');
    setSelectedImage(value);
  };
  const getData = async () => {
    try {
      // dispatch(setLoading(true));
      const res: IGetMerchantInfo = await settingAPI.getUserInfo();
      const merchantInfo = res.data as IMerchantInfo;
      setData(merchantInfo);
    } catch (error) {
      LogApp(error);
    } finally {
      // dispatch(setLoading(false));
    }
  };
  const onUploadImage = async () => {
    if (selectedImage)
      try {
        dispatch(setLoading(true));
        const body = new FormData();
        body.append('file', selectedImage);
        const res: any = await settingAPI.uploadImage(body);
        return res;
        // const imageInfo = res.data as IImageInfo;
        // if (res?.success) {
        // } else {
        //   throw res?.data;
        // }
      } catch (err: any) {
        const error = err?.response?.data;
        showAppToast(`${error?.message}`, 'error');
        LogApp('API CREATE RULE', err);
      } finally {
        dispatch(setLoading(false));
      }
  };
  const handleUpdateGeneralInfo = handleSubmit(async (value) => {
    dispatch(setLoading(true));
    const image = await onUploadImage();
    LogApp(image, 'image??');
    const body = {
      people_amount: Number(value.peopleAmount),
      business_type: value.businessType,
      phone: value.phone,
      work_phone: value.workPhone,
      work_email: value.workMail,
      theme_color: {
        logo: image?.data?.url || value.logo,
        color: value.color,
        font_size: value.font_size,
      },
      allow_send_sms: value?.allow_send_sms,
    };
    try {
      const res: any = await settingAPI.updateGeneralSetting(body);
      if (res?.success) {
        toast.success('Update successfully!', {
          position: 'top-right',
          autoClose: 1500,
          closeOnClick: true,
          pauseOnHover: true,
          theme: themeMode,
        });
      } else {
        throw res?.data;
      }
    } catch (err: any) {
      const error = err?.response?.data;
      showAppToast(`${error?.message}`, 'error');
      LogApp('API CREATE RULE', err);
    } finally {
      dispatch(setLoading(false));
    }
  });

  const handleCancel = () => {
    // navigate(PATH);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      reset({
        workMail: data?.work_email,
        businessType: data?.business_type,
        phone: data?.phone,
        workPhone: data?.work_phone,
        peopleAmount: data?.people_amount,
        color: data?.theme_color?.color,
        font_size: data?.theme_color?.font_size,
        logo: data?.theme_color?.logo,
        allow_send_sms: data?.allow_send_sms,
      });
    }
  }, [data]);

  return (
    <GeneralSection
      data={data}
      errors={errors}
      register={register}
      onSubmit={handleUpdateGeneralInfo}
      setValue={setValue}
      isEdit
      getValues={getValues}
      onCancel={handleCancel}
      watch={watch}
      changeSelectedImage={changeSelectedImage}
      control={control}
    />
  );
};
