import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './MovieDetailsModal.css';

const MovieDetailsModal = ({ movie, onClose }) => {
  const [reviews, setReviews] = useState('');
  const [cast, setCast] = useState([]);

  const fetchCast = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=1e257fc8bba34ff146ce2cf4461e85f6`); // Use your API key
      setCast(response.data.cast.slice(0, 5)); // Get top 5 cast members
    } catch (error) {
      console.error('Error fetching cast:', error);
    }
  }, [movie.id]);

  useEffect(() => {
    fetchCast();
  }, [fetchCast]);

  const handleReviewChange = (event) => {
    setReviews(event.target.value);
  };

  const handleSubmitReview = () => {
    alert(`Review submitted: ${reviews}`);
    setReviews('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{movie.title}</h2>
        <p>Rating: {movie.vote_average}</p>
        <p>{movie.overview}</p>
        <h3>Cast</h3>
        <ul>
          {cast.map(member => (
            <li key={member.cast_id}>{member.name} as {member.character}</li>
          ))}
        </ul>
        <div className="review-section">
          <h3>Submit a Review</h3>
          <textarea value={reviews} onChange={handleReviewChange} />
          <button onClick={handleSubmitReview}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
