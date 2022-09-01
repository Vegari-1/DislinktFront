import ManageItem from "../../molecules/ManageItem/ManageItem";
import classes from "./ManageItems.module.css";

interface ManageItemsProps {
  items: any[];
  deleteItem: (id: string) => void;
}

const ManageItems: React.FC<ManageItemsProps> = ({ items, deleteItem }) => {
  return (
    <div className={classes["manage-items"]}>
      {items.map((item) => (
        <ManageItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default ManageItems;
