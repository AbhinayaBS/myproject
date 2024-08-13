import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieTrailerSlider.css';

const API_KEY = '1e257fc8bba34ff146ce2cf4461e85f6'; // Your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

const MovieTrailerSlider = () => {
    const [trailers, setTrailers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchTrailers = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
                const movies = response.data.results;
                console.log('Movies:', movies);

                const trailersData = await Promise.all(movies.map(async (movie) => {
                    const trailerResponse = await axios.get(`${BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`);
                    const trailer = trailerResponse.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                    console.log('Trailer for movie:', movie.title, trailer);
                    return trailer ? {
                        title: movie.title,
                        videoUrl: `https://www.youtube.com/embed/${trailer.key}`,
                        posterUrl: `${IMAGE_BASE_URL}${movie.poster_path}`
                    } : null;
                }));
                
                setTrailers(trailersData.filter(trailer => trailer !== null));
            } catch (error) {
                console.error('Error fetching trailers:', error);
            }
        };

        fetchTrailers();
    }, []);

    useEffect(() => {
        if (trailers.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % trailers.length);
            }, 5000); // Change slide every 5 seconds
            return () => clearInterval(interval);
        }
    }, [trailers.length]);

    return (
        <div className="UserMovie-slider">
            {trailers.length > 0 ? (
                <div className="UserMovie-slide">
                    <iframe
                        src={trailers[currentIndex].videoUrl}
                        title={trailers[currentIndex].title}
                        className="UserMovie-iframe"
                        allowFullScreen
                    />
                    <img src={trailers[currentIndex].posterUrl} alt={trailers[currentIndex].title} className="UserMovie-poster" />
                </div>
            ) : (
                <p>Loading trailers...</p>
            )}
        </div>
    );
};

export default MovieTrailerSlider;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './MovieTrailerSlider.css';

// const API_KEY = '1e257fc8bba34ff146ce2cf4461e85f6'; // Your TMDb API key
// const BASE_URL = 'https://api.themoviedb.org/3';
// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

// const MovieTrailerSlider = () => {
//     const [trailers, setTrailers] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const fetchTrendingMovies = async () => {
//             try {
//                 const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
//                 const movies = response.data.results;

//                 // Manually adding top trending movies with their trailer and poster URLs
//                 const trailersData = await Promise.all(movies.slice(0, 5).map(async (movie) => {
//                     const trailerResponse = await axios.get(`${BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`);
//                     const trailer = trailerResponse.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                    
//                     return trailer ? {
//                         title: movie.title,
//                         videoUrl: `https://www.youtube.com/embed/${trailer.key}`,
//                         posterUrl: `${IMAGE_BASE_URL}${movie.poster_path}`,
//                         releaseDate: movie.release_date,
//                         director: 'Director Name', // You can fetch this info separately if needed
//                         genre: 'Genre' // Placeholder, fetch or categorize if needed
//                     } : null;
//                 }));

//                 setTrailers(trailersData.filter(trailer => trailer !== null));
//             } catch (error) {
//                 console.error('Error fetching trending movies:', error);
//             }
//         };

//         fetchTrendingMovies();
//     }, []);

//     useEffect(() => {
//         if (trailers.length > 0) {
//             const interval = setInterval(() => {
//                 setCurrentIndex((prevIndex) => (prevIndex + 1) % trailers.length);
//             }, 5000); // Change slide every 5 seconds
//             return () => clearInterval(interval);
//         }
//     }, [trailers.length]);

//     return (
//         <div className="UserMovie-slider">
//             {trailers.length > 0 ? (
//                 <div className="UserMovie-slide">
//                     <iframe
//                         src={trailers[currentIndex].videoUrl}
//                         title={trailers[currentIndex].title}
//                         className="UserMovie-iframe"
//                         allowFullScreen
//                     />
//                     <img src={trailers[currentIndex].posterUrl} alt={trailers[currentIndex].title} className="UserMovie-poster" />
//                     <div className="UserMovie-details">
//                         <h2>{trailers[currentIndex].title}</h2>
//                         <p><strong>Release Date:</strong> {trailers[currentIndex].releaseDate}</p>
//                         <p><strong>Director:</strong> {trailers[currentIndex].director}</p>
//                         <p><strong>Genre:</strong> {trailers[currentIndex].genre}</p>
//                     </div>
//                 </div>
//             ) : (
//                 <p>Loading trailers...</p>
//             )}
//         </div>
//     );
// };

// export default MovieTrailerSlider;
