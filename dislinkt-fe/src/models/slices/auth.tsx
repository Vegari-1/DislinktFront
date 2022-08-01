import { NavigateFunction } from "react-router-dom";

import SignInFormValues from "../SignInFormValues";
import SignUpFormValues from "../SingUpFormValues";

export interface SignInPayload {
  formValues: SignInFormValues;
  navigate: NavigateFunction;
}

export interface SignUpPayload {
  formValues: SignUpFormValues;
}
