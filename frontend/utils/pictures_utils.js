export const fetchPictures = () => {
  return $.ajax ({
    method: 'GET',
    url: `/api/pictures`
  });
};

export const fetchPicture = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/pictures/${id}`
  });
};

export const searchPictures = (searchTerms) => {
  return $.ajax ({
    method: 'GET',
    url: 'api/pictures',
    data: { searchTerms }
  });
};

export const uploadPicture = (picture) => {
  return $.ajax ({
    method: 'POST',
    url: `/api/pictures/`,
    data: picture,
    contentType: false,
    processData: false
  });
};

export const updatePicture = (picture) => {
  return $.ajax ({
    method: 'PATCH',
    url: `/api/pictures/${picture.id}`,
    data: { picture }
  });
};

export const deletePicture = (picture) => {
  return $.ajax ({
    method: 'DELETE',
    url: `/api/pictures`,
  });
};
