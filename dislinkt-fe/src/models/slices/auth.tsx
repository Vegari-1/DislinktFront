import { NavigateFunction } from "react-router-dom";
import SignInFormValues from "../SignInFormValues";

export interface SignInPayload {
  formValues: SignInFormValues;
  navigate: NavigateFunction;
}
