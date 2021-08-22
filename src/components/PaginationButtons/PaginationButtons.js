import React, { useState, useEffect } from "react";

import "./PaginationButtons.css";

function PaginationButtons({ data, updatePage }) {
  const [buttonsArr, setButtonsArr] = useState([]);

  useEffect(() => {
    const finalArray = [];
    const { info } = data;
    // Not the best solution for situations in which
    // info.pages is big number(e.x 1000000) but since we know that
    // it mostly will be 34 or less so we can just loop through it :)
    for (let i = 1; i < info.pages + 1; i++) {
      finalArray.push(
        <button className="page_button" onClick={() => updatePage(i)} key={i}>
          {i}
        </button>
      );
    }
    setButtonsArr(finalArray);
  }, [data]);
  return <div className="button_container">{buttonsArr.map((el) => el)}</div>;
}

export default PaginationButtons;
