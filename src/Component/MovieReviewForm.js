// import React, { useState } from 'react';

// const MovieReviewForm = () => {
//   const [review, setReview] = useState({
//     reviewerName: '',
//     movieName: '',
//     genre: '',
//     leadActor: '',
//     leadActress: '',
//     rating: 0,
//     reviewText: '',
//   });

//   const handleChange = (e) => {
//     setReview({ ...review, [e.target.name]: e.target.value });
//   };

//   const handleRatingChange = (e) => {
//     setReview({ ...review, rating: parseInt(e.target.value) });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Make an API call here to store the review in MySQL via Spring Tool Suite (STS)
//     console.log(review);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Reviewer Name:</label>
//         <input
//           type="text"
//           name="reviewerName"
//           value={review.reviewerName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Movie Name:</label>
//         <input
//           type="text"
//           name="movieName"
//           value={review.movieName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Genre:</label>
//         <input
//           type="text"
//           name="genre"
//           value={review.genre}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Lead Actor:</label>
//         <input
//           type="text"
//           name="leadActor"
//           value={review.leadActor}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Lead Actress:</label>
//         <input
//           type="text"
//           name="leadActress"
//           value={review.leadActress}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Rating:</label>
//         <input
//           type="number"
//           name="rating"
//           value={review.rating}
//           onChange={handleRatingChange}
//           min="0"
//           max="5"
//           required
//         />
//       </div>
//       <div>
//         <label>Review:</label>
//         <textarea
//           name="reviewText"
//           value={review.reviewText}
//           onChange={handleChange}
//           required
//         ></textarea>
//       </div>
//       <button type="submit">Submit Review</button>
//     </form>
//   );
// };

// export default MovieReviewForm;


import React, { useState } from 'react';

const MovieReviewForm = () => {
  const [review, setReview] = useState({
    reviewerName: '',
    movieName: '',
    genre: '',
    leadActor: '',
    leadActress: '',
    rating: 0,
    reviewText: '',
  });

  const [reviews, setReviews] = useState([]); // State to store all submitted reviews

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (e) => {
    setReview({ ...review, rating: parseInt(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, review]); // Add the new review to the list of reviews
    setReview({ // Reset the form fields
      reviewerName: '',
      movieName: '',
      genre: '',
      leadActor: '',
      leadActress: '',
      rating: 0,
      reviewText: '',
    });
    // Make an API call here to store the review in MySQL via Spring Tool Suite (STS)
    console.log(review);
  };

  return (
    <div className="movie-review-container">
      <form onSubmit={handleSubmit} className="review-form-card">
        <div>
          <label>Reviewer Name:</label>
          <input
            type="text"
            name="reviewerName"
            value={review.reviewerName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Movie Name:</label>
          <input
            type="text"
            name="movieName"
            value={review.movieName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={review.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Lead Actor:</label>
          <input
            type="text"
            name="leadActor"
            value={review.leadActor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Lead Actress:</label>
          <input
            type="text"
            name="leadActress"
            value={review.leadActress}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={review.rating}
            onChange={handleRatingChange}
            min="0"
            max="5"
            required
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            name="reviewText"
            value={review.reviewText}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>

      <div className="reviews-grid">
        {reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <h3>{rev.movieName} ({rev.genre})</h3>
            <p><strong>Reviewer:</strong> {rev.reviewerName}</p>
            <p><strong>Lead Actor:</strong> {rev.leadActor}</p>
            <p><strong>Lead Actress:</strong> {rev.leadActress}</p>
            <p><strong>Rating:</strong> <span className="rating">{'⭐'.repeat(rev.rating)}</span></p>
            <p><strong>Review:</strong> {rev.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieReviewForm;
