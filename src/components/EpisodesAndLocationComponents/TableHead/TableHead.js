import React from "react";

import "./TableHead.css";

// In the future if the amount of keys increases
// We will have to update code by hand.
// So to avoid this we just map through the keys
// Of current object,same as in GenCard component :)
function TableHead({ genInfo }) {
  return (
    <div className="table_head_container">
      {genInfo &&
        Object.keys(genInfo.results[0]).map((key) => {
          return (
            <p className="table_head_text" key={key}>
              {key.toLowerCase()}
            </p>
          );
        })}
    </div>
  );
}

export default TableHead;
