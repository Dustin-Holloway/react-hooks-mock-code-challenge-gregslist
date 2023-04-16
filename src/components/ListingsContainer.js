import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onHandleUpdate }) {
  function onHandleDelete(item) {
    onHandleUpdate(item);
  }

  const cardItem = listings.map((item) => (
    <ListingCard
      listings={item}
      onHandleDelete={onHandleDelete}
      key={item.id}
    />
  ));

  return (
    <main>
      <ul className="cards">{cardItem}</ul>
    </main>
  );
}

export default ListingsContainer;
