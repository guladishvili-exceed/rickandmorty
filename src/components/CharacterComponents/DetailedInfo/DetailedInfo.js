import React, { useEffect, useState } from "react";

import "./DetailedInfo.css";

function DetailedInfo({ closeModal, characterId }) {
  const [fullInfo, setFullInfo] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((res) => res.json())
      .then((result) => {
        setFullInfo(result);
        console.log("res", result);
      });
  }, []);
  return (
    <div className="main_container">
      <button className="close_button" onClick={closeModal}>
        Close
      </button>
      {fullInfo && (
        <>
          {fullInfo.created && (
            <p className="detail_info_text">
              Created At:{new Date(fullInfo.created).toLocaleDateString()}
            </p>
          )}
          {fullInfo.episode && (
            <p className="detail_info_text">
              Episodes:{fullInfo.episode.length}
            </p>
          )}
          {fullInfo.gender && (
            <p className="detail_info_text">Gender:{fullInfo.gender}</p>
          )}
          {fullInfo.image && (
            <div className="image_and_text">
              <p className="detail_info_text">Image:</p>
              <img className="detail_info_image" src={fullInfo.image} />
            </div>
          )}
          {fullInfo.location && (
            <div className="image_and_text">
              <p className="detail_info_text">
                Location:{fullInfo.location.name}
              </p>
              <img className="detail_info_image" src={fullInfo.location.url} />
            </div>
          )}
          {fullInfo.origin && (
            <div className="image_and_text">
              <p className="detail_info_text">
                Location:{fullInfo.origin.name}
              </p>
              <img className="detail_info_image" src={fullInfo.origin.url} />
            </div>
          )}
          {fullInfo.name && (
            <p className="detail_info_text">Name:{fullInfo.name}</p>
          )}

          {fullInfo.species && (
            <p className="detail_info_text">Species:{fullInfo.species}</p>
          )}
          {fullInfo.status && (
            <p className="detail_info_text">Status:{fullInfo.status}</p>
          )}
          {fullInfo.type && (
            <p className="detail_info_text">Type:{fullInfo.type}</p>
          )}
        </>
      )}
    </div>
  );
}

export default DetailedInfo;
