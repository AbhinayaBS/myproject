import React from 'react';
import './Ls1.css';

const TopBoxOfficeHits = () => {
  const movies = [
    {
      id: 1,
      title: 'Movie Title 1',
      boxOfficeEarnings: '$1,200,000,000',
      averageRating: 4.5,
      thumbnail: 'link-to-thumbnail-1.jpg',
      link: '/movies/1',
    },
    {
      id: 2,
      title: 'Movie Title 2',
      boxOfficeEarnings: '$950,000,000',
      averageRating: 4.0,
      thumbnail: 'link-to-thumbnail-2.jpg',
      link: '/movies/2',
    },
    {
      id: 3,
      title: 'Movie Title 3',
      boxOfficeEarnings: '$850,000,000',
      averageRating: 4.2,
      thumbnail: 'link-to-thumbnail-3.jpg',
      link: '/movies/3',
    },
  ];

  return (
    <div className="top-box-office-hits">
      <h2>Top Box Office Hits</h2>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img src={movie.thumbnail} alt={`${movie.title} thumbnail`} className="movie-thumbnail" />
            <div className="movie-details">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-box-office">Box Office Earnings: {movie.boxOfficeEarnings}</p>
              <p className="movie-rating">Average Rating: {movie.averageRating}</p>
              <a href={movie.link} className="movie-link">Read more</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBoxOfficeHits;
