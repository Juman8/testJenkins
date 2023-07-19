import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMerchantInfo } from '@interfaces';
import { RootState } from '.';

interface IAuth {
  accessToken?: string;
  refreshToken?: string;
  accountInfo?: IMerchantInfo;
  forgotEmail?: string;
  verifyMailHash?: string;
  resetPassHash?: string;
}

const initialState: IAuth = {
  accessToken: '',
  refreshToken: undefined,
  accountInfo: undefined,
  verifyMailHash: undefined,
  resetPassHash: undefined,
  forgotEmail: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setForgotEmail: (state, action: PayloadAction<string>) => {
      state.forgotEmail = action.payload;
    },
    setAccountInfo: (state, action: PayloadAction<any>) => {
      state.accountInfo = action.payload;
    },
    setVerifyMailHash: (state, action: PayloadAction<string>) => {
      state.verifyMailHash = action.payload;
    },
    setResetPassHash: (state, action: PayloadAction<string>) => {
      state.resetPassHash = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const {
  setAccessToken,
  setAccountInfo,
  setForgotEmail,
  setVerifyMailHash,
  setResetPassHash,
  logout,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
