import $ from 'jquery';;

export const fetchLikes = () => {
  return $.ajax({
    method: "GET",
    url: "/api/likes"
  });
};

export const createLike = like => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like }
  });
};

export const deleteLike = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${id}`
  });
};

// export const fetchLikes = () => {
//   return fetch('/api/likes', {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Failed to fetch likes");
//     }
//     return response.json();
//   });
// };

// export const createLike = like => {
//   return fetch('/api/likes', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ like })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Failed to create like");
//     }
//     return response.json();
//   });
// };

// export const deleteLike = id => {
//   return fetch(`/api/likes/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Failed to delete like");
//     }
//     return response.json();
//   });
// };
