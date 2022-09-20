interface SignUpValues {
  email: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  gender: string;
  dateOfBirth: Date;
  phone: string;
  public: boolean;
  biography: string;
  picture?: string;
}

export default SignUpValues;
