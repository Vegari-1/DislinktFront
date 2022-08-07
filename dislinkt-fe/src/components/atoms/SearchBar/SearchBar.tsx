import { ReactComponent as SearchIcon } from "../../../assets/svg/search.svg";

import classes from "./SearchBar.module.css";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className={classes["search-bar-wrapper"]}>
      <SearchIcon height={30} width={30} />
      <input placeholder={placeholder} className={classes["search-bar"]} />
    </div>
  );
};

export default SearchBar;
