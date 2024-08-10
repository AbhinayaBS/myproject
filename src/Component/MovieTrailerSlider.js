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
