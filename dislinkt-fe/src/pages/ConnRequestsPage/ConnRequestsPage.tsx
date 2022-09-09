import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/organisms/Layout/Layout";
import ManageRequests from "../../components/organisms/ManageRequests/ManageRequests";
import {
  acceptConnectionRequest,
  declineConnectionRequest,
  getConnectionRequests,
} from "../../store/actions/profile-actions";
import { RootState } from "../../store/store";
import classes from "./ConnRequestsPage.module.css";

const ConnRequestsPage: React.FC = () => {
  const dispatch = useDispatch();
  const connectionRequests = useSelector(
    (state: RootState) => state.profile.connectionRequests
  );

  useEffect(() => {
    dispatch(getConnectionRequests());
  }, [dispatch]);

  const declineRequestHandler = (id: string) => {
    dispatch(declineConnectionRequest(id));
  };

  const acceptRequestHandler = (id: string) => {
    dispatch(acceptConnectionRequest(id));
  };

  return (
    <Layout>
      <div className={classes["streach"]}>
        <h1 className={classes.title}>Connection Requests</h1>
        <ManageRequests
          requests={connectionRequests}
          declineRequest={declineRequestHandler}
          acceptRequest={acceptRequestHandler}
        />
      </div>
    </Layout>
  );
};

export default ConnRequestsPage;
