import classes from "./SidebarHeader.module.css";

const SidebarHeader: React.FC = () => {
  return (
    <div className={classes["side-bar-header-wrapper"]}>
      <div className={classes["dislinkt-logo"]} />
    </div>
  );
};

export default SidebarHeader;
