import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import SignUpFormValues from "../../models/SingUpFormValues";

import Token from "../../models/storage/Token";
import authService from "../../services/AuthService";
import { goToSignIn, signIn, signUp } from "../slices/auth";

export function* handleSignIn({
  payload,
}: ReturnType<typeof signIn>): Generator<any, any, Token> {
  try {
    //const token: Token = yield call(authService.signIn, payload.formValues);

    //localStorage.setItem("token", token.authToken);
    yield payload.navigate("/home");
    yield toast.success("Successfully signed in");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleSignUp({
  payload,
}: ReturnType<typeof signUp>): Generator<any, any, SignUpFormValues> {
  try {
    //const {user} = yield call(authService.signUp, payload.formValues);

    yield put(goToSignIn());
    yield toast.success("Successfully signed up");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}
