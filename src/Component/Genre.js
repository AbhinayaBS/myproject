import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Genre.css';

const Genre = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [comments, setComments] = useState('');

  // Fetch genres from TMDb API
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key: '1e257fc8bba34ff146ce2cf4461e85f6',
            language: 'en-US'
          }
        });
        console.log('API Response:', response.data); // Debug: Check API response
        if (response.data.genres) {
          setGenres(response.data.genres);
        } else {
          console.error('No genres found in response');
        }
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (event) => {
    const value = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedGenres(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Movie Title:', movieTitle);
    console.log('Comments:', comments);
    console.log('Selected Genres:', selectedGenres);
  };

  return (
    <div className="genre-container">
      <h2>Add a Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="movieTitle">Movie Title:</label>
          <input
            type="text"
            id="movieTitle"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="genres">Genres:</label>
          <select
            id="genres"
            multiple
            value={selectedGenres}
            onChange={handleGenreChange}
          >
            {genres.length > 0 ? (
              genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))
            ) : (
              <option disabled>No genres available</option>
            )}
          </select>
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default Genre;
