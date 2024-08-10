import React from 'react';
import './Main6.css';

const popofrev = [
  {
    movie: 'Deadpool & Wolverine',
    year: 2024,
    user: 'ConnorEatsPants',
    rating: 3,
    reviews: 53,
    comment: 'guy sitting next to me in a deadpool graphic tee dropped his soda on the couple in front of us, apologized, left and never returned to the theater. Was arguably funnier than the movie.',
    likes: 11073,
    image: 'revr1.jpg',
  },
  {
    movie: 'Deadpool & Wolverine',
    year: 2024,
    user: 'scarlet',
    rating: 4,
    reviews: 105,
    comment: 'Plot super fights',
    likes: 13397,
    image:'revr1.jpg',
  },
  {
    movie: 'Deadpool & Wolverine',
    year: 2024,
    user: 'timtamtitus',
    rating: 5,
    reviews: 54,
    comment: 'this might be the greatest rom-com ever made',
    likes: 14206,
    image: 'revr1.jpg',
  },
  {
    movie: 'Trap',
    year: 2024,
    user: 'Karsten',
    rating: 3,
    reviews: 10,
    comment: 'you gotta wonder if m night shyamalan has ever had a conversation with a human being',
    likes: 4674,
    image: 'revr1.jpg',
  },
  {
    movie: 'Deadpool & Wolverine',
    year: 2024,
    user: 'comrade_yui',
    rating: 1,
    reviews: 19,
    comment: 'god help us all.',
    likes: 6929,
    image: 'revr1.jpg',
  },
  {
    movie: 'Deadpool & Wolverine',
    year: 2024,
    user: 'zoë rose bryant',
    rating: 4,
    reviews: 23,
    comment: 'my dad lit up like a christmas tree when he finally got to see a comics accurate wolverine in live action and i had the same reaction when hugh jackman finally took his shirt off',
    likes: 5856,
    image: 'revr1.jpg',
  },
];

const crewPicks = [
  {
    title: 'Twister',
    thumbnail: 'cr1.jpg',
  },
  {
    title: 'Didi',
    thumbnail: 'cr2.jpg',
  },
  {
    title: 'Clockwork Orange',
    thumbnail: 'cr3.jpg',
  },
  {
    title: 'Sing Sing',
    thumbnail: 'cr4.jpg',
  },
  {
    title: 'Movie 5',
    thumbnail: 'cr5.jpg',
  },
  {
    title: 'Movie 6',
    thumbnail: 'cr6.jpg',
  },
];

const popularReviewers = [
  {
    name: 'Karsten',
    films: 2037,
    reviews: 1470,
    avatar: 'pr1.jpg',
  },
  {
    name: 'James (Schaffrillas)',
    films: 1062,
    reviews: 940,
    avatar: 'pr2.jpg',
  },
  {
    name: 'Jay',
    films: 1451,
    reviews: 1701,
    avatar: 'pr3.jpg',
  },
  {
    name: 'zoë rose bryant',
    films: 4864,
    reviews: 2386,
    avatar: 'pr4.jpg',
  },
  {
    name: 'Lucy',
    films: 2630,
    reviews: 1803,
    avatar: 'pr5.jpg',
  },
];

const Main6 = () => {
  return (
    <div className="main6-container">
      <div className="main6-reviews-column">
        <h2>Popular Reviews of This Week</h2>
        {popofrev.map((review, index) => (
          <div key={index} className="main6-review-card">
            <img src={review.image} alt={review.movie} className="main6-review-image" />
            <div>
              <h3>{review.movie} ({review.year})</h3>
              {/* <p className="main6-user">@{review.user} <span className="main6-rating">{'★'.repeat(review.rating)}</span> {review.reviews}</p> */}
              <p className="main6-comment">{review.comment}</p>
              <p className="main6-likes">Like review {review.likes}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="main6-secondary-column">
        <div className="main6-crew-picks">
          <h2>Crew Picks</h2>
          <div className="main6-crew-grid">
            {crewPicks.map((pick, index) => (
              <div key={index} className="main6-crew-card">
                <img src={pick.thumbnail} alt={pick.title} />
                <p>{pick.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="main6-popular-reviewers">
          <h2>Popular Reviewers</h2>
          {popularReviewers.map((reviewer, index) => (
            <div key={index} className="main6-reviewer-card">
              <img src={reviewer.avatar} alt={reviewer.name} className="main6-reviewer-avatar" />
              <div>
                <p className="main6-reviewer-name">{reviewer.name}</p>
                <p className="main6-reviewer-stats">{reviewer.films} films, {reviewer.reviews} reviews</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main6;
