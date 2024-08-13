// import React, { useState } from 'react';
// import './Screeplay.css';

// const Screenplay = () => {
//   const [screenplay, setScreenplay] = useState('');
//   const [recommendedMovies, setRecommendedMovies] = useState([]);
//   const [topScreenplays, setTopScreenplays] = useState([
//     {
//       id: 1,
//       title: 'Inception',
//       description: 'A mind-bending thriller about dreams within dreams...',
//       imageSrc: 'path/to/inception.jpg',
//     },
//     {
//       id: 2,
//       title: 'Pulp Fiction',
//       description: 'A nonlinear story of intertwining lives...',
//       imageSrc: 'path/to/pulpfiction.jpg',
//     },
//     // Add more top screenplays here
//   ]);

//   const handleScreenplayChange = (event) => {
//     setScreenplay(event.target.value);
//   };

//   const handleRecommendMovies = () => {
//     // Call an API or use a logic to recommend movies based on screenplay
//     // For now, using dummy data for recommended movies
//     const dummyMovies = [
//       {
//         id: 1,
//         title: 'Movie 1',
//         description: 'Description for Movie 1...',
//         imageSrc: 'path/to/image1.jpg',
//       },
//       {
//         id: 2,
//         title: 'Movie 2',
//         description: 'Description for Movie 2...',
//         imageSrc: 'path/to/image2.jpg',
//       },
//       // Add more dummy movies here
//     ];

//     setRecommendedMovies(dummyMovies);
//   };

//   return (
//     <div className="screenplay-page">
//       <div className="screenplay-container">
//         <h2 className="heading">Write Your Screenplay</h2>
//         <textarea
//           value={screenplay}
//           onChange={handleScreenplayChange}
//           placeholder="Start writing your screenplay here..."
//           className="screenplay-input"
//         ></textarea>
//         <button onClick={handleRecommendMovies} className="recommend-button">
//           Recommend Movies
//         </button>
//       </div>
//       <div className="recommendations-container">
//         <h2 className="heading">Recommended Movies</h2>
//         <div className="movies-list">
//           {recommendedMovies.map((movie) => (
//             <div key={movie.id} className="movie-card">
//               <img src={movie.imageSrc} alt={movie.title} className="movie-thumbnail" />
//               <div className="movie-info">
//                 <h3>{movie.title}</h3>
//                 <p>{movie.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="top-screenplays-container">
//         <h2 className="heading">Movies with Top Notch Screenplay</h2>
//         <div className="screenplays-list">
//           {topScreenplays.map((screenplay) => (
//             <div key={screenplay.id} className="screenplay-card">
//               <img src={screenplay.imageSrc} alt={screenplay.title} className="screenplay-thumbnail" />
//               <div className="screenplay-info">
//                 <h3>{screenplay.title}</h3>
//                 <p>{screenplay.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Screenplay;








// import React, { useState } from 'react';
// import axios from 'axios';
// import './Screeplay.css';

// const Screenplay = () => {
//   const [screenplay, setScreenplay] = useState('');
//   const [recommendedMovies, setRecommendedMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleScreenplayChange = (event) => {
//     setScreenplay(event.target.value);
//   };

//   const handleRecommendMovies = async () => {
//     if (!screenplay.trim()) return;

//     setLoading(true);
//     setError('');
//     try {
//       const responses = await Promise.all([
//         axios.get('http://www.omdbapi.com/', { params: { apikey: '765677e8', i: 'tt3896198' } }),
//         axios.get('http://www.omdbapi.com/', { params: { apikey: '765677e8', i: 'tt0848228' } }),
//         axios.get('http://www.omdbapi.com/', { params: { apikey: '765677e8', i: 'tt1375666' } }),
//         axios.get('http://www.omdbapi.com/', { params: { apikey: '765677e8', i: 'tt0468569' } }),
//         axios.get('http://www.omdbapi.com/', { params: { apikey: '765677e8', i: 'tt0133093' } }),
//       ]);

//       const movies = responses.map((response) => response.data);
//       setRecommendedMovies(movies);
//     } catch (error) {
//       console.error('Error fetching movie details:', error);
//       setError('Failed to fetch movie details.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="screenplay-page">
//       <div className="screenplay-container">
//         <h2 className="heading">Write Your Screenplay</h2>
//         <textarea
//           value={screenplay}
//           onChange={handleScreenplayChange}
//           placeholder="Start writing your screenplay here..."
//           className="screenplay-input"
//         ></textarea>
//         <button onClick={handleRecommendMovies} className="recommend-button">
//           {loading ? 'Loading...' : 'Recommend Movies'}
//         </button>
//         {error && <p className="error-message">{error}</p>}
//       </div>
//       <div className="recommendations-container">
//         <h2 className="heading">Recommended Movies</h2>
//         <div className="movies-list">
//           {recommendedMovies.length > 0 ? (
//             recommendedMovies.map((movie) => (
//               <div key={movie.imdbID} className="movie-card">
//                 <img src={movie.Poster} alt={movie.Title} className="movie-thumbnail" />
//                 <div className="movie-info">
//                   <h3>{movie.Title}</h3>
//                   <p>{movie.Year}</p>
//                   <p>{movie.Plot}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No recommendations yet. Start writing your screenplay to get recommendations.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Screenplay;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Screeplay.css';

// const Screenplay = () => {
//   const [screenplay, setScreenplay] = useState('');
//   const [recommendedMovies, setRecommendedMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleScreenplayChange = (event) => {
//     setScreenplay(event.target.value);
//   };

//   const handleRecommendMovies = async () => {
//     if (!screenplay.trim()) {
//       setError('Please enter a screenplay.');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setRecommendedMovies([]);

//     try {
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/search/movie`,
//         {
//           params: {
//             api_key: '1e257fc8bba34ff146ce2cf4461e85f6', // Your TMDB API key
//             query: screenplay, // The screenplay text used as the search query
//           },
//         }
//       );

//       if (response.status === 200 && response.data.results.length > 0) {
//         setRecommendedMovies(response.data.results);
//       } else {
//         setError('No movies found matching your screenplay.');
//       }
//     } catch (error) {
//       console.error('Error fetching movie recommendations:', error);
//       setError('Failed to fetch movie details.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="screenplay-page">
//       <div className="screenplay-container">
//         <h2 className="heading">Write Your Screenplay</h2>
//         <textarea
//           value={screenplay}
//           onChange={handleScreenplayChange}
//           placeholder="Start writing your screenplay here..."
//           className="screenplay-input"
//         ></textarea>
//         <button onClick={handleRecommendMovies} className="recommend-button" disabled={loading}>
//           {loading ? 'Loading...' : 'Recommend Movies'}
//         </button>
//         {error && <p className="error-message">{error}</p>}
//       </div>
//       <div className="recommendations-container">
//         <h2 className="heading">Recommended Movies</h2>
//         <div className="movies-list">
//           {recommendedMovies.length > 0 ? (
//             recommendedMovies.map((movie) => (
//               <div key={movie.id} className="movie-card">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                   alt={movie.title}
//                   className="movie-thumbnail"
//                 />
//                 <div className="movie-info">
//                   <h3>{movie.title}</h3>
//                   <p>{movie.release_date}</p>
//                   <p>{movie.overview}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             !loading && <p>No recommendations yet. Start writing your screenplay to get recommendations.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Screenplay;


import React, { useState } from 'react';
import axios from 'axios';
import './Screeplay.css';

const Screenplay = () => {
  const [screenplay, setScreenplay] = useState('');
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleScreenplayChange = (event) => {
    setScreenplay(event.target.value);
  };

  const handleRecommendMovies = async () => {
    if (!screenplay.trim()) {
      setError('Please enter a screenplay.');
      return;
    }

    setLoading(true);
    setError('');
    setRecommendedMovies([]);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: '1e257fc8bba34ff146ce2cf4461e85f6', // Your TMDB API key
            query: screenplay,
          },
        }
      );

      if (response.status === 200 && response.data.results.length > 0) {
        const filteredMovies = response.data.results.filter(movie => !isAdultContent(movie));
        setRecommendedMovies(filteredMovies);
      } else {
        setError('No movies found matching your screenplay.');
      }
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
      setError('Failed to fetch movie details.');
    } finally {
      setLoading(false);
    }
  };

  const isAdultContent = (movie) => {
    return movie.adult; // TMDB API returns a boolean for adult content
  };

  return (
    <div className="screenplay-page">
      <div className="screenplay-container">
        <h2 className="heading">Write Your Screenplay</h2>
        <textarea
          value={screenplay}
          onChange={handleScreenplayChange}
          placeholder="Start writing your screenplay here..."
          className="screenplay-input"
        ></textarea>
        <button onClick={handleRecommendMovies} className="recommend-button" disabled={loading}>
          {loading ? 'Loading...' : 'Recommend Movies'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="recommendations-container">
        <h2 className="heading">Recommended Movies</h2>
        <div className="movies-list">
          {recommendedMovies.length > 0 ? (
            recommendedMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-thumbnail"
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))
          ) : (
            !loading && <p>No recommendations yet. Start writing your screenplay to get recommendations.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Screenplay;
