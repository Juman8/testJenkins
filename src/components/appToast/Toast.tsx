import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { useAppSelector } from 'src/redux/store';
import { closeToast, selectToast } from 'src/redux/Slices/toast';
import { Alert } from 'antd';

export const AppToast = () => {
  //page hooks
  const toast = useAppSelector(selectToast).toast;
  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeToast());
  };
  return (
    <>
      {/* <Snackbar
      anchorOrigin={{
        vertical: toast.vertical || "top",
        horizontal: toast.horizontal || "right",
      }}
      open={toast.open}
      autoHideDuration={toast.autoHideDuration}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={toast.type}>
        {toast.message}
      </Alert>
    </Snackbar> */}
      <ToastContainer
        // position="top-right"
        position={`${toast.vertical || 'top'}-${toast.horizontal || 'right'}`}
        autoClose={toast.autoHideDuration}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        limit={1}
        style={{ fontSize: '1.6rem' }}
      />
    </>
  );
};
