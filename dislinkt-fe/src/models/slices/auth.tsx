import { NavigateFunction } from "react-router-dom";

import SignInFormValues from "../forms/SignInFormValues";

export interface SignInPayload {
  formValues: SignInFormValues;
  navigate: NavigateFunction;
}

export interface UserDataPayload {
  id: string;
  username: string;
  name: string;
  surname: string;
  role: string;
}

export interface AutoLoginPayload {
  navigate: NavigateFunction;
}
