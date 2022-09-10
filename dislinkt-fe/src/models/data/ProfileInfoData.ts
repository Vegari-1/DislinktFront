interface ProfileInfoData {
  id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  gender: string;
  dateOfBirth: Date;
  phone: string;
  info: string;
  public: boolean;
  picture: string;
  following?: boolean;
  pendingFollow?: boolean;
}

export default ProfileInfoData;
