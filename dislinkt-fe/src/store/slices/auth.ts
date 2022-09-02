import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SignUpFormValues from "../../models/forms/SingUpFormValues";

import { UserDataPayload } from "../../models/slices/auth";

const initAuthSliceValues = {
  signInActive: false,
  signUpData: {} as SignUpFormValues,
  userData: {} as UserDataPayload,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthSliceValues,
  reducers: {
    setSignInActive(state, action: PayloadAction<boolean>) {
      state.signInActive = action.payload;
    },
    setSignUpData(state, action: PayloadAction<SignUpFormValues>) {
      state.signUpData = action.payload;
    },
    setUserData(state, action: PayloadAction<UserDataPayload>) {
      state.userData = action.payload;
    },
  },
});

export const { setSignInActive, setSignUpData, setUserData } =
  authSlice.actions;

export default authSlice.reducer;
