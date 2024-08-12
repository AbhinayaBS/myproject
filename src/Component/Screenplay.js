import React, { useState } from 'react';
import axios from 'axios';
import './Screeplay.css'; // Import your CSS file

const MovieRecommendation = () => {
  const [description, setDescription] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const apiKey = '1e257fc8bba34ff146ce2cf4461e85f6'; // Your TMDb API key

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: apiKey,
          query: query,
          language: 'en-US',
          page: 1,
        }
      });
      if (response.data.results.length > 0) {
        setMovies(response.data.results);
        setError('');
      } else {
        setError('No movies found.');
        setMovies([]);
      }
    } catch (error) {
      setError('Error fetching movies.');
      setMovies([]);
    }
  };

  const handleSearch = () => {
    // Simple keyword extraction; adjust as needed
    const keywords = description.split(' ').slice(0, 5).join(' '); // Using the first few words as a simple query
    fetchMovies(keywords);
  };

  return (
    <div className="movie-recommendation">
      <h1>Movie Recommendation Based on Screenplay</h1>
      <textarea
        rows="5"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter screenplay or scenario description..."
      />
      <button onClick={handleSearch}>Find Movies</button>
      {error && <p className="error">{error}</p>}
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie-item">
            <h3>{movie.title} ({movie.release_date.slice(0, 4)})</h3>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieRecommendation;
