import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SignInPayload } from "../../models/slices/auth";

const initAuthSliceValues = {
  isAuthenticated: "helo",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthSliceValues,
  reducers: {
    signIn(state, action: PayloadAction<SignInPayload>) {
      state.isAuthenticated = "ola";
    },
  },
});

export const { signIn } = authSlice.actions;

export default authSlice.reducer;
