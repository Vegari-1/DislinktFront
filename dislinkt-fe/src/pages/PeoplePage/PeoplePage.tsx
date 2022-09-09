import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../../components/atoms/ProfileCard/ProfileCard";
import Header from "../../components/molecules/Header/Header";
import Layout from "../../components/organisms/Layout/Layout";
import ProfileSimple from "../../models/data/ProfileSimple";
import {
  getPublicProfiles,
  searchPublicProfiles,
} from "../../store/actions/profile-actions";
import { RootState } from "../../store/store";
import classes from "./PeoplePage.module.css";

const PeoplePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const profiles: ProfileSimple[] = useSelector(
    (state: RootState) => state.profile.profiles
  );
  useEffect(() => {
    dispatch(getPublicProfiles());
  }, [dispatch]);

  useEffect(() => {
    if (query.trim().length === 0) {
      dispatch(getPublicProfiles());
    } else {
      dispatch(searchPublicProfiles(query));
    }
  }, [dispatch, query]);

  const searchProfilesHandler = (query: string) => {
    setQuery(query);
  };

  return (
    <Layout>
      <Header setSearchValue={searchProfilesHandler} />
      <div className={classes["streach"]}>
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            id={profile.id}
            name={profile.name}
            surname={profile.surname}
            username={profile.username}
            picture={profile.picture}
          />
        ))}
      </div>
    </Layout>
  );
};

export default PeoplePage;
