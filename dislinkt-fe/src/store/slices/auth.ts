import { createSlice } from "@reduxjs/toolkit";

const initAuthSliceValues = {
  isAuthenticated: "helo",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthSliceValues,
  reducers: {
    login(state) {
      state.isAuthenticated = "ola";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
