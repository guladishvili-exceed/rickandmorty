import React from "react";

import "./Header.css";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEpisodeAndLocationsType } from "../../redux/actions";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="header_container">
      <p className="url_title" onClick={() => history.push("/")}>
        Characters
      </p>
      <p
        className="url_title"
        onClick={() => {
          dispatch(setEpisodeAndLocationsType("episode"));
          history.push("/episodesAndlocations");
        }}
      >
        Episodes
      </p>
      <p
        className="url_title"
        onClick={() => {
          dispatch(setEpisodeAndLocationsType("location"));
          history.push("/episodesAndlocations");
        }}
      >
        Locations
      </p>
    </div>
  );
}

export default Header;
