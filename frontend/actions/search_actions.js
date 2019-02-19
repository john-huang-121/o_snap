import { searchPictures } from "../utils/pictures_utils";

export const PICTURE_SEARCH_RESULTS = "PICTURE_SEARCH_RESULTS";

export const pictureSearchResults = (pictures) => {
  return {
    type: PICTURE_SEARCH_RESULTS,
    pictures
  };
};

export const fetchPictures = (searchTerms) => {
  return dispatch => {
    return searchPictures(searchTerms).then((result) => {
      return dispatch(pictureSearchResults(result));
    });
  };
};
