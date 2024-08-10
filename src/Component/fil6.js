import React, { useState } from 'react';
import './fil1.css';

const fil6 = () => {
  const cast = [
    'Ryan Reynolds',
    'Hugh Jackman',
    'Emma Corrin',
    'Matthew Macfadyen',
    'Delilah Hamlin',
    'Leah Jeffries',
    'Jennifer Garner',
    'Wesley Snipes',
    'Channing Tatum',
    'Chris Evans',
    'Sofia Helin',
    'Marc Healton',
    'Aaron Stafford',
    'Tyler Mane',
    'Karen Gillan',
    'Adrian Ahmed',
  ];

  const [reviews, setReviews] = useState([
    {
      username: 'tmntmask',
      review: 'This might be the greatest rom-com ever made',
      likes: 12533,
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
            <img src="rev1.jpg" alt="Movie Poster" />
          </div>
          <div className="main-where-to-watch">
            <h2>Where to Watch</h2>
            <button>Streaming</button>
            <button>Rent or Buy</button>
          </div>
          {/* <div className="main-poster">
            <img src="/poster.jpg" alt="Movie Poster" />
          </div> */}
        </div>
        <div className="main-middle-column">
          <div className="main-details">
            <h1>Deadpool & Wolverine</h1>
            <p><strong>2024</strong> Directed by Shawn Levy</p>
            <p>Come Together.</p>
            <p>A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.</p>
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
              <div className="main-rating-bar" style={{ width: '70%' }}>5 ★★★★★</div>
              <div className="main-rating-bar" style={{ width: '20%' }}>4 ★★★★☆</div>
              <div className="main-rating-bar" style={{ width: '5%' }}>3 ★★★☆☆</div>
              <div className="main-rating-bar" style={{ width: '3%' }}>2 ★★☆☆☆</div>
              <div className="main-rating-bar" style={{ width: '2%' }}>1 ★☆☆☆☆</div>
            </div>
            <p>3.7 ★★★☆☆</p>
            <p>3.2K ratings</p>
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

export default fil6;
