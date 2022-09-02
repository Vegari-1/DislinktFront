import Layout from "../../components/organisms/Layout/Layout";
import ManageRequests from "../../components/organisms/ManageRequests/ManageRequests";
import ConnRequestData from "../../models/data/ConnRequestData";
import classes from "./ConnRequestsPage.module.css";

const ConnRequestsPage: React.FC = () => {
  // const requests = useSelector(
  //   (state: RootState) => state.company.companyRequests
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCompanyRequests());
  // }, [dispatch]);

  const declineRequestHandler = (id: string) => {
    console.log("decline " + id);
    // dispatch(declineConnRequest(id));
  };

  const acceptRequestHandler = (id: string) => {
    console.log("accept " + id);
    // dispatch(acceptConnRequest(id));
  };

  const requests: ConnRequestData[] = [
    {
      id: "1",
      name: "Eva",
      surname: "Jankovic",
      username: "evaj10",
      picture: "data:image/gif;base64,",
    },
    {
      id: "2",
      name: "Petar",
      surname: "Petrovic",
      username: "pera9",
      picture: "data:image/gif;base64,",
    },
  ];

  return (
    <Layout>
      <div className={classes["streach"]}>
        <h1 className={classes.title}>Connection Requests</h1>
        <ManageRequests
          requests={requests}
          declineRequest={declineRequestHandler}
          acceptRequest={acceptRequestHandler}
        />
      </div>
    </Layout>
  );
};

export default ConnRequestsPage;
