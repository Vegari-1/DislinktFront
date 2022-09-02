import { ReactComponent as DeleteIcon } from "../../../assets/svg/delete.svg";

import classes from "./ManageItem.module.css";
import SkillData from "../../../models/data/SkillData";
import EducationData from "../../../models/data/EducationData";
import WorkExperienceData from "../../../models/data/WorkExperienceData";
import { useState } from "react";

interface ManageItemProps {
  item: SkillData | EducationData | WorkExperienceData | any;
  deleteItem: (id: string) => void;
}

const ManageItem: React.FC<ManageItemProps> = ({ item, deleteItem }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const deleteHandler = () => {
    setConfirmDelete(!confirmDelete);
  };

  const confirmDeleteHandler = () => {
    deleteItem(item.id);
  };

  return (
    <div className={classes["manage-item-wrapper"]}>
      <div
        className={`${classes["manage-item"]} ${
          confirmDelete && classes["blur"]
        }`}
      >
        <div className={classes["item"]}>
          <div className={classes["main"]}>
            {item.name || item.position || item.school}
          </div>
          {!item.name && (
            <div className={classes["minor"]}>
              {item.company !== undefined
                ? item.company
                : `${item.degree} ${item.field}`}
            </div>
          )}
          {!item.name && (
            <div
              className={classes["dates"]}
            >{`${item.startDate.toLocaleDateString()} - ${item.endDate.toLocaleDateString()}`}</div>
          )}
        </div>
        <div className={classes["actions"]}>
          <DeleteIcon
            width={25}
            height={25}
            cursor="pointer"
            onClick={deleteHandler}
          />
        </div>
      </div>
      {confirmDelete && (
        <button
          className={classes["delete-button"]}
          onClick={confirmDeleteHandler}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ManageItem;
