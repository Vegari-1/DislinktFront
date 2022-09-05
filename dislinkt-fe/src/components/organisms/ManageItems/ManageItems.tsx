import ManageItem from "../../molecules/ManageItem/ManageItem";
import classes from "./ManageItems.module.css";

interface ManageItemsProps {
  items: any[];
  onDeleteItem: (id: string) => void;
}

const ManageItems: React.FC<ManageItemsProps> = ({ items, onDeleteItem }) => {
  return (
    <div className={classes["manage-items"]}>
      {items.map((item) => (
        <ManageItem key={item.id} item={item} deleteItem={onDeleteItem} />
      ))}
    </div>
  );
};

export default ManageItems;
