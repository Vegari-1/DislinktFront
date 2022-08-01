import SignInFormValues from "../models/SignInFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  SIGNIN: "",
};

export class AuthService extends ApiService {
  signIn = async (signInData: SignInFormValues) => {
    const { data } = await this.apiClient.post(ENDPOINTS.SIGNIN, signInData);

    return data;
  };
}

const authService = new AuthService();

export default authService;
