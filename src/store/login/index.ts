import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'login',
  initialState: { token: null, userInfor: null },
  reducers: {
    saveToken: (state, { payload: { token, userInfor } }) => {
      if (typeof token !== 'undefined') {
        state.token = token;
      }
      if (typeof userInfor !== 'undefined') {
        state.userInfor = userInfor;
      }
    },
  },
});

export const { saveToken } = slice.actions;

export default slice.reducer;
