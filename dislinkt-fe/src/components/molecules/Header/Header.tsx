import SearchBar from "../../atoms/SearchBar/SearchBar";

import classes from "./Header.module.css";
import { Fragment } from "react";

const Header: React.FC = () => {
  return (
    <Fragment>
      <div className={classes["header-wrapper"]}>
        <SearchBar placeholder="Search" />
      </div>
      <hr className={classes["header-separator"]} />
    </Fragment>
  );
};

export default Header;
