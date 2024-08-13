// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './MovieList.css';
// import MovieGrid from './MovieGrid';
// import Main3 from './Main3';
// import Main4 from './Main4';
// import MovieTrailerSlider from './MovieTrailerSlider';

// const TMDB_API_KEY = '1e257fc8bba34ff146ce2cf4461e85f6'; // Replace with your TMDb API key
// const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [addedMovies, setAddedMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}`);
//         console.log('API Response:', response); // Debug line
//         setMovies(response.data.results.slice(0, 15)); // Limit to 15 movies
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//         setError('Failed to fetch movies. Please try again later.');
//       }
//     };

//     fetchMovies();
//   }, []);

//   const addToMovieList = (movie) => {
//     setAddedMovies((prevAddedMovies) => [...prevAddedMovies, movie]);
//   };

//   return (
//     <div>
//        {/* <MovieTrailerSlider/>  */}
//       <div className='scroll'>
//         <h2 className='h2title'>Trending</h2>
//         {error && <p className="error-message">{error}</p>}
//         <div className="movie-list-container">
//           {movies.map((movie) => (
//             <div className="movie-card" key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="movie-image"
//               />
//               <div className="movie-info">
//                 <h4>{movie.title}</h4>
//                 <p>⭐ {movie.vote_average}</p>
//                 <button 
//                   className="add-to-list-btn"
//                   onClick={() => addToMovieList(movie)}
//                   disabled={addedMovies.some((m) => m.id === movie.id)}
//                 >
//                   {addedMovies.some((m) => m.id === movie.id) ? 'Added' : 'Add to List'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className='added-movies'>
//           <h2 className='h2title'>My List</h2>
//           <div className="movie-list-container">
//             {addedMovies.map((movie) => (
//               <div className="movie-card" key={movie.id}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                   className="movie-image"
//                 />
//                 <div className="movie-info">
//                   <h4>{movie.title}</h4>
//                   <p>⭐ {movie.vote_average}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* <MovieGrid/> */}
//           {/* <Main4/> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './MovieList.css';

// const TMDB_API_KEY = '1e257fc8bba34ff146ce2cf4461e85f6';
// const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [addedMovies, setAddedMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}`);
//         console.log('API Response:', response); // Debug line
//         setMovies(response.data.results.slice(0, 15));
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//         setError('Failed to fetch movies. Please try again later.');
//       }
//     };

//     fetchMovies();
//   }, []);

//   const addToMovieList = (movie) => {
//     setAddedMovies((prevAddedMovies) => [...prevAddedMovies, movie]);
//   };

//   return (
//     <div>
//       <div className='scroll'>
//         <h2 className='h2title'>Trending</h2>
//         {error && <p className="error-message">{error}</p>}
//         <div className="movie-list-container">
//           {movies.map((movie) => (
//             <div className="movie-card" key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="movie-image"
//               />
//               <div className="movie-info">
//                 <h4>{movie.title}</h4>
//                 <p>⭐ {movie.vote_average}</p>
//                 <button 
//                   className="add-to-list-btn"
//                   onClick={() => addToMovieList(movie)}
//                   disabled={addedMovies.some((m) => m.id === movie.id)}
//                 >
//                   {addedMovies.some((m) => m.id === movie.id) ? 'Added' : 'Add to List'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className='added-movies'>
//           <h2 className='h2title'>My List</h2>
//           <div className="movie-list-container">
//             {addedMovies.map((movie) => (
//               <div className="movie-card" key={movie.id}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                   className="movie-image"
//                 />
//                 <div className="movie-info">
//                   <h4>{movie.title}</h4>
//                   <p>⭐ {movie.vote_average}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './MovieList.css';
// import MovieDetailsModal from './MovieDetailsModal'; // Import the modal component

// const TMDB_API_KEY = '1e257fc8bba34ff146ce2cf4461e85f6';
// const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [addedMovies, setAddedMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedMovie, setSelectedMovie] = useState(null); // To store the selected movie

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}`);
//         setMovies(response.data.results.slice(0, 15));
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//         setError('Failed to fetch movies. Please try again later.');
//       }
//     };

//     fetchMovies();
//   }, []);

//   const addToMovieList = (movie) => {
//     setAddedMovies((prevAddedMovies) => [...prevAddedMovies, movie]);
//   };

//   const openModal = (movie) => {
//     setSelectedMovie(movie);
//   };

//   const closeModal = () => {
//     setSelectedMovie(null);
//   };

//   return (
//     <div>
//       <div className='scroll'>
//         <h2 className='h2title'>Trending</h2>
//         {error && <p className="error-message">{error}</p>}
//         <div className="movie-list-container">
//           {movies.map((movie) => (
//             <div className="movie-card" key={movie.id} onClick={() => openModal(movie)}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="movie-image"
//               />
//               <div className="movie-info">
//                 <h4>{movie.title}</h4>
//                 <p>⭐ {movie.vote_average}</p>
//                 <button 
//                   className="add-to-list-btn"
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevent modal from opening when clicking the button
//                     addToMovieList(movie);
//                   }}
//                   disabled={addedMovies.some((m) => m.id === movie.id)}
//                 >
//                   {addedMovies.some((m) => m.id === movie.id) ? 'Added' : 'Add to List'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className='added-movies'>
//           <h2 className='h2title'>My List</h2>
//           <div className="movie-list-container">
//             {addedMovies.map((movie) => (
//               <div className="movie-card" key={movie.id} onClick={() => openModal(movie)}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                   className="movie-image"
//                 />
//                 <div className="movie-info">
//                   <h4>{movie.title}</h4>
//                   <p>⭐ {movie.vote_average}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Render the MovieDetailsModal */}
//       {selectedMovie && (
//         <MovieDetailsModal
//           movie={selectedMovie}
//           onClose={closeModal}
//         />
//       )}
//     </div>
//   );
// };

// export default MovieList;

//review 3
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './MovieList.css';


// const OMDB_API_KEY = '765677e8'; // Your OMDb API key

// const movieIDs = [
//   'tt0110357', // The Lion King (1994)
//   'tt0101414', // Beauty and the Beast (1991)
//   'tt0103639', // Aladdin (1992)
//   'tt2294629', // Frozen (2013)
//   'tt3521164', // Moana (2016)
//   'tt0097757', // The Little Mermaid (1989)
//   'tt0114709', // Toy Story (1995)
//   'tt0042332', // Cinderella (1950)
//   'tt0120762', // Mulan (1998)
//   'tt2948356', // Zootopia (2016)
//   'tt0061852', // The Jungle Book (1967)
//   'tt0398286', // Tangled (2010)
//   'tt0317705', // The Incredibles (2004)
//   'tt1049413', // Up (2009)
//   'tt0266543', // Finding Nemo (2003)
// ];

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [addedMovies, setAddedMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const moviePromises = movieIDs.map((id) =>
//           axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}`)
//         );
//         const movieResponses = await Promise.all(moviePromises);
//         const movieData = movieResponses.map((response) => response.data);
//         setMovies(movieData);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//         setError('Failed to fetch movies. Please try again later.');
//       }
//     };

//     fetchMovies();
//   }, []);

//   const addToMovieList = (movie) => {
//     setAddedMovies((prevAddedMovies) => [...prevAddedMovies, movie]);
//   };

//   return (
//     <div>
//       <div className='scroll'>
//         <h2 className='h2title'>Disney Classics</h2>
//         {error && <p className="error-message">{error}</p>}
//         <div className="movie-list-container">
//           {movies.map((movie) => (
//             <div className="movie-card" key={movie.imdbID}>
//               <img
//                 src={movie.Poster}
//                 alt={movie.Title}
//                 className="movie-image"
//               />
//               <div className="movie-info">
//                 <h4>{movie.Title}</h4>
//                 <p>⭐ {movie.imdbRating}</p>
//                 <button 
//                   className="add-to-list-btn"
//                   onClick={() => addToMovieList(movie)}
//                   disabled={addedMovies.some((m) => m.imdbID === movie.imdbID)}
//                 >
//                   {addedMovies.some((m) => m.imdbID === movie.imdbID) ? 'Added' : 'Add to List'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className='added-movies'>
//           <h2 className='h2title'>My List</h2>
//           <div className="movie-list-container">
//             {addedMovies.map((movie) => (
//               <div className="movie-card" key={movie.imdbID}>
//                 <img
//                   src={movie.Poster}
//                   alt={movie.Title}
//                   className="movie-image"
//                 />
//                 <div className="movie-info">
//                   <h4>{movie.Title}</h4>
//                   <p>⭐ {movie.imdbRating}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieList.css';
import MovieDetailsModal from './MovieDetailsModal';

const OMDB_API_KEY = '765677e8'; // Your OMDb API key

const movieIDs = [
  'tt0110357', // The Lion King (1994)
  'tt0101414', // Beauty and the Beast (1991)
  'tt0103639', // Aladdin (1992)
  'tt2294629', // Frozen (2013)
  'tt3521164', // Moana (2016)
  'tt0097757', // The Little Mermaid (1989)
  'tt0114709', // Toy Story (1995)
  'tt0042332', // Cinderella (1950)
  'tt0120762', // Mulan (1998)
  'tt2948356', // Zootopia (2016)
  'tt0061852', // The Jungle Book (1967)
  'tt0398286', // Tangled (2010)
  'tt0317705', // The Incredibles (2004)
  'tt1049413', // Up (2009)
  'tt0266543', // Finding Nemo (2003)
];

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [addedMovies, setAddedMovies] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null); // State for selected movie

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviePromises = movieIDs.map((id) =>
          axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}`)
        );
        const movieResponses = await Promise.all(moviePromises);
        const movieData = movieResponses.map((response) => response.data);
        setMovies(movieData);
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

  const removeFromMovieList = (movie) => {
    setAddedMovies((prevAddedMovies) =>
      prevAddedMovies.filter((m) => m.imdbID !== movie.imdbID)
    );
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className='scroll'>
        <h2 className='h2title'>Disney Classics</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="movie-list-container">
          {movies.map((movie) => (
            <div
              className="movie-card"
              key={movie.imdbID}
              onClick={() => handleMovieClick(movie)} // Handle click to show modal
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="movie-image"
              />
              <div className="movie-info">
                <h4>{movie.Title}</h4>
                <p>⭐ {movie.imdbRating}</p>
                <button
                  className="add-to-list-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click event from bubbling to the card
                    addToMovieList(movie);
                  }}
                  disabled={addedMovies.some((m) => m.imdbID === movie.imdbID)}
                >
                  {addedMovies.some((m) => m.imdbID === movie.imdbID) ? 'Added' : 'Add to List'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='added-movies'>
          <h2 className='h2title'>My List</h2>
          <div className="movie-list-container">
            {addedMovies.map((movie) => (
              <div className="movie-card" key={movie.imdbID}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="movie-image"
                />
                <div className="movie-info">
                  <h4>{movie.Title}</h4>
                  <p>⭐ {movie.imdbRating}</p>
                  <button
                    className="remove-from-list-btn"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from bubbling to the card
                      removeFromMovieList(movie);
                    }}
                  >
                    Remove from List
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={closeModal}
        />
      )} */}
    </div>
  );
};

export default MovieList;
