import classes from "./ViewEventItem.module.css";
import SystemEventData from "../../../models/data/SystemEventData";

interface ViewEventItemProps {
  event: SystemEventData;
}

const colorPicker = (statusCode: number) => {
  if (statusCode < 400) return "--SUCCESS";
  if (statusCode < 500) return "--WARNING";
  return "--DANGER";
};

const ViewEventItem: React.FC<ViewEventItemProps> = ({ event }) => {
  const styles = {
    span: {
      fontWeight: "1000",
      color: `var(${colorPicker(event.statusCode)})`,
    },
  };

  return (
    <div className={classes["item-wrapper"]}>
      <span className={classes["timestamp"]}>
        {event.timestamp.toISOString()}
      </span>
      <span className={classes["source"]}>{event.source}</span>
      <span className={classes["type"]}>{event.requestType}</span>
      <span className={classes["message"]}>{event.message}</span>
      <span className={classes["status-text"]}>{event.statusCodeText}</span>
      <span className={classes["status-code"]} style={styles.span}>
        {event.statusCode}
      </span>
    </div>
  );
};

export default ViewEventItem;
