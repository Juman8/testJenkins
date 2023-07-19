import * as yup from 'yup';

export const RuleFormSchema = yup.object().shape({
  name: yup.string().required('Company name is required'),
  ruleType: yup.string(),
  startTime: yup.string(),
  endTime: yup.string(),
  startDate: yup.string().required('Duration is required'),
  // endDate: yup.string().required('Duration is required'),
  endDate: yup.string(),
  rewardType: yup.string(),
  spent: yup.string().required('Spent value is required'),
  rebate: yup.string().required('Rebate value is required'),
  fullsum: yup.boolean(),
});
