import { PICTURE_SEARCH_RESULTS } from "../actions/search_actions";

export const searchReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case PICTURE_SEARCH_RESULTS:
      return action.pictures;
    default:
      return oldState;
  }
};

export default searchReducer;