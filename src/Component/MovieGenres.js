import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieGenres.css';

const API_KEY = '1e257fc8bba34ff146ce2cf4461e85f6'; // Your TMDb API key

const MovieGenres = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
                setGenres(response.data.genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <div className="UserMovie-genres">
            {genres.length > 0 ? (
                genres.map((genre) => (
                    <div key={genre.id} className="UserMovie-genre-card">
                        <h3>{genre.name}</h3>
                    </div>
                ))
            ) : (
                <p>Loading genres...</p>
            )}
        </div>
    );
};

export default MovieGenres;
