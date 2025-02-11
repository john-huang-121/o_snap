export const createUser = (user) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to create user');
    }
    return response.json();
  });
};

export const createSession = (user) => {
  return fetch('/api/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to create session');
    }
    return response.json();
  });
};

export const deleteSession = () => {
  return fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete session');
    }
    return response.json();
  });
};
