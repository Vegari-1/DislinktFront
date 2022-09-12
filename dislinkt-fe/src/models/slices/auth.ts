import { NavigateFunction } from "react-router-dom";
import RegisterFormValues from "../forms/RegisterFormValues";
import SignInFormValues from "../forms/SignInFormValues";

export interface SignInPayload {
  formValues: SignInFormValues;
  navigate: NavigateFunction;
}

export interface RegisterPayload {
  formValues: RegisterFormValues;
  navigate: NavigateFunction;
}

export interface UserDataPayload {
  id: string;
  username: string;
  role: string;
}

export interface AutoLoginPayload {
  navigate: NavigateFunction;
}
