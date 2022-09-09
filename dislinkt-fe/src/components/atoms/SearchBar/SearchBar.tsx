import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/svg/search.svg";

import classes from "./SearchBar.module.css";

interface SearchBarProps {
  placeholder: string;
  setSearchValue: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  setSearchValue,
}) => {
  const [query, setQuery] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setSearchValue(query);
    }, 750);

    return () => {
      clearTimeout(identifier);
    };
  }, [query, setSearchValue]);

  return (
    <div className={classes["search-bar-wrapper"]}>
      <SearchIcon height={30} width={30} />
      <input
        onChange={changeHandler}
        value={query}
        placeholder={placeholder}
        className={classes["search-bar"]}
      />
    </div>
  );
};

export default SearchBar;
