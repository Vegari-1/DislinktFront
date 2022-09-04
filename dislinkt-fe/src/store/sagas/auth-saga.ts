import { toast } from "react-toastify";
import { call, put, select } from "redux-saga/effects";
import { UserDataPayload } from "../../models/slices/auth";
import authService from "../../services/AuthService";
import jwt from "jwt-decode";
import { autoLogin, register, signIn, signUp } from "../actions/auth-actions";
import { setSignInActive, setSignUpData, setUserData } from "../slices/auth";
import { RootState } from "../store";
import SignUpFormValues from "../../models/forms/SingUpFormValues";

const getUserFromJwt = (token: string): UserDataPayload => {
  const tokenUserPayload: any = jwt(token);
  const userDataPayload: UserDataPayload = {
    id: tokenUserPayload.user.id,
    username: tokenUserPayload.sub,
    name: tokenUserPayload.user.name,
    surname: tokenUserPayload.user.surname,
    role: tokenUserPayload.user.authorities[0].name,
  };
  return userDataPayload;
};

const getSignUpData = (state: RootState) => state.auth.signUpData;

export function* handleSignIn({
  payload,
}: ReturnType<typeof signIn>): Generator<any, void, string> {
  try {
    const token: string = yield call(authService.signIn, payload.formValues);

    localStorage.setItem("dislinkt-token", token);
    const userDataPayload: UserDataPayload = getUserFromJwt(token);
    yield put(setUserData(userDataPayload));

    if (userDataPayload.role === "ROLE_ADMIN") {
      yield payload.navigate("/requests");
    } else {
      yield payload.navigate("/profile");
    }
    yield toast.success("Successfully signed in");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleSignUp({
  payload,
}: ReturnType<typeof signUp>): Generator<any, void, void> {
  try {
    yield put(setSignUpData(payload));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleRegister({
  payload,
}: ReturnType<typeof register>): Generator<any, void, any> {
  try {
    const signUpData: SignUpFormValues = yield select(getSignUpData);
    // yield call(authService.signUp, signUpData);
    console.log(payload.formValues);
    console.log(signUpData);
    // posalji authservisu i sve ostale podatke koje on prosledju profil servisu (asinhrono/sinhrono, kako god)

    yield payload.navigate("/auth");
    yield put(setSignInActive(true));
    yield toast.success("Successfully signed up");
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleLogOut(): Generator<any, void, void> {
  try {
    localStorage.removeItem("dislinkt-token");
    yield put(setUserData({} as UserDataPayload));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleAutoLogin({
  payload,
}: ReturnType<typeof autoLogin>): Generator<any, any, string> {
  const token: string = localStorage.getItem("dislinkt-token")!;
  if (token) {
    const decodedAuthToken: any = jwt(token);
    const dateNowSeconds = Math.round(new Date().getTime() / 1000);
    if (decodedAuthToken.exp - dateNowSeconds < 0) {
      //expired token
      yield call(handleLogOut);
      yield payload.navigate("/auth");
    } else {
      const userDataPayload: UserDataPayload = getUserFromJwt(token);
      yield put(setUserData(userDataPayload));
    }
  } else {
    // no token
    yield payload.navigate("/auth");
  }
}
