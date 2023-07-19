import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

export const PageError500 = () => {
  //page hook
  const { t } = useTranslation();
  return <Result status="500" title="500" />;
};
