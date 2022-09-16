import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/organisms/Layout/Layout";
import ViewEvents from "../../components/organisms/ViewEvents/ViewEvents";
import SystemEventData from "../../models/data/SystemEventData";
import { getEvents } from "../../store/actions/event-actions";
import { RootState } from "../../store/store";
import classes from "./SystemEventsPage.module.css";

const SystemEventsPage: React.FC = () => {
  const dispatch = useDispatch();

  const events: SystemEventData[] = useSelector(
    (state: RootState) => state.events.events
  );

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <Layout>
      <div className={classes["header-wrapper"]}>
        <h1 className={classes.title}>Admin Dashboard</h1>
      </div>
      <hr className={classes["header-separator"]} />
      <div className={classes["streach"]}>
        <ViewEvents events={events} />
      </div>
    </Layout>
  );
};

export default SystemEventsPage;
