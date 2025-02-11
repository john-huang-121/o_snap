import $ from 'jquery';;

export const searchPictures = searchTerms => {
  return $.ajax({
    method: "GET",
    url: "api/pictures",
    data: searchTerms
  });
};

// export const searchPictures = (searchTerms) => {
//   const queryString = new URLSearchParams(searchTerms).toString();

//   return fetch(`/api/pictures?${queryString}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch pictures')
//     } else {
//       return response.json();
//     }
//   })
// }