import SystemEventData from "../../../models/data/SystemEventData";
import EntititesEmptyList from "../../atoms/EntitiesEmptyList/EntititesEmptyList";
import ViewEventItem from "../../molecules/ViewEventItem/ViewEventItem";
import classes from "./ViewEvents.module.css";

interface ViewEventsProps {
  events: SystemEventData[];
}

const ViewEvents: React.FC<ViewEventsProps> = ({ events }) => {
  return (
    <div className={classes["manage-requests"]}>
      {events.map((event) => (
        <ViewEventItem key={event.id} event={event} />
      ))}

      {events.length === 0 && <EntititesEmptyList entities="system events" />}
    </div>
  );
};

export default ViewEvents;
