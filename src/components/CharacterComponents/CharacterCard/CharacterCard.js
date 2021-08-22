import React from "react";

import "./CharacterCard.css";

function CharacterCard({ characterInfo, openModal }) {
  const { name, gender, image, species, status, type } = characterInfo;
  return (
    <div>
      <img alt={"Character Image"} src={image} className="character_image" />
      <div className="card_container">
        {name && <p className="info_text">Name:{name}</p>}
        {gender && <p className="info_text">Gender:{gender}</p>}
        {species && <p className="info_text">Species:{species}</p>}
        {status && <p className="info_text">Status:{status}</p>}
        {type && <p className="info_text">Type:{type}</p>}
        <button className="details_button " onClick={openModal}>
          Details
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;
