import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from "react";

function App() {
  const [listings, setListings] = useState([]);
  console.log(listings);

  function onHandleUpdate(item) {
    const updatedListings = listings.filter((items) => items.id !== item.id);
    console.log(updatedListings);
    setListings(updatedListings);
  }

  function onHandleFilterSearch(searchValue) {
    const filteredResults = listings.filter((listing) =>
      listing.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListings(filteredResults);
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <div className="app">
      <Header handleFilterSearch={onHandleFilterSearch} />
      <ListingsContainer listings={listings} onHandleUpdate={onHandleUpdate} />
    </div>
  );
}

export default App;
