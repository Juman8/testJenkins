import * as yup from 'yup';

export const CompanyInfoFormSchema = yup.object().shape({
  businessType: yup.string(),
  phone: yup.string().required('Phone is required'),
  workPhone: yup.string().required('Work phone is required'),
  peopleAmount: yup.string(),
  workMail: yup.string().required('Work email is required'),
});
