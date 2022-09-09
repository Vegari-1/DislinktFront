import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import EntititesEmptyList from "../../components/atoms/EntitiesEmptyList/EntititesEmptyList";
import IconButton from "../../components/atoms/IconButton/IconButton";
import JobOfferCard from "../../components/atoms/JobOfferCard/JobOfferCard";
import Header from "../../components/molecules/Header/Header";
import Layout from "../../components/organisms/Layout/Layout";
import JobOfferData from "../../models/data/JobOfferData";
import {
  getJobOffers,
  searchJobOffers,
} from "../../store/actions/jof-offer-actions";
import { RootState } from "../../store/store";
import classes from "./JobOffersPage.module.css";

const JobOffersPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const jobOffers: JobOfferData[] = useSelector(
    (state: RootState) => state.jobOffer.jobOffers
  );

  useEffect(() => {
    dispatch(getJobOffers());
  }, [dispatch]);

  useEffect(() => {
    if (query.trim().length === 0) {
      dispatch(getJobOffers());
    } else {
      dispatch(searchJobOffers(query));
    }
  }, [dispatch, query]);

  const searchHandler = (query: string) => {
    setQuery(query);
  };

  const onAddButtonClick = () => {
    navigate("add");
  };

  return (
    <Layout>
      <Header setSearchValue={searchHandler} />
      <div className={classes["streach"]}>
        {jobOffers.length !== 0 &&
          jobOffers.map((jobOffer) => (
            <JobOfferCard key={jobOffer.id} jobOffer={jobOffer} />
          ))}
        {jobOffers.length === 0 && <EntititesEmptyList entities="job offers" />}
      </div>
      <div className={classes["add-button"]}>
        <IconButton icon={<PlusIcon />} boxShadow onClick={onAddButtonClick!} />
      </div>
    </Layout>
  );
};

export default JobOffersPage;
