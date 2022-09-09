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
  getProfileWorkExperience,
} from "../../store/actions/profile-actions";

const ProfileWorkPage: React.FC = () => {
  // dobavi informacije o korisniku (koristi se i za pregled sopstvenog i za pregled profila drugih korisnika)
  // ako je korisnik koji gleda profil vlasnik profila, prikazi mu "Edit" i "Kanticu" za brisanje i "+" za dodavanje
  // ako korisnik nije vlasnik profila, prikazi dugme "Block" (AKO JE BLOKIRAO PROFIL, NE TREBA DA MU ISKACE?)
  // ako korisnik nije vlasnik profila i ne prati profil, prikazi dugme "Connect"
  const dispatch = useDispatch();
  const { id } = useParams();
  const [modalVisible, setModalVisible] = useState(false);
  const profile: ProfileInfoData = useSelector(
    (state: RootState) => state.profile.profile
  );
  const workExperience: WorkExperienceData[] = useSelector(
    (state: RootState) => state.profile.workExperiences
  );

  useEffect(() => {
    dispatch(getProfile(id!));
    dispatch(getProfileWorkExperience(id!));
  }, [dispatch, id]);

  const deleteWorkHandler = (id: string) => {
    dispatch(deleteWorkExperience(id));
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
          <WorkExpFormOverlay onClose={onCloseHandler} />,
          document.getElementById("modal-root")!
        )}
    </Layout>
  );
};

export default ProfileWorkPage;
