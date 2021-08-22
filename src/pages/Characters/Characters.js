import React, { useState, useEffect } from "react";

import { Modal } from "@material-ui/core";

import CharacterCard from "../../components/CharacterComponents/CharacterCard/CharacterCard";
import DetailedInfo from "../../components/CharacterComponents/DetailedInfo/DetailedInfo";
import SearchInformation from "../../components/SearchInformation/SearchCharacters";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";

import "./Characters.css";

function Characters() {
  const [charactersInfo, setCharactersInfo] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [characterId, setCharacterId] = useState(null);
  const [apiPage, setApiPage] = useState(1);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${apiPage}`)
      .then((res) => res.json())
      .then((result) => {
        setCharactersInfo(result);
      });
  }, [apiPage]);

  return (
    <div>
      {charactersInfo && (
        <SearchInformation
          generalInfo={charactersInfo.results}
          setSearchResult={setSearchResult}
        />
      )}

      {searchResult &&
        searchResult.map((character) => (
          <CharacterCard
            key={character.id}
            openModal={() => {
              setCharacterId(character.id);
              setModal(true);
            }}
            characterInfo={character}
          />
        ))}

      {charactersInfo &&
        !searchResult &&
        charactersInfo.results.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              openModal={() => {
                setCharacterId(character.id);
                setModal(true);
              }}
              characterInfo={character}
            />
          );
        })}

      {charactersInfo && (
        <PaginationButtons
          data={charactersInfo}
          updatePage={(number) => setApiPage(number)}
        />
      )}

      <Modal
        open={modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DetailedInfo
          characterId={characterId}
          closeModal={() => setModal(false)}
        />
      </Modal>
    </div>
  );
}

export default Characters;
