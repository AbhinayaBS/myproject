import React, { useState } from 'react';
import './fil4.css';

const Fil4 = () => {
  const cast = [
    'Star 1',
    'Star 2',
    'Star 3',
    // Add more cast members
  ];

  const [reviews, setReviews] = useState([
    {
      username: 'starfan',
      review: 'An unforgettable experience!',
      likes: 6100,
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
            <img src="rev4.jpg" alt="Movie Poster" />
          </div>
          <div className="main-where-to-watch">
            <h2>Where to Watch</h2>
            <button>Streaming</button>
            <button>Rent or Buy</button>
          </div>
        </div>
        <div className="main-middle-column">
          <div className="main-details">
            <h1>Blockbuster Hit</h1>
            <p><strong>2024</strong> Directed by Renowned Director</p>
            <p>Action-packed and thrilling.</p>
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
              <div className="main-rating-bar" style={{ width: '65%' }}>5 ★★★★★</div>
              <div className="main-rating-bar" style={{ width: '25%' }}>4 ★★★★☆</div>
              <div className="main-rating-bar" style={{ width: '7%' }}>3 ★★★☆☆</div>
              <div className="main-rating-bar" style={{ width: '2%' }}>2 ★★☆☆☆</div>
              <div className="main-rating-bar" style={{ width: '1%' }}>1 ★☆☆☆☆</div>
            </div>
            <p>4.2 ★★★★☆</p>
            <p>4.1K ratings</p>
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

export default Fil4;
