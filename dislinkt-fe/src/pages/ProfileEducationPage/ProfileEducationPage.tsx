import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfileEducationPage.module.css";
import ManageItems from "../../components/organisms/ManageItems/ManageItems";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../../components/atoms/Backdrop/Backdrop";
import EduFormOverlay from "../../components/molecules/EduFormOverlay/EduFormOverlay";
import ProfileInfoData from "../../models/data/ProfileInfoData";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EducationData from "../../models/data/EducationData";
import { RootState } from "../../store/store";
import {
  deleteEducation,
  getProfile,
  getProfileEducation,
} from "../../store/actions/profile-actions";

const ProfileEducationPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [modalVisible, setModalVisible] = useState(false);
  const profile: ProfileInfoData = useSelector(
    (state: RootState) => state.profile.profile
  );
  const educations: EducationData[] = useSelector(
    (state: RootState) => state.profile.educations
  );

  useEffect(() => {
    dispatch(getProfile(id!));
    dispatch(getProfileEducation(id!));
  }, [dispatch, id]);

  const deleteEducationHandler = (id: string) => {
    dispatch(deleteEducation(id));
  };
  const addEducationHandler = () => {
    setModalVisible(true);
  };
  const onCloseHandler = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfilePane profile={profile} onAddButtonClick={addEducationHandler}>
          <ManageItems
            items={educations}
            onDeleteItem={deleteEducationHandler}
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
          <EduFormOverlay onClose={onCloseHandler} />,
          document.getElementById("modal-root")!
        )}
    </Layout>
  );
};

export default ProfileEducationPage;
