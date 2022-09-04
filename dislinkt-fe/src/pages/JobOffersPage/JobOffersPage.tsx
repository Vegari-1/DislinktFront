import EntititesEmptyList from "../../components/atoms/EntitiesEmptyList/EntititesEmptyList";
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
      profile: {
        name: "Eva",
        surname: "Jankovic",
        username: "eva10",
        email: "nebitno",
        gender: "",
        dateOfBirth: new Date(),
        phone: "",
        info: "",
        public: true,
        picture: "slika",
      },
      companyLink: "https://agent-app-frontend-test.herokuapp.com/company/1",
    },
    {
      id: "2",
      positionName: "Designer",
      description: "Most awesome designer ever",
      qualifications: ["Adobe", "CorelDraw"],
      profile: {
        name: "Eva",
        surname: "Jankovic",
        username: "eva10",
        email: "nebitno",
        gender: "",
        dateOfBirth: new Date(),
        phone: "",
        info: "",
        public: true,
        picture: "slika",
      },
    },
    {
      id: "3",
      positionName: "Designer",
      description: "Most awesome designer ever",
      qualifications: ["Adobe", "CorelDraw"],
      profile: {
        name: "Eva",
        surname: "Jankovic",
        username: "eva10",
        email: "nebitno",
        gender: "",
        dateOfBirth: new Date(),
        phone: "",
        info: "",
        public: true,
        picture: "slika",
      },
    },
  ];

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
    </Layout>
  );
};

export default JobOffersPage;
