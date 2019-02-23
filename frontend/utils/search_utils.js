export const searchPictures = searchTerms => {
  return $.ajax({
    method: "GET",
    url: "api/pictures",
    data: searchTerms
  });
};