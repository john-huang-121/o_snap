export const retrieveUsers = () => (
  $.ajax ({
    method: 'GET',
    url: `/api/users`
  })
);

export const retrieveUser = (id) => (
  $.ajax ({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const updateUser = (user) => (
  $.ajax ({
    method: 'PATCH',
    url: `/api/users/${user.id}/edit`,
    data: user
  })
);

export const deleteUser = (id) => (
  $.ajax ({
    method: 'DELETE',
    url: `/api/user/${id}`
  })
);
