export const fetchComments = () => {
  return fetch('/api/comments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};

export const createComment = comment => {
  return fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: comment.body
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};

export const updateComment = comment => {
  return fetch(`/api/comments/${comment.id}/edit`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: comment.body
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};

export const deleteComment = id => {
  return fetch(`/api/comments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};