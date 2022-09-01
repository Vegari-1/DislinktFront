import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfileSkillsPage.module.css";
import ManageItems from "../../components/organisms/ManageItems/ManageItems";

const ProfileSkillsPage: React.FC = () => {
  const deleteSkillHandler = () => {
    console.log("deleted skill");
  };
  const addSkillHandler = () => {
    console.log("added skill");
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
            deleteItem={deleteSkillHandler}
          />
        </ProfilePane>
      </div>
    </Layout>
  );
};

export default ProfileSkillsPage;
