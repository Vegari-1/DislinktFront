import { useNavigate } from "react-router-dom";
import JobOfferData from "../../../models/data/JobOfferData";
import classes from "./JobOfferCard.module.css";

interface JobOfferCardProps {
  jobOffer: JobOfferData;
}

const JobOfferCard: React.FC<JobOfferCardProps> = ({ jobOffer }) => {
  const navigate = useNavigate();
  const onProfileClick = () => {
    navigate("/profile/" + jobOffer.profileId);
  };

  return (
    <div className={classes["card-wrapper"]}>
      <div className={classes["card-title"]} onClick={onProfileClick}>
        <div className={classes["picture"]}></div>
        <div className={classes["profile"]}>
          {`${jobOffer.name} ${jobOffer.surname}`}
        </div>
      </div>
      <div className={classes["card-info"]}>
        <div className={classes["position"]}>{jobOffer.positionName}</div>
        <div className={classes["description"]}>{jobOffer.description}</div>
        {jobOffer.qualifications.map((qual) => (
          <div key={qual} className={classes["qual"]}>
            {qual}
          </div>
        ))}
      </div>
      {jobOffer.companyLink && (
        <div className={classes["card-date"]}>
          View company <a href={jobOffer.companyLink}>here</a>
        </div>
      )}
    </div>
  );
};

export default JobOfferCard;
