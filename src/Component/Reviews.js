// import React from 'react'
// import MovieReviewForm from './MovieReviewForm'
// import ReviewsDisplay from './ReviewDisplay'

// const Reviews = () => {
//   return (
//     <div>
//       <h1>Movie Review</h1>
//       <MovieReviewForm/>
//       <hr/>
//       <ReviewsDisplay/>
//     </div>
//   )
// }

// export default Reviews


// import React, { useState } from 'react';
// import './ReviewCard.css';
// import MovieSuggestions from './Screenplay';
// import MovieRecommendation from './Screenplay';

// const App = () => {
//   const [reviews, setReviews] = useState([]);
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
//     setReviews([...reviews, review]);  // Add the new review to the list
//     setReview({
//       reviewerName: '',
//       movieName: '',
//       genre: '',
//       leadActor: '',
//       leadActress: '',
//       rating: 0,
//       reviewText: '',
//     });  // Reset form fields
//   };

//   return (
//     <div>
//       <MovieRecommendation/>
//     <div className="movie-review-container">
//       <div className="review-form-card">
//         <h2 className="review-form-title">Submit Your Movie Review</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               name="reviewerName"
//               className="input-field"
//               placeholder="Reviewer Name"
//               value={review.reviewerName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               name="movieName"
//               className="input-field"
//               placeholder="Movie Name"
//               value={review.movieName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               name="genre"
//               className="input-field"
//               placeholder="Genre"
//               value={review.genre}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               name="leadActor"
//               className="input-field"
//               placeholder="Lead Actor"
//               value={review.leadActor}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               name="leadActress"
//               className="input-field"
//               placeholder="Lead Actress"
//               value={review.leadActress}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="number"
//               name="rating"
//               className="input-field"
//               placeholder="Rating (0-5)"
//               value={review.rating}
//               onChange={handleRatingChange}
//               min="0"
//               max="5"
//               required
//             />
//           </div>
//           <div className="input-group">
//             <textarea
//               name="reviewText"
//               className="textarea-field"
//               placeholder="Write your review here..."
//               value={review.reviewText}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="submit-btn">Submit Review</button>
//         </form>
//       </div>

//       {reviews.length > 0 && (
//         <div>
//           {reviews.map((review, index) => (
//             <div key={index} className="review-card">
//               <h3>{review.movieName}</h3>
//               <p><strong>Reviewer:</strong> {review.reviewerName}</p>
//               <p><strong>Genre:</strong> {review.genre}</p>
//               <p><strong>Lead Actor:</strong> {review.leadActor}</p>
//               <p><strong>Lead Actress:</strong> {review.leadActress}</p>
//               <p className="rating"><strong>Rating:</strong> {'⭐'.repeat(review.rating)}</p>
//               <p>{review.reviewText}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import './ReviewCard.css';
// import MovieRecommendation from './Screenplay';

// const App = () => {
//   const [reviews, setReviews] = useState([]);
//   const [review, setReview] = useState({
//     reviewerName: '',
//     movieName: '',
//     genre: '',
//     leadActor: '',
//     leadActress: '',
//     rating: 0,
//     reviewText: '',
//   });
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Handle form input changes
//   const handleChange = (e) => {
//     setReview({ ...review, [e.target.name]: e.target.value });
//   };

//   // Handle rating input change
//   const handleRatingChange = (e) => {
//     setReview({ ...review, rating: parseInt(e.target.value) });
//   };

//   // Validate form inputs
//   const validateForm = () => {
//     const { reviewerName, movieName, genre, leadActor, leadActress, rating, reviewText } = review;
//     if (!reviewerName || !movieName || !genre || !leadActor || !leadActress || rating <= 0 || !reviewText) {
//       return false; // Return false if validation fails
//     }
//     return true; // Return true if all fields are valid
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setLoading(true);
//       try {
//         // Simulate an API call
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         setReviews([...reviews, review]);
//         setReview({
//           reviewerName: '',
//           movieName: '',
//           genre: '',
//           leadActor: '',
//           leadActress: '',
//           rating: 0,
//           reviewText: '',
//         });
//       } catch (err) {
//         setError('Failed to submit review. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       alert('Please fill out all fields correctly.');
//     }
//   };

//   // Handle clear form action
//   const handleClear = () => {
//     setReview({
//       reviewerName: '',
//       movieName: '',
//       genre: '',
//       leadActor: '',
//       leadActress: '',
//       rating: 0,
//       reviewText: '',
//     });
//   };

//   // Handle movie name input change for suggestions
//   const handleMovieNameChange = (e) => {
//     const value = e.target.value;
//     setReview({ ...review, movieName: value });
    
//     // Example logic for fetching movie suggestions
//     // Replace this with actual API call or search logic
//     const fetchedSuggestions = ['Inception', 'The Dark Knight', 'Interstellar']; 
//     setSuggestions(fetchedSuggestions.filter(suggestion => suggestion.toLowerCase().includes(value.toLowerCase())));
//   };

//   // Handle suggestion click
//   const handleSuggestionClick = (suggestion) => {
//     setReview({ ...review, movieName: suggestion });
//     setSuggestions([]);
//   };

//   // Review card component
//   const ReviewCard = React.memo(({ review }) => (
//     <div className="review-card">
//       <h3>{review.movieName}</h3>
//       <p><strong>Reviewer:</strong> {review.reviewerName}</p>
//       <p><strong>Genre:</strong> {review.genre}</p>
//       <p><strong>Lead Actor:</strong> {review.leadActor}</p>
//       <p><strong>Lead Actress:</strong> {review.leadActress}</p>
//       <p className="rating"><strong>Rating:</strong> {'⭐'.repeat(review.rating)}</p>
//       <p>{review.reviewText}</p>
//     </div>
//   ));

//   return (
//     <div>
//       <MovieRecommendation />
//       <div className="movie-review-container">
//         <div className="review-form-card">
//           <h2 className="review-form-title">Submit Your Movie Review</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="reviewerName"
//                 className="input-field"
//                 placeholder="Reviewer Name"
//                 value={review.reviewerName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="movieName"
//                 className="input-field"
//                 placeholder="Movie Name"
//                 value={review.movieName}
//                 onChange={handleMovieNameChange}
//                 required
//               />
//               {suggestions.length > 0 && (
//                 <ul className="suggestions-list">
//                   {suggestions.map((suggestion, index) => (
//                     <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//                       {suggestion}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="genre"
//                 className="input-field"
//                 placeholder="Genre"
//                 value={review.genre}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="leadActor"
//                 className="input-field"
//                 placeholder="Lead Actor"
//                 value={review.leadActor}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="leadActress"
//                 className="input-field"
//                 placeholder="Lead Actress"
//                 value={review.leadActress}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <input
//                 type="number"
//                 name="rating"
//                 className="input-field"
//                 placeholder="Rating (0-5)"
//                 value={review.rating}
//                 onChange={handleRatingChange}
//                 min="0"
//                 max="5"
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <textarea
//                 name="reviewText"
//                 className="textarea-field"
//                 placeholder="Write your review here..."
//                 value={review.reviewText}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="submit-btn" disabled={loading}>
//               {loading ? 'Submitting...' : 'Submit Review'}
//             </button>
//             <button type="button" className="clear-btn" onClick={handleClear}>Clear Form</button>
//           </form>
//           {error && <p className="error-message">{error}</p>}
//         </div>
//         {reviews.length > 0 && (
//           <div>
//             {reviews.map((review, index) => (
//               <ReviewCard key={index} review={review} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import './ReviewCard.css';
//import MovieRecommendation from './MovieRecommendation';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({
    reviewerName: '',
    movieName: '',
    genre: '',
    leadActor: '',
    leadActress: '',
    rating: 0,
    reviewText: '',
  });
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  // Handle rating input change
  const handleRatingChange = (e) => {
    setReview({ ...review, rating: parseInt(e.target.value) });
  };

  // Validate form inputs
  const validateForm = () => {
    const { reviewerName, movieName, genre, leadActor, leadActress, rating, reviewText } = review;
    if (!reviewerName || !movieName || !genre || !leadActor || !leadActress || rating <= 0 || !reviewText) {
      return false; // Return false if validation fails
    }
    return true; // Return true if all fields are valid
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setReviews([...reviews, review]);
        setReview({
          reviewerName: '',
          movieName: '',
          genre: '',
          leadActor: '',
          leadActress: '',
          rating: 0,
          reviewText: '',
        });
      } catch (err) {
        setError('Failed to submit review. Please try again later.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  // Handle clear form action
  const handleClear = () => {
    setReview({
      reviewerName: '',
      movieName: '',
      genre: '',
      leadActor: '',
      leadActress: '',
      rating: 0,
      reviewText: '',
    });
  };

  // Handle movie name input change for suggestions
  const handleMovieNameChange = (e) => {
    const value = e.target.value;
    setReview({ ...review, movieName: value });
    
    // Example logic for fetching movie suggestions
    // Replace this with actual API call or search logic
    const fetchedSuggestions = ['Inception', 'The Dark Knight', 'Interstellar']; 
    setSuggestions(fetchedSuggestions.filter(suggestion => suggestion.toLowerCase().includes(value.toLowerCase())));
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setReview({ ...review, movieName: suggestion });
    setSuggestions([]);
  };

  // Review card component
  const ReviewCard = React.memo(({ review }) => (
    <div className="review-card">
      <h3>{review.movieName}</h3>
      <p><strong>Reviewer:</strong> {review.reviewerName}</p>
      <p><strong>Genre:</strong> {review.genre}</p>
      <p><strong>Lead Actor:</strong> {review.leadActor}</p>
      <p><strong>Lead Actress:</strong> {review.leadActress}</p>
      <p className="rating"><strong>Rating:</strong> {'⭐'.repeat(review.rating)}</p>
      <p>{review.reviewText}</p>
    </div>
  ));

  return (
    <div>
      {/* <MovieRecommendation /> */}
      <div className="movie-review-container">
        <div className="review-form-card">
          <h2 className="review-form-title">Submit Your Movie Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="reviewerName"
                className="input-field"
                placeholder="Reviewer Name"
                value={review.reviewerName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="movieName"
                className="input-field"
                placeholder="Movie Name"
                value={review.movieName}
                onChange={handleMovieNameChange}
                required
              />
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="input-group">
              <input
                type="text"
                name="genre"
                className="input-field"
                placeholder="Genre"
                value={review.genre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="leadActor"
                className="input-field"
                placeholder="Lead Actor"
                value={review.leadActor}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="leadActress"
                className="input-field"
                placeholder="Lead Actress"
                value={review.leadActress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                name="rating"
                className="input-field"
                placeholder="Rating (0-5)"
                value={review.rating}
                onChange={handleRatingChange}
                min="0"
                max="5"
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="reviewText"
                className="textarea-field"
                placeholder="Write your review here..."
                value={review.reviewText}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Review'}
            </button>
            <button type="button" className="clear-btn" onClick={handleClear}>Clear Form</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
        {reviews.length > 0 && (
          <div>
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
