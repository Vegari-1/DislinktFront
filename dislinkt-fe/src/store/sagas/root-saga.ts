import { all, takeLatest } from "redux-saga/effects";
import { signIn } from "../slices/auth";
import { handleLogin } from "./auth-saga";

export default function* rootSaga() {
  yield all([takeLatest(signIn.type, handleLogin)]);
}
