import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieList.css';
import MovieGrid from './MovieGrid';
import Main3 from './Main3';
import Main4 from './Main4';
import MovieTrailerSlider from './MovieTrailerSlider';

const TMDB_API_KEY = '1e257fc8bba34ff146ce2cf4461e85f6'; // Replace with your TMDb API key
const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [addedMovies, setAddedMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}`);
        console.log('API Response:', response); // Debug line
        setMovies(response.data.results.slice(0, 15)); // Limit to 15 movies
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Failed to fetch movies. Please try again later.');
      }
    };

    fetchMovies();
  }, []);

  const addToMovieList = (movie) => {
    setAddedMovies((prevAddedMovies) => [...prevAddedMovies, movie]);
  };

  return (
    <div>
       {/* <MovieTrailerSlider/>  */}
      <div className='scroll'>
        <h2 className='h2title'>Trending</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="movie-list-container">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-info">
                <h4>{movie.title}</h4>
                <p>⭐ {movie.vote_average}</p>
                <button 
                  className="add-to-list-btn"
                  onClick={() => addToMovieList(movie)}
                  disabled={addedMovies.some((m) => m.id === movie.id)}
                >
                  {addedMovies.some((m) => m.id === movie.id) ? 'Added' : 'Add to List'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='added-movies'>
          <h2 className='h2title'>My List</h2>
          <div className="movie-list-container">
            {addedMovies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-image"
                />
                <div className="movie-info">
                  <h4>{movie.title}</h4>
                  <p>⭐ {movie.vote_average}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <MovieGrid/> */}
          {/* <Main4/> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
