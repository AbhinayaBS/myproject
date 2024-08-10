// import React from 'react';
// import './MainLanding.css';

// const MainLanding = () => {
//   return (
//     <div className="app">
//       <div className="main-video">
//         <img src="main-video-thumbnail.jpg" alt="Main Video" className="video-thumbnail" />
//         <div className="video-overlay">
//           <button className="play-button">&#9658;</button>
//           <div className="video-details">
//             <h2>Florence Pugh & David Harbour Talk 'Thunderbolts' at SDCC</h2>
//             <p>With Sebastian Stan, Wyatt Russell, and More Cast</p>
//             <div className="video-stats">
//               <span>110</span> <span>47</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="video-list">
//         <h3>Up next</h3>
//         <div className="video-item">
//           <img src="thumbnail1.jpg" alt="Video 1" className="video-thumbnail" />
//           <div className="video-info">
//             <h4>"The Lord of the Rings: The Rings of Power"</h4>
//             <p>Trailer Drop From San Diego Comic-Con!</p>
//             <div className="video-stats">
//               <span>592</span> <span>322</span>
//             </div>
//           </div>
//         </div>
//         <div className="video-item">
//           <img src="thumbnail2.jpg" alt="Video 2" className="video-thumbnail" />
//           <div className="video-info">
//             <h4>Ryan Reynolds and Hugh Jackman Compare IMDb Pages</h4>
//             <p>STARmeter Rankings, Memorable Credits...</p>
//             <div className="video-stats">
//               <span>668</span> <span>450</span>
//             </div>
//           </div>
//         </div>
//         <div className="video-item">
//           <img src="thumbnail3.jpg" alt="Video 3" className="video-thumbnail" />
//           <div className="video-info">
//             <h4>"House of the Dragon" Season 2 Finale</h4>
//             <p>Watch the Trailer</p>
//             <div className="video-stats">
//               <span>220</span> <span>181</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainLanding;


// import React, { useState } from 'react';
// import './MainLanding.css';

// const MainLanding = () => {
//   const cast = [
//     'Ryan Reynolds',
//     'Hugh Jackman',
//     'Emma Corrin',
//     'Matthew Macfadyen',
//     'Delilah Hamlin',
//     'Leah Jeffries',
//     'Jennifer Garner',
//     'Wesley Snipes',
//     'Channing Tatum',
//     'Chris Evans',
//     'Sofia Helin',
//     'Marc Healton',
//     'Aaron Stafford',
//     'Tyler Mane',
//     'Karen Gillan',
//     'Adrian Ahmed',
//   ];

//   const [reviews, setReviews] = useState([
//     {
//       username: 'tmntmask',
//       review: 'This might be the greatest rom-com ever made',
//       likes: 12533,
//     },
//   ]);

//   const addReview = (username, review) => {
//     setReviews([...reviews, { username, review, likes: 0 }]);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="left-column">
//           <div className="where-to-watch">
//             <h2>Where to Watch</h2>
//             <button>Streaming</button>
//             <button>Rent or Buy</button>
//             <div className="poster">
//             <img src="/poster.jpg" alt="Movie Poster" />
//           </div>
//           </div>
//           <div className="poster">
//             <img src="/poster.jpg" alt="Movie Poster" />
//           </div>
//         </div>
//         <div className="middle-column">
//           <div className="details">
//             <h1>Deadpool & Wolverine</h1>
//             <p><strong>2024</strong> Directed by Shawn Levy</p>
//             <p>Come Together.</p>
//             <p>A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.</p>
//           </div>
//           <div className="cast">
//             <h2>Cast</h2>
//             <div className="cast-list">
//               {cast.map((member, index) => (
//                 <span key={index}>{member}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="right-column">
//           <div className="sign-in">
//             <button>Sign in to log, rate, or review</button>
//             <button>Share</button>
//           </div>
//           <div className="ratings">
//             <h2>Ratings</h2>
//             <div className="rating-graph">
//               <div className="rating-bar" style={{ width: '70%' }}>5 ★★★★★</div>
//               <div className="rating-bar" style={{ width: '20%' }}>4 ★★★★☆</div>
//               <div className="rating-bar" style={{ width: '5%' }}>3 ★★★☆☆</div>
//               <div className="rating-bar" style={{ width: '3%' }}>2 ★★☆☆☆</div>
//               <div className="rating-bar" style={{ width: '2%' }}>1 ★☆☆☆☆</div>
//             </div>
//             <p>3.7 ★★★☆☆</p>
//             <p>3.2K ratings</p>
//           </div>
//         </div>
//       </div>
//       <div className="reviews">
//         <h2>Popular Reviews</h2>
//         {reviews.map((review, index) => (
//           <div className="review" key={index}>
//             <p><strong>Review by {review.username}</strong></p>
//             <p>{review.review}</p>
//             <p>{review.likes} likes</p>
//           </div>
//         ))}
//         <div className="add-review">
//           <h3>Add a Review</h3>
//           <input type="text" placeholder="Username" id="username" />
//           <textarea placeholder="Review" id="review"></textarea>
//           <button onClick={() => addReview(document.getElementById('username').value, document.getElementById('review').value)}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainLanding;

// import React from 'react';
// import Slider from 'react-slick';
// import './MainLanding.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MainLanding = () => {
//     const posterSettings = {
//         dots: false,
//         infinite: true,
//         speed: 2000,
//         slidesToShow: 7,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 0,
//         cssEase: 'linear',
//         pauseOnHover: false,
//         variableWidth: true,
//     };

//     const genreSettings = {
//         dots: false,
//         infinite: true,
//         speed: 2000,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 0,
//         cssEase: 'linear',
//         pauseOnHover: false,
//         variableWidth: true,
//     };

//     const posters = [
//         "gen1.jpg",
//         "gen2.jpg",
//         "gen3.jpg",
//         "gen1.jpg",
//         "gen1.jpg",
//         "gen1.jpg",
//         "gen1.jpg",
//         "gen1.jpg",
//         "gen1.jpg",
//         "gen1.jpg"
//     ];

//     const genres = [
//         "Action", "Comedy", "Drama", "Horror", "Science Fiction", 
//         "Romance", "Thriller", "Fantasy", "Documentary", "Animation"
//     ];

//     return (
//         <div className="main-landing">
//             <div className="hero-section">
//                 <img src="main1.jpg" alt="Hero" className="hero-image" />
//                 <div className="hero-text">
//                     <h1>Track films you’ve watched. Save those you want to see.</h1>
//                     <h1>Tell your friends what’s good.</h1>
//                     <button className="cta-button">Get started — it’s free!</button>
//                 </div>
//             </div>
//             <div className="carousel-section">
//                 <h2>Watch Again</h2>
//                 <div className="carousel-wrapper">
//                     <Slider {...posterSettings}>
//                         {posters.map((poster, index) => (
//                             <div key={index} className="carousel-item">
//                                 <img src={poster} alt={`Poster ${index + 1}`} />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//             <div className="genres-section">
//                 <h2>Movie Genres</h2>
//                 <div className="carousel-wrapper">
//                     <Slider {...genreSettings}>
//                         {genres.map((genre, index) => (
//                             <div key={index} className="genre-item">
//                                 <span>{genre}</span> &gt;
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MainLanding;




// import React from 'react';
// import Slider from 'react-slick';
// import './MainLanding.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MainLanding = () => {
//     const posterSettings = {
//         dots: false,
//         infinite: true,
//         speed: 2000,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1,
//         cssEase: 'linear',
//         pauseOnHover: false,
//         variableWidth: true,
//     };

//     const posters = [
//         { src: "gen1.jpg", title: "Action" },
//         { src: "gen2.jpg", title: "Comedy" },
//         { src: "gen3.jpg", title: "Drama" },
//         { src: "horror.jpg", title: "Horror" },
//         { src: "gen1.jpg", title: "Science Fiction" },
//         { src: "gen2.jpg", title: "Romance" },
//         { src: "gen3.jpg", title: "Thriller" },
//         { src: "gen1.jpg", title: "Fantasy" },
//         { src: "gen2.jpg", title: "Documentary" },
//         { src: "gen3.jpg", title: "Animation" }
//     ];

//     return (
//         <div className="main-landing">
//             <div className="hero-section">
//                 <img src="main1.jpg" alt="Hero" className="hero-image" />
//                 <div className="hero-text">
//                     <h1>Track films you’ve watched. Save those you want to see.</h1>
//                     <h1>Tell your friends what’s good.</h1>
//                     <button className="cta-button">Get started — it’s free!</button>
//                 </div>
//             </div>
//             <div className="carousel-section">
//                 <h2>Watch Again</h2>
//                 <div className="carousel-wrapper">
//                     <Slider {...posterSettings}>
//                         {posters.map((poster, index) => (
//                             <div key={index} className="carousel-item">
//                                 <img src={poster.src} alt={`Poster ${index + 1}`} />
//                                 <div className="carousel-title">
//                                     {poster.title} &gt;
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MainLanding;
// import React from 'react';
// import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
// import './MainLanding.css';  // Import the custom CSS
// import Main2 from './Main2'; // Import the Main2 component
// import Main3 from './Main3';
// import Main4 from './Main4';


// // Sample data for the carousel and movie cards
// const carouselItems = [
//   { src: 'slide-1.jpg', alt: 'Slide 1' },
//   { src: 'slide-2.jpg', alt: 'Slide 2' },
//   { src: 'slide-3.jpg', alt: 'Slide 3' }
// ];

// const movieCards = [
//   { src: 'thumb-1.jpg', alt: 'Movie 1', title: 'Movie 1' },
//   { src: 'thumb-2.jpg', alt: 'Movie 2', title: 'Movie 2' },
//   { src: 'thumb-3.jpg', alt: 'Movie 3', title: 'Movie 3' },
//   { src: 'thumb-4.jpg', alt: 'Movie 4', title: 'Movie 4' },
//   { src: 'thumb-5.jpg', alt: 'Movie 5', title: 'Movie 5' },
//   { src: 'thumb-6.jpg', alt: 'Movie 6', title: 'Movie 6' }
// ];

// const MainLanding = () => {
//   return (
//     <div>
//       <Container fluid className="main-landing">
//         <Row className="carousel-row">
//           <Col md={9}>
//             <Carousel>
//               {carouselItems.map((item, index) => (
//                 <Carousel.Item key={index}>
//                   <img className="d-block w-100" src={item.src} alt={item.alt} />
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </Col>
//           <Col md={3} className="side-images">
//             <Row>
//               {movieCards.slice(0, 2).map((card, index) => (
//                 <Col sm={6} md={12} key={index}>
//                   <Card className="mb-3">
//                     <Card.Img variant="top" src={card.src} alt={card.alt} />
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Col>
//         </Row>
//         <Row className="movie-cards-row">
//           {movieCards.slice(2, 6).map((card, index) => (
//             <Col md={3} key={index}>
//               <Card className="mb-3">
//                 <Card.Img variant="top" src={card.src} alt={card.alt} />
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       <Main2 /> 
//       {/* <Main3 /> Render Main2 component here */}
//       <Main4/>
//     </div>
//   );
// };

// export default MainLanding;



import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './MainLanding.css';  // Import the custom CSS
import Main1 from './Main1'; // Import the Main1 component
import Main2 from './Main2'; // Import the Main2 component
import Main5 from './Main5'; // Import the Main4 component
import Main6 from './Main6';
import Main7 from './Main7';

const MainLanding = () => {
  return (
    <div>
      <Main1 /> 
      <Main2 /> 
      <Main5 />
      <Main6/>
      <Main7/>
    </div>
  );
};

export default MainLanding;
