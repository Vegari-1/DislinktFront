import JobOfferForm from "../../components/molecules/JobOfferForm/JobOfferForm";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./AddJobOfferPage.module.css";

const AddJobOfferPage: React.FC = () => {
  return (
    <Layout>
      <div className={classes["streach"]}>
        <JobOfferForm />
      </div>
    </Layout>
  );
};

export default AddJobOfferPage;
