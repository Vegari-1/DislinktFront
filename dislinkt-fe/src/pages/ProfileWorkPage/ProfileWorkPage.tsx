import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfileWorkPage.module.css";
import ManageItems from "../../components/organisms/ManageItems/ManageItems";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../../components/atoms/Backdrop/Backdrop";
import WorkExpFormOverlay from "../../components/molecules/WorkExpFormOverlay/WorkExpFormOverlay";
import ProfileInfoData from "../../models/data/ProfileInfoData";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import WorkExperienceData from "../../models/data/WorkExperienceData";
import {
  deleteWorkExperience,
  getProfile,
  getProfileAuthUser,
  getProfileWorkExperience,
} from "../../store/actions/profile-actions";
import { UserDataPayload } from "../../models/slices/auth";

const ProfileWorkPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [modalVisible, setModalVisible] = useState(false);

  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );
  const profile: ProfileInfoData = useSelector(
    (state: RootState) => state.profile.profile
  );
  const workExperience: WorkExperienceData[] = useSelector(
    (state: RootState) => state.profile.workExperiences
  );

  useEffect(() => {
    if (userData.id) {
      dispatch(getProfileAuthUser(id!));
    } else {
      dispatch(getProfile(id!));
    }
    dispatch(getProfileWorkExperience(id!));
  }, [dispatch, id]);

  const deleteWorkHandler = (workExpId: string) => {
    dispatch(deleteWorkExperience(workExpId, id!));
  };
  const addWorkHandler = () => {
    setModalVisible(true);
  };
  const onCloseHandler = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfilePane profile={profile} onAddButtonClick={addWorkHandler}>
          <ManageItems
            items={workExperience}
            onDeleteItem={deleteWorkHandler}
          />
        </ProfilePane>
      </div>

      {modalVisible &&
        ReactDOM.createPortal(
          <Backdrop onBackdropClick={onCloseHandler} blur />,
          document.getElementById("backdrop-root")!
        )}
      {modalVisible &&
        ReactDOM.createPortal(
          <WorkExpFormOverlay onClose={onCloseHandler} profileId={id!} />,
          document.getElementById("modal-root")!
        )}
    </Layout>
  );
};

export default ProfileWorkPage;
