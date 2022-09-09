import { Fragment } from "react";

import SearchBar from "../../atoms/SearchBar/SearchBar";

import classes from "./Header.module.css";

interface HeaderProps {
  setSearchValue: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchValue }) => {
  return (
    <Fragment>
      <div className={classes["header-wrapper"]}>
        <SearchBar placeholder="Search" setSearchValue={setSearchValue} />
      </div>
      <hr className={classes["header-separator"]} />
    </Fragment>
  );
};

export default Header;
