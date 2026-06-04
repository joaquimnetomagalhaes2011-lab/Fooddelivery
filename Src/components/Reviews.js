import React, { useState, useEffect } from 'react';
function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://api.fooddeliver.com/reviews')
      .then(response => response.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <div>
      <h1>Avaliações</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <span>{review.username}</span>
            <span>{review.rating}/5</span>
            <span>{review.comment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Reviews;
