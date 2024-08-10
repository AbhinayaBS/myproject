import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
  return (
    <div className="UserMovie-review-card">
      <h3>{review.movieName}</h3>
      <p><strong>Reviewer:</strong> {review.reviewerName}</p>
      <p><strong>Genre:</strong> {review.genre}</p>
      <p><strong>Lead Actor:</strong> {review.leadActor}</p>
      <p><strong>Lead Actress:</strong> {review.leadActress}</p>
      <p><strong>Rating:</strong> {'⭐'.repeat(review.rating)}</p>
      <p>{review.reviewText}</p>
    </div>
  );
};

export default ReviewCard;
