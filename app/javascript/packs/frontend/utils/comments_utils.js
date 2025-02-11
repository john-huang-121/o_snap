import $ from 'jquery';;

export const fetchComments = () => {
  return $.ajax({
    method: "GET",
    url: "/api/comments"
  });
};

export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: "/api/comments",
    data: { comment }
  });
};

export const updateComment = comment => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}/edit`,
    data: { comment }
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`
  });
};

// export const fetchComments = () => {
//   return fetch('/api/comments', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   });
// };

// export const createComment = comment => {
//   return fetch('/api/comments', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: comment.body
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   });
// };

// export const updateComment = comment => {
//   return fetch(`/api/comments/${comment.id}/edit`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: comment.body
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   });
// };

// export const deleteComment = id => {
//   return fetch(`/api/comments/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   });
// };