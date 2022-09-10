import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileInfoForm from "../../components/molecules/ProfileInfoForm/ProfileInfoForm";
import Layout from "../../components/organisms/Layout/Layout";
import ProfileInfoData from "../../models/data/ProfileInfoData";
import { getProfile } from "../../store/actions/profile-actions";
import { RootState } from "../../store/store";
import classes from "./ProfileInfoPage.module.css";

const ProfileInfoPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const profile: ProfileInfoData = useSelector(
    (state: RootState) => state.profile.profile
  );

  useEffect(() => {
    dispatch(getProfile(id!));
  }, [id, dispatch]);

  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfileInfoForm
          id={id!}
          email={profile.email}
          username={profile.username}
          name={profile.name}
          surname={profile.surname}
          gender={profile.gender}
          dateOfBirth={profile.dateOfBirth}
          phone={profile.phone}
          publicProfile={profile.public}
          biography={profile.info}
        />
      </div>
    </Layout>
  );
};

export default ProfileInfoPage;
