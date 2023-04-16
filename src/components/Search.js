import React from "react";
import { useState } from "react";

function Search({ searchResults }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    const searchValue = value;
    searchResults(searchValue);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
