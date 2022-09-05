import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfileSkillsPage.module.css";
import ManageItems from "../../components/organisms/ManageItems/ManageItems";
import { useState } from "react";
import Backdrop from "../../components/atoms/Backdrop/Backdrop";
import ReactDOM from "react-dom";
import SkillFormOverlay from "../../components/molecules/SkillFormOverlay/SkillFormOverlay";

const ProfileSkillsPage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const deleteSkillHandler = () => {
    console.log("deleted skill");
  };
  const addSkillHandler = () => {
    console.log("added skill");
    setModalVisible(true);
  };
  const onCloseHandler = () => {
    console.log("ugasi modal");
    setModalVisible(false);
  };

  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfilePane onAddButtonClick={addSkillHandler}>
          <ManageItems
            items={[
              { id: "1", name: "C#" },
              { id: "2", name: "Java" },
              { id: "3", name: "Angular" },
            ]}
            onDeleteItem={deleteSkillHandler}
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
          <SkillFormOverlay onClose={onCloseHandler} />,
          document.getElementById("modal-root")!
        )}
    </Layout>
  );
};

export default ProfileSkillsPage;
