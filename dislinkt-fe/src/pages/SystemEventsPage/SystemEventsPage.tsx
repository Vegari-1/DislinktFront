import Layout from "../../components/organisms/Layout/Layout";
import ViewEvents from "../../components/organisms/ViewEvents/ViewEvents";
import SystemEventData from "../../models/data/SystemEventData";
import classes from "./SystemEventsPage.module.css";

const SystemEventsPage: React.FC = () => {
  const events: SystemEventData[] = [
    {
      id: "1",
      timestamp: new Date(),
      source: "ProfileService",
      requestType: "POST",
      message: "Created new Profile",
      statusCode: 201,
      statusCodeText: "Created",
    },
    {
      id: "2",
      timestamp: new Date(),
      source: "AuthService",
      requestType: "GET",
      message: "Invalid credentials",
      statusCode: 400,
      statusCodeText: "Bad request",
    },
    {
      id: "3",
      timestamp: new Date(),
      source: "NotificationService",
      requestType: "DELETE",
      message:
        "Internal server error pevmrwivpwr vrwifmwifwr fwpoimfwepf wepofmwef ewpfiw emfpowef ewpifmew pfiwe",
      statusCode: 500,
      statusCodeText: "Internal server error",
    },
  ];

  return (
    <Layout>
      <div className={classes["streach"]}>
        <h1 className={classes.title}>Admin Dashboard</h1>
        <ViewEvents events={events} />
      </div>
    </Layout>
  );
};

export default SystemEventsPage;
