import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './MovieGrid.css';
import MovieDetailsModal from './MovieDetailsModal';

const MovieCard = ({ movie, onClick }) => (
  <div 
    className="movie-card1" 
    onClick={() => onClick(movie)}
    style={{ cursor: 'pointer' }} // Ensure the cursor shows a pointer on hover
  >
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    {/* <h2>{movie.title}</h2> */}
    {/* <p>{movie.overview}</p> */}
  </div>
);

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1e257fc8bba34ff146ce2cf4461e85f6'); // Updated API key
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleMovieClick = (movie) => {
    console.log('Movie clicked:', movie); // Debugging line to ensure click is registered
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='bodycar'>
      <div className="movie-slider-container">
        <h3 className="page-title">Upcoming</h3>
        <div className="movie-slider">
          <Slider {...settings}>
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
            ))}
          </Slider>
        </div>
      </div>
      {selectedMovie && <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  );
};

export default MovieGrid;
