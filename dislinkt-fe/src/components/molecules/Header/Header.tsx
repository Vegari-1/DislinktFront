import IconButton from "../../atoms/IconButton/IconButton";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import { ReactComponent as PlusIcon } from "../../../assets/svg/plus.svg";

import classes from "./Header.module.css";
import { Fragment } from "react";

const Header: React.FC = () => {
  return (
    <Fragment>
      <div className={classes["header-wrapper"]}>
        <SearchBar placeholder="Search" />
        <IconButton icon={<PlusIcon />} text="Create new post" />
      </div>
      <hr className={classes["header-separator"]} />
    </Fragment>
  );
};

export default Header;
