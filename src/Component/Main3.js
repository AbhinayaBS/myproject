// import React from 'react';
import './Main3.css';

const Main3 = () => {
  return (
    <div className="main-part3rd-container">
      <div className="main-part3rd-column main-part3rd-column-left">
        <img src="/a1.jpg" alt="Savages" className="main-part3rd-movie-poster" />
        <div className="main-part3rd-where-to-watch">
          <h3>Where to Watch</h3>
          <p>Available on:</p>
          <p><a href="#">Streaming Platform 1</a></p>
          <p><a href="#">Streaming Platform 2</a></p>
        </div>
      </div>
      
      <div className="main-part3rd-column main-part3rd-column-center">
        <div className="main-part3rd-movie-details">
          <h1>Savages</h1>
          <p>2024 • <span className="main-part3rd-genre">Savagepod</span> • Directed by <a href="#">Claude Bonne</a></p>
          <p>
            In Ikemen, near the tropical forest, Ikiko rescues a baby orangutan from the palm oil planters who have burnt woods. Katrina comes to... <a href="#">read more</a>
          </p>
          <div className="main-part3rd-movie-stats">
            <div className="main-part3rd-stat">
              <span className="main-part3rd-stat-number">3.5</span>
              <span className="main-part3rd-stat-label">Average Rating</span>
            </div>
            <div className="main-part3rd-stat">
              <span className="main-part3rd-stat-number">25</span>
              <span className="main-part3rd-stat-label">Reviews</span>
            </div>
            <div className="main-part3rd-stat">
              <span className="main-part3rd-stat-number">100</span>
              <span className="main-part3rd-stat-label">Ratings</span>
            </div>
          </div>
        </div>
        <div className="main-part3rd-cast-section">
          <h2>Cast</h2>
          <p><strong>Actor 1</strong> as Character 1</p>
          <p><strong>Actor 2</strong> as Character 2</p>
        </div>
      </div>

      <div className="main-part3rd-column main-part3rd-column-right">
        <div className="main-part3rd-user-actions">
          <button className="main-part3rd-action-button">Watch</button>
          <button className="main-part3rd-action-button">Like</button>
          <div className="main-part3rd-watchlist-box">
            <p>This film is in your Watchlist</p>
            <button className="main-part3rd-action-button">Add this film to your Watchlist</button>
          </div>
          <div className="main-part3rd-rate-box">
            <p>Rate</p>
            <button className="main-part3rd-action-button">Show your activity</button>
            <button className="main-part3rd-action-button">Review or log…</button>
            <button className="main-part3rd-action-button">Add to lists…</button>
          </div>
          <div className="main-part3rd-share-box">
            <a href="https://boxd.it/lGeU">Go to change images</a>
            <button className="main-part3rd-action-button">Tweet a link</button>
            <button className="main-part3rd-action-button">Share to Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
