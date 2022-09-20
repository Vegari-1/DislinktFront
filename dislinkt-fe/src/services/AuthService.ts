import SignUpValues from "../models/data/SignUpValues";
import SignInFormValues from "../models/forms/SignInFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  SIGNIN: "/auth-service/login",
  SIGNUP: "/auth-service/register",
};

export class AuthService extends ApiService {
  signIn = async (signInData: SignInFormValues) => {
    const { data } = await this.apiClient.post(ENDPOINTS.SIGNIN, signInData);

    return data;
  };

  signUp = async (signUpData: SignUpValues) => {
    console.log(signUpData);
    const { data } = await this.apiClient.post(ENDPOINTS.SIGNUP, signUpData);

    return data;
  };
}

const authService = new AuthService();

export default authService;
