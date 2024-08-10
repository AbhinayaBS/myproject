import React, { useState } from 'react';
import './Movies.css';

import pic1 from '../Assets/TheGoatLife.jpg';
import pic2 from '../Assets/indian22.jpg';
import pic3 from '../Assets/kalki.jpeg';

const movieItems = [
  {
    id: 1,
    title: 'Rhinegold',
    imageSrc: pic1,
    description: 'Xatar’s path from the ghetto to the top of the music charts is a dramatic adventure story...',
    metascore: 42,
    metascoreCategory: 'Mixed or Average',
    reviewCount: 4,
    director: 'Fatih Akin',
    writer: 'Fatih Akin, Giwar Hajabi',
    userScore: null,
    cast: [
      { name: 'Actor 1', role: 'Role 1' },
      { name: 'Actor 2', role: 'Role 2' },
      { name: 'Actor 3', role: 'Role 3' },
      { name: 'Actor 4', role: 'Role 4' },
      { name: 'Actor 5', role: 'Role 5' },
    ],
    productionTeam: {
      director: 'Fatih Akin',
      musicDirector: 'John Doe',
      cinematography: 'Jane Smith',
      producer: 'Producer Name',
      productionCompany: 'Company Name',
    },
    reviews: [
      { reviewer: 'Reviewer 1', text: 'Great movie!', rating: 4 },
      { reviewer: 'Reviewer 2', text: 'Not bad, but could be better.', rating: 3 },
      { reviewer: 'Reviewer 3', text: 'Didn\'t enjoy it much.', rating: 2 },
    ]
  },
  // Additional movies
];

const upcomingMovies = [
  // Upcoming movies data
];

const theatreReleases = [
  // Theatre releases data
];

const bestMovies = [
  // Best movies data
];

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="movies-page">
      {selectedMovie ? (
        <div className="movie-detail-container">
          <button onClick={() => setSelectedMovie(null)} className="back-button">Back to list</button>
          <div className="movie-header">
            <div className="movie-poster">
              <img src={selectedMovie.imageSrc} alt={selectedMovie.title} />
            </div>
            <div className="movie-info">
              <h1>{selectedMovie.title}</h1>
              <div className="movie-meta">
                <span className={`metascore rating-${selectedMovie.metascore > 60 ? 'good' : selectedMovie.metascore > 40 ? 'average' : 'bad'}`}>
                  {selectedMovie.metascore}
                </span>
                <div className="metascore-info">
                  <p className="metascore-text">{selectedMovie.metascoreCategory}</p>
                  <p className="review-count">Based on {selectedMovie.reviewCount} Critic Reviews</p>
                </div>
              </div>
              <div className="user-score">User Score: {selectedMovie.userScore || 'TBD'}</div>
            </div>
          </div>
          <div className="movie-summary">
            <h2>Summary</h2>
            <p>{selectedMovie.description}</p>
            <p><strong>Directed By:</strong> {selectedMovie.director}</p>
            <p><strong>Written By:</strong> {selectedMovie.writer}</p>
            <h2>Top Cast</h2>
            <div className="top-cast">
              {selectedMovie.cast.map((member, index) => (
                <div key={index} className="cast-member">
                  <div className="cast-name">{member.name}</div>
                  <div className="cast-role">{member.role}</div>
                </div>
              ))}
            </div>
            <h2>Production Team</h2>
            <div className="production-team">
              <div><strong>Director:</strong> {selectedMovie.productionTeam.director}</div>
              <div><strong>Music Director:</strong> {selectedMovie.productionTeam.musicDirector}</div>
              <div><strong>Cinematography:</strong> {selectedMovie.productionTeam.cinematography}</div>
              <div><strong>Producer:</strong> {selectedMovie.productionTeam.producer}</div>
              <div><strong>Production Company:</strong> {selectedMovie.productionTeam.productionCompany}</div>
            </div>
            <h2>Reviews</h2>
            <div className="reviews-section">
              {selectedMovie.reviews.length > 0 ? (
                selectedMovie.reviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <p><strong>{review.reviewer}:</strong> {review.text}</p>
                    <p>Rating: {review.rating}/5</p>
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="movies-heading">Newly Released Movies</h2>
          <div className="movies-list-container">
            {movieItems.map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => setSelectedMovie(movie)}>
                <img src={movie.imageSrc} alt={movie.title} className="movie-thumbnail" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-meta">
                    <span className={`rating-badge rating-${movie.metascore > 60 ? 'good' : movie.metascore > 40 ? 'average' : 'bad'}`}>
                      {movie.metascore}
                    </span>
                    <span className="metascore-text">{movie.metascoreCategory}</span>
                    <div className="review-count">Based on {movie.reviewCount} Critic Reviews</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Releases Section */}
          <h2 className="movies-heading">Upcoming Releases</h2>
          <div className="movies-list-container">
            {upcomingMovies.map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => setSelectedMovie(movie)}>
                <img src={movie.imageSrc} alt={movie.title} className="movie-thumbnail" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-meta">
                    <span className="metascore-text">{movie.metascoreCategory}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* In Theatres Section */}
          <h2 className="movies-heading">In Theaters</h2>
          <div className="movies-list-container">
            {theatreReleases.map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => setSelectedMovie(movie)}>
                <img src={movie.imageSrc} alt={movie.title} className="movie-thumbnail" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-meta">
                    <span className="metascore-text">{movie.metascoreCategory}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Best Movies In Section */}
          <h2 className="movies-heading">Best Movies In</h2>
          <div className="movies-list-container">
            {bestMovies.map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => setSelectedMovie(movie)}>
                <img src={movie.imageSrc} alt={movie.title} className="movie-thumbnail" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-meta">
                    <span className="metascore-text">{movie.metascoreCategory}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Loved By Flic'ers */}
          <h2 className="bestflm-heading">Still Loved By Flic'ers</h2>
          <div className="bestflm-list-container">
            {bestMovies.map((movie) => (
              <div key={movie.id} className="bestflm-card" onClick={() => setSelectedMovie(movie)}>
                <img src={movie.imageSrc} alt={movie.title} className="bestflm-thumbnail" />
                <div className="bestflm-info">
                  <h3>{movie.title}</h3>
                  <div className="bestflm-meta">
                    <span className="bestflm-txt">{movie.metascoreCategory}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Movies;
