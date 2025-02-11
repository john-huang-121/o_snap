export const retrieveUsers = () => {
  return fetch('/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to retrieve users');
    }
    return response.json();
  });
};

export const retrieveUser = (id) => {
  return fetch(`/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to retrieve user with id ${id}`);
    }
    return response.json();
  });
};

export const updateUser = (user) => {
  return fetch(`/api/users/${user.id}/edit`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to update user with id ${user.id}`);
    }
    return response.json();
  });
};

export const deleteUser = (id) => {
  return fetch(`/api/user/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to delete user with id ${id}`);
    }
    return response.json();
  });
};
