import { useParams } from "react-router-dom";
import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfileSkillsPage.module.css";
import ManageItems from "../../components/organisms/ManageItems/ManageItems";
import { useEffect, useState } from "react";
import Backdrop from "../../components/atoms/Backdrop/Backdrop";
import ReactDOM from "react-dom";
import SkillFormOverlay from "../../components/molecules/SkillFormOverlay/SkillFormOverlay";
import ProfileInfoData from "../../models/data/ProfileInfoData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  deleteSkill,
  getProfile,
  getProfileAuthUser,
  getProfileSkills,
} from "../../store/actions/profile-actions";
import SkillData from "../../models/data/SkillData";
import { UserDataPayload } from "../../models/slices/auth";

const ProfileSkillsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [modalVisible, setModalVisible] = useState(false);

  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );
  const profile: ProfileInfoData = useSelector(
    (state: RootState) => state.profile.profile
  );
  const skills: SkillData[] = useSelector(
    (state: RootState) => state.profile.skills
  );

  useEffect(() => {
    if (userData.id) {
      dispatch(getProfileAuthUser(id!));
    } else {
      dispatch(getProfile(id!));
    }
    dispatch(getProfileSkills(id!));
  }, [id, dispatch, userData.id]);

  const deleteSkillHandler = (skillId: string) => {
    dispatch(deleteSkill(skillId, id!));
  };
  const addSkillHandler = () => {
    setModalVisible(true);
  };
  const onCloseHandler = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfilePane profile={profile} onAddButtonClick={addSkillHandler}>
          <ManageItems items={skills} onDeleteItem={deleteSkillHandler} />
        </ProfilePane>
      </div>

      {modalVisible &&
        ReactDOM.createPortal(
          <Backdrop onBackdropClick={onCloseHandler} blur />,
          document.getElementById("backdrop-root")!
        )}
      {modalVisible &&
        ReactDOM.createPortal(
          <SkillFormOverlay onClose={onCloseHandler} profileId={id!} />,
          document.getElementById("modal-root")!
        )}
    </Layout>
  );
};

export default ProfileSkillsPage;
