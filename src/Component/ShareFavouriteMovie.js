import React, { useState } from 'react';
import axios from 'axios';
import './ShareFavouriteMovie.css';

const ShareFavoriteMovies = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [review, setReview] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!movieTitle.trim() || !review.trim()) {
      setError('Both fields are required.');
      return;
    }

    try {
      const response = await axios.post('/api/reviews', { movieTitle, review });
      setSubmittedReviews((prevReviews) => [...prevReviews, response.data]);
      setMovieTitle('');
      setReview('');
      setError('');
      setSuccess('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('Failed to submit review.');
    }
  };

  return (
    <div className="share-favorite-movies">
      <h2>Share Your Favorite Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Movie Title"
        />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Share your thoughts..."
        />
        <button type="submit">Submit Review</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <div className="submitted-reviews">
        <h3>Submitted Reviews</h3>
        {submittedReviews.map((r, index) => (
          <div key={index} className="review-card">
            <h4>{r.movieTitle}</h4>
            <p>{r.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShareFavoriteMovies;
