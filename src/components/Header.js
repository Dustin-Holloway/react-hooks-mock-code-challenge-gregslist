import React from "react";
import Search from "./Search";

function Header({ handleFilterSearch }) {
  function onSearchResults(searchValue) {
    handleFilterSearch(searchValue);
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchResults={onSearchResults} />
    </header>
  );
}

export default Header;
