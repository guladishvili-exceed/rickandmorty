import React from "react";

import "./GenCard.css";

// In the future if the amount of values increases
// We will have to update code by hand.
// So to avoid this we just map through the values
// Of current object,Sames as in TableHead component :)
function GenCard({ genInfo, place }) {
  return (
    <div
      className={place % 2 === 0 ? "card_container_even" : "card_container_odd"}
    >
      {Object.values(genInfo).map((info) => {
        return Array.isArray(info) ? (
          <p key={info} className="card_container_text">
            {info.length}
          </p>
        ) : (
          <p key={info} className="card_container_text">
            {info.length > 5
              ? info.toString().substring(0, 15) + "..."
              : info.toString()}
          </p>
        );
      })}
    </div>
  );
}

export default GenCard;
