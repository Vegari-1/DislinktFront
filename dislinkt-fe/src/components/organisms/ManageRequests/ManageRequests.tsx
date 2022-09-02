import ConnRequestData from "../../../models/data/ConnRequestData";
import EntititesEmptyList from "../../atoms/EntitiesEmptyList/EntititesEmptyList";
import ManageRequestItem from "../../molecules/ManageRequestItem/ManageRequestItem";
import classes from "./ManageRequests.module.css";

interface ManageRequestsProps {
  requests: ConnRequestData[];
  acceptRequest: (id: string) => void;
  declineRequest: (id: string) => void;
}

const ManageRequests: React.FC<ManageRequestsProps> = ({
  requests,
  acceptRequest,
  declineRequest,
}) => {
  return (
    <div className={classes["manage-requests"]}>
      {requests.map((request) => (
        <ManageRequestItem
          key={request.id}
          id={request.id}
          fullName={`${request.name} ${request.surname}`}
          username={request.username}
          picture={request.picture}
          acceptRequest={acceptRequest}
          declineRequest={declineRequest}
        />
      ))}

      {requests.length === 0 && (
        <EntititesEmptyList entities="connection requests" />
      )}
    </div>
  );
};

export default ManageRequests;
