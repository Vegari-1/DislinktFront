import { all, takeLatest } from "redux-saga/effects";
import {
  AUTO_LOGIN,
  LOG_OUT,
  SIGN_IN,
  SIGN_UP,
} from "../actions/action-types";
import {
  handleAutoLogin,
  handleLogOut,
  handleSignIn,
  handleSignUp,
} from "./auth-saga";

export default function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_UP, handleSignUp),
    takeLatest(LOG_OUT, handleLogOut),
    takeLatest(AUTO_LOGIN, handleAutoLogin),
  ]);
}
