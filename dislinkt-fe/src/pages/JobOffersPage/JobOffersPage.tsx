import { useNavigate } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import EntititesEmptyList from "../../components/atoms/EntitiesEmptyList/EntititesEmptyList";
import IconButton from "../../components/atoms/IconButton/IconButton";
import JobOfferCard from "../../components/atoms/JobOfferCard/JobOfferCard";
import Header from "../../components/molecules/Header/Header";
import Layout from "../../components/organisms/Layout/Layout";
import JobOfferData from "../../models/data/JobOfferData";
import classes from "./JobOffersPage.module.css";

const JobOffersPage: React.FC = () => {
  const offers: JobOfferData[] = [
    {
      id: "1",
      positionName: "Designer",
      description: "Most awesome designer ever",
      qualifications: ["Adobe", "CorelDraw"],
      profileName: "Eva",
      profileSurname: "Jankovic",
      profilePicture: "slika",
      companyLink: "https://agent-app-frontend-test.herokuapp.com/company/1",
    },
    {
      id: "2",
      positionName: "Designer",
      description: "Most awesome designer ever",
      qualifications: ["Adobe", "CorelDraw"],
      profileName: "Eva",
      profileSurname: "Jankovic",
      profilePicture: "slika",
    },
    {
      id: "3",
      positionName: "Designer",
      description: "Most awesome designer ever",
      qualifications: ["Adobe", "CorelDraw"],
      profileName: "Eva",
      profileSurname: "Jankovic",
      profilePicture: "slika",
    },
  ];

  const navigate = useNavigate();
  const onAddButtonClick = () => {
    navigate("add");
    console.log("add job offer");
  };

  return (
    <Layout>
      <Header />
      <div className={classes["streach"]}>
        {offers.length !== 0 &&
          offers.map((offer) => (
            <JobOfferCard key={offer.id} jobOffer={offer} />
          ))}
        {offers.length === 0 && <EntititesEmptyList entities="job offers" />}
      </div>
      <div className={classes["add-button"]}>
        <IconButton icon={<PlusIcon />} boxShadow onClick={onAddButtonClick!} />
      </div>
    </Layout>
  );
};

export default JobOffersPage;
