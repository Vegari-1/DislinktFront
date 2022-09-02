import { all, takeLatest } from "redux-saga/effects";
import {
  AUTO_LOGIN,
  LOG_OUT,
  REGISTER,
  SIGN_IN,
  SIGN_UP,
} from "../actions/action-types";
import {
  handleAutoLogin,
  handleLogOut,
  handleRegister,
  handleSignIn,
  handleSignUp,
} from "./auth-saga";

export default function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_UP, handleSignUp),
    takeLatest(REGISTER, handleRegister),
    takeLatest(LOG_OUT, handleLogOut),
    takeLatest(AUTO_LOGIN, handleAutoLogin),
  ]);
}
