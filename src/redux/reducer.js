import { actionTypes } from "./actionTypes";

const INITIAL_STATE = {
  episodesAndLocationType: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_EPISODE_AND_LOCATIONS_TYPE:
      return {
        ...state,
        episodesAndLocationType: action.info,
      };
    default:
      return state;
  }
};
