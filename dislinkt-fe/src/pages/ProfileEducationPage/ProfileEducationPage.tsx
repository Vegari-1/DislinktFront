import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfileEducationPage.module.css";
import ManageItems from "../../components/organisms/ManageItems/ManageItems";

const ProfileEducationPage: React.FC = () => {
  const deleteEducationHandler = () => {
    console.log("deleted edu");
  };
  const addEducationHandler = () => {
    console.log("added edu");
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
    </Layout>
  );
};

export default ProfileEducationPage;
