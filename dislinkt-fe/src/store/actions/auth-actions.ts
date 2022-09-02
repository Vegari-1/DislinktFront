import RegisterFormValues from "../../models/forms/RegisterFormValues";
import SignUpFormValues from "../../models/forms/SingUpFormValues";
import {
  AutoLoginPayload,
  RegisterPayload,
  SignInPayload,
} from "../../models/slices/auth";
import {
  AUTO_LOGIN,
  LOG_OUT,
  REGISTER,
  SIGN_IN,
  SIGN_UP,
} from "./action-types";

export const signIn = (singInPayload: SignInPayload) => {
  return { type: SIGN_IN, payload: singInPayload };
};

export const signUp = (singUpFormValues: SignUpFormValues) => {
  return { type: SIGN_UP, payload: singUpFormValues };
};

export const register = (registerPayload: RegisterPayload) => {
  return { type: REGISTER, payload: registerPayload };
};

export const logOut = () => {
  return { type: LOG_OUT };
};

export const autoLogin = (autoLoginData: AutoLoginPayload) => {
  return {
    type: AUTO_LOGIN,
    payload: autoLoginData,
  };
};
