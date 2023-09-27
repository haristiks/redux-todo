import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  status: false,
};

export const loginSlice = createSlice({
  name: "loginStatus",
  initialState: INITIAL_STATE,
  reducers: {
    loggin: (state) => {
      state.status = true;
    },
    logout: (state) => {
      state.status = false;
    },
  },
});

export const { loggin,logout } = loginSlice.actions;
export default loginSlice.reducer;
