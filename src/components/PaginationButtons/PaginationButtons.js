import React, { useState, useEffect, useRef } from "react";

import "./PaginationButtons.css";

function PaginationButtons({ data, updatePage, currentPage }) {
  const inputRef = useRef("");

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

  const goToPage = () => {
    if (
      inputRef.current.value &&
      /\d/.test(inputRef.current.value) &&
      parseInt(inputRef.current.value) < buttonsArr.length
    ) {
      updatePage(parseInt(inputRef.current.value));
    }
  };

  return (
    <div className="button_container">
      {buttonsArr.length > 5 && (
        <button
          onClick={() => currentPage !== 1 && updatePage(currentPage - 1)}
          className="page_button"
        >
          Prev
        </button>
      )}

      {[...buttonsArr].slice(currentPage - 1, currentPage + 4)}
      {buttonsArr.length > 5 && (
        <button
          onClick={() =>
            currentPage !== buttonsArr.length && updatePage(currentPage + 1)
          }
          className="page_button"
        >
          Next
        </button>
      )}

      {buttonsArr.length > 5 && (
        <div className="go_to_container">
          <input
            type="numeric"
            ref={inputRef}
            placeholder={`${currentPage}/` + `${buttonsArr.length}`}
          />
          <button onClick={goToPage} className="page_button">
            Go To
          </button>
        </div>
      )}
    </div>
  );
}

export default PaginationButtons;
