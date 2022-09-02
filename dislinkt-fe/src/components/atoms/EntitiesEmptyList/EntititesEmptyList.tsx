import classes from "./EntitiesEmptyList.module.css";

interface EntititesEmptyListProps {
  entities: string;
}

const EntititesEmptyList: React.FC<EntititesEmptyListProps> = ({
  entities,
}) => {
  const noEntities = `Currently there are no ${entities}`;
  return (
    <div className={classes["empty-entity-list"]}>
      <div className={classes["empty-entity-image"]} />
      <div className={classes["empty-entity-text"]}>{noEntities}</div>
    </div>
  );
};

export default EntititesEmptyList;
