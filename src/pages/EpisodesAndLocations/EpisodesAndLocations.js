import React, { useEffect, useState } from "react";

import SearchInformation from "../../components/SearchInformation/SearchCharacters";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";
import TableHead from "../../components/EpisodesAndLocationComponents/TableHead/TableHead";
import GenCard from "../../components/EpisodesAndLocationComponents/GenCard/GenCard";

import { useSelector } from "react-redux";

import "./EpisodesAndLocations.css";

// Since we would have to write exactly same code for locations
// and Episodes We just merged them
// into one using this functional component
// It works thanks to redux.The action is called from
// Header.js component :)

function EpisodesAndLocations() {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [page, setPage] = useState(1);

  const whatToFetch = useSelector((state) => state.episodesAndLocationType);

  useEffect(() => {
    // We set generalInfo state to null to reset the generalInfo state
    // With a new information which will be fetched from the api :)
    setGeneralInfo(null);
    fetch(`https://rickandmortyapi.com/api/${whatToFetch}?page=${page}`)
      .then((res) => res.json())
      .then((result) => {
        setGeneralInfo(result);
      });
  }, [page, whatToFetch]);

  return (
    <div>
      {generalInfo && generalInfo.results && (
        <SearchInformation
          generalInfo={generalInfo.results}
          setSearchResult={setSearchResult}
        />
      )}
      {generalInfo && generalInfo.results && (
        <TableHead genInfo={generalInfo} />
      )}
      {searchResult &&
        searchResult.map((genInfo, index) => {
          return <GenCard key={genInfo.id} place={index} genInfo={genInfo} />;
        })}
      {generalInfo &&
        !searchResult &&
        generalInfo.results &&
        generalInfo.results.map((genInfo, index) => {
          return <GenCard key={genInfo.id} place={index} genInfo={genInfo} />;
        })}

      {generalInfo && generalInfo.info && (
        <PaginationButtons
          data={generalInfo}
          updatePage={(number) => setPage(number)}
        />
      )}
    </div>
  );
}

export default EpisodesAndLocations;
