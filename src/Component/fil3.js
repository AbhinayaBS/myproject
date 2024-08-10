import React, { useState } from 'react';
import './fil3.css';

const Fil3 = () => {
  const cast = [
    'Actor X',
    'Actor Y',
    'Actor Z',
    // Add more cast members
  ];

  const [reviews, setReviews] = useState([
    {
      username: 'critic789',
      review: 'An intriguing watch!',
      likes: 4500,
    },
  ]);

  const addReview = (username, review) => {
    setReviews([...reviews, { username, review, likes: 0 }]);
  };

  return (
    <div className="main-container">
      <div className="main-row">
        <div className="main-left-column">
          <div className="main-poster">
            <img src="rev3.jpg" alt="Movie Poster" />
          </div>
          <div className="main-where-to-watch">
            <h2>Where to Watch</h2>
            <button>Streaming</button>
            <button>Rent or Buy</button>
          </div>
        </div>
        <div className="main-middle-column">
          <div className="main-details">
            <h1>Yet Another Movie</h1>
            <p><strong>2024</strong> Directed by Another Director</p>
            <p>Intriguing plot twists.</p>
            <p>Description of the movie.</p>
          </div>
          <div className="main-cast">
            <h2>Cast</h2>
            <div className="main-cast-list">
              {cast.map((member, index) => (
                <span key={index}>{member}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="main-part4th">
          <div className="main-sign-in">
            <button>Sign in to log, rate, or review</button>
            <button>Share</button>
          </div>
          <div className="main-ratings">
            <h2>Ratings</h2>
            <div className="main-rating-graph">
              <div className="main-rating-bar" style={{ width: '55%' }}>5 ★★★★★</div>
              <div className="main-rating-bar" style={{ width: '30%' }}>4 ★★★★☆</div>
              <div className="main-rating-bar" style={{ width: '10%' }}>3 ★★★☆☆</div>
              <div className="main-rating-bar" style={{ width: '3%' }}>2 ★★☆☆☆</div>
              <div className="main-rating-bar" style={{ width: '2%' }}>1 ★☆☆☆☆</div>
            </div>
            <p>4.0 ★★★★☆</p>
            <p>3.0K ratings</p>
          </div>
        </div>
      </div>
      <div className="main-reviews">
        <h2>Popular Reviews</h2>
        {reviews.map((review, index) => (
          <div className="main-review" key={index}>
            <p><strong>Review by {review.username}</strong></p>
            <p>{review.review}</p>
            <p>{review.likes} likes</p>
          </div>
        ))}
        <div className="main-add-review">
          <h3>Add a Review</h3>
          <input type="text" placeholder="Username" id="username" />
          <textarea placeholder="Review" id="review"></textarea>
          <button onClick={() => addReview(document.getElementById('username').value, document.getElementById('review').value)}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Fil3;
