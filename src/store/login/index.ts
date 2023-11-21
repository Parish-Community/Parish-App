import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'login',
  initialState: { token: null, userInfor: null, isLogin: false },
  reducers: {
    saveToken: (state, { payload: { token, userInfor, isLogin } }) => {
      if (typeof token !== 'undefined') {
        state.token = token;
      }
      if (typeof userInfor !== 'undefined') {
        state.userInfor = userInfor;
      }
      if (typeof isLogin !== 'undefined') {
        state.isLogin = isLogin;
      }
    },
    logoutApp: state => {
      state.isLogin = false;
      state.token = null;
      state.userInfor = null;
    },
  },
});

export const { saveToken, logoutApp } = slice.actions;

export default slice.reducer;
