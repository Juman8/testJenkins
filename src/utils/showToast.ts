import { toast } from 'react-toastify';

//default
export const showAppToast = (
  text: any,
  type: 'success' | 'error' | 'info' | 'warning',
  themeMode?: 'colored' | 'light' | 'dark',
) => {
  switch (type) {
    case 'success':
      toast.success(text, {
        position: 'top-right',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode || 'colored',
      });
      break;
    case 'error':
      toast.error(text, {
        position: 'top-right',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode || 'colored',
      });
      break;
    case 'warning':
      toast.warning(text, {
        position: 'top-right',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode || 'colored',
      });
      break;
    default:
      toast.info(text, {
        position: 'top-right',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
      });
      break;
  }
};
