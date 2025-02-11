export const fetchPictures = () => {
  return fetch('/api/pictures', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch pictures');
    }
    return response.json();
  });
};

export const fetchPicture = (id) => {
  return fetch(`/api/pictures/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch picture');
    }
    return response.json();
  });
};

export const uploadPicture = (picture) => {
  // 'picture' should be a FormData object
  return fetch('/api/pictures/', {
    method: 'POST',
    body: picture
    // Do not set Content-Type header when sending FormData!
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to upload picture');
    }
    return response.json();
  });
};

export const updatePicture = (picture) => {
  return fetch(`/api/pictures/${picture.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ picture })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to update picture');
    }
    return response.json();
  });
};

export const deletePicture = (picture) => {
  return fetch(`/api/pictures`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
    // If you need to send data with the DELETE request,
    // you can include a body: JSON.stringify({ ... })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete picture');
    }
    return response.json();
  });
};
