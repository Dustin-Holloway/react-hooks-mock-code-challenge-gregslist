import React from "react";
import { useState } from "react";

function ListingCard({ listings, onHandleDelete }) {
  const [emoji, setemoji] = useState(false);

  function handleClickDelete() {
    fetch(`http://localhost:6001/listings/${listings.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onHandleDelete(listings));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listings.image} alt={"description"} />
      </div>
      <div className="details">
        {emoji ? (
          <button
            onClick={(e) => setemoji(!emoji)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={(e) => setemoji(!emoji)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{listings.description}</strong>
        <span> · {listings.location}</span>
        <button onClick={handleClickDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
