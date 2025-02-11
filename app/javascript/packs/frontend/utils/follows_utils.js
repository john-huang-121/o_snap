export const fetchFollows = () => {
  return fetch('/api/follows', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch follows');
    }
    return response.json();
  });
};

export const createFollow = (follow) => {
  return fetch('/api/follows', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ follow })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to create follow');
    }
    return response.json();
  });
};

export const deleteFollow = (id) => {
  return fetch(`/api/follows/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete follow');
    }
    return response.json();
  });
};