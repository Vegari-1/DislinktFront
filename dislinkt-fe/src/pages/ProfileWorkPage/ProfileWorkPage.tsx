import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfileWorkPage.module.css";
import ManageItems from "../../components/organisms/ManageItems/ManageItems";
import { useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../../components/atoms/Backdrop/Backdrop";
import WorkExpFormOverlay from "../../components/molecules/WorkExpFormOverlay/WorkExpFormOverlay";

const ProfileWorkPage: React.FC = () => {
  // dobavi informacije o korisniku (koristi se i za pregled sopstvenog i za pregled profila drugih korisnika)
  // ako je korisnik koji gleda profil vlasnik profila, prikazi mu "Edit" i "Kanticu" za brisanje i "+" za dodavanje
  // ako korisnik nije vlasnik profila, prikazi dugme "Block" (AKO JE BLOKIRAO PROFIL, NE TREBA DA MU ISKACE?)
  // ako korisnik nije vlasnik profila i ne prati profil, prikazi dugme "Connect"
  const [modalVisible, setModalVisible] = useState(false);
  const deleteWorkHandler = () => {
    console.log("deleted work");
  };
  const addWorkHandler = () => {
    console.log("added work");
    setModalVisible(true);
  };
  const onCloseHandler = () => {
    console.log("ugasi modal");
    setModalVisible(false);
  };

  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfilePane onAddButtonClick={addWorkHandler}>
          <ManageItems
            items={[
              {
                id: "1",
                position: "Software Engineer",
                company: "Company Uno",
                startDate: new Date(),
                endDate: new Date(),
              },
              {
                id: "2",
                position: "Extra Payed",
                company: "Company Dos",
                startDate: new Date(),
                endDate: new Date(),
              },
              {
                id: "3",
                position: "Boss",
                company: "Company Tres",
                startDate: new Date(),
                endDate: new Date(),
              },
            ]}
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
