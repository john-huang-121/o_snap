export const searchPictures = (searchTerms) => {
  const queryString = new URLSearchParams(searchTerms).toString();

  return fetch(`/api/pictures?${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch pictures')
    } else {
      return response.json();
    }
  })
}