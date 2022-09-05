import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfileEducationPage.module.css";
import ManageItems from "../../components/organisms/ManageItems/ManageItems";
import { useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../../components/atoms/Backdrop/Backdrop";
import EduFormOverlay from "../../components/molecules/EduFormOverlay/EduFormOverlay";

const ProfileEducationPage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const deleteEducationHandler = () => {
    console.log("deleted edu");
  };
  const addEducationHandler = () => {
    console.log("added edu");
    setModalVisible(true);
  };
  const onCloseHandler = () => {
    console.log("ugasi modal");
    setModalVisible(false);
  };

  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfilePane onAddButtonClick={addEducationHandler}>
          <ManageItems
            items={[
              {
                id: "1",
                school: "Gimnazija Jovan Jovanovic Zmaj",
                degree: "High School",
                field: "Bilingual English Science",
                startDate: new Date(),
                endDate: new Date(),
              },
              {
                id: "2",
                school: "Faculty of Technical Science",
                degree: "Bachelor",
                field: "Computer Science",
                startDate: new Date(),
                endDate: new Date(),
              },
            ]}
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
