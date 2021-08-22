import React, { useMemo, useState, useEffect } from "react";

import "./SearchInformation.css";

function SearchInformation({ generalInfo, setSearchResult }) {
  const [searchText, setSearchText] = useState("");

  const searchCharacters = useMemo(() => {
    return generalInfo.filter((general) => {
      return (
        (general.gender &&
          general.gender.toLowerCase().includes(searchText.toLowerCase())) ||
        (general.species &&
          general.species.toLowerCase().includes(searchText.toLowerCase())) ||
        (general.status &&
          general.status.toLowerCase().includes(searchText.toLowerCase())) ||
        (general.name &&
          general.name.toLowerCase().includes(searchText.toLowerCase())) ||
        (general.type &&
          general.type.toLowerCase().includes(searchText.toLowerCase())) ||
        (general.dimension &&
          general.dimension.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
  }, [searchText]);

  useEffect(() => {
    searchCharacters.length > 0
      ? setSearchResult(searchCharacters)
      : setSearchResult(null);
  }, [searchCharacters]);

  return (
    <div className="search_container">
      <input
        className="search_input"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by:species,gender,status"
      />
    </div>
  );
}

export default SearchInformation;
