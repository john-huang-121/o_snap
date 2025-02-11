import { RECEIVE_ALL_PICTURES, RECEIVE_PICTURE, DELETE_PICTURE } from '../actions/pictures_actions';
import { PICTURE_SEARCH_RESULTS } from "../actions/search_actions";

import merge from 'lodash/merge';

export const picturesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    //replaces the index if there was a search, renavigate to cancel search
    case RECEIVE_ALL_PICTURES:
    return action.pictures;
    case PICTURE_SEARCH_RESULTS:
      return action.pictures;
    case RECEIVE_PICTURE:
      return merge({}, oldState, {[action.picture.id]: action.picture});
    case DELETE_PICTURE:
      const newState = merge({}, oldState);
      delete newState[action.picture.id];
      return newState;
    default:
      return oldState;
  }
};

export default picturesReducer;
