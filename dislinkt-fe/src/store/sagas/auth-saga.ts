import { toast } from "react-toastify";
import { call } from "redux-saga/effects";

import Token from "../../models/storage/Token";
import authService from "../../services/AuthService";
import { signIn } from "../slices/auth";

export function* handleLogin({
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
