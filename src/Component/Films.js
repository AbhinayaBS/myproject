// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import './Filims.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function WatchAgain() {
//     const Fil2Top10Films = [
//         { title: 'Deadpool & Wolverine', date: '2024-07-26', imageUrl: 'fil1.jpg', copyright: 'A', duration: '2h 10m', genre: 'Action/Comedy' },
//         { title: 'Raayan', date: '2024-07-12', imageUrl: 'fil2.jpg', copyright: 'A', duration: '2h 27m', genre: 'Action/Drama' },
//         { title: 'Bad Newz', date: '2024-07-19', imageUrl: 'fil3.jpg', copyright: 'U/A', duration: '2h 10m', genre: 'Comedy/Romance' },
//         { title: 'Kalki 2898 AD', date: '2024-06-27', imageUrl: 'fil4.jpg', copyright: 'U/A', duration: '3h 1m', genre: 'Sci-fi' },
//         { title: 'Kill', date: '2024-07-05', imageUrl: 'fil5.jpg', copyright: 'U/A', duration: '1h 55m', genre: 'Action' },
//         { title: 'Level Cross', date: '2024-07-26', imageUrl: 'fil6.jpg', copyright: 'U/A', duration: '2h 0m', genre: 'Thrill' },
//         { title: 'Twisters', date: '2024-07-16', imageUrl: 'fil7.jpg', copyright: 'U/A', duration: '2h 2m', genre: 'Action' },
//         { title: 'Indian 2', date: '2024-07-24', imageUrl: 'fil8.jpg', copyright: 'U/A', duration: '3h 3m', genre: 'Political' },
//         { title: 'Devadhoodhan', date: '2024-07-26', imageUrl: 'fil9.jpg', copyright: 'U/A', duration: '2h 47m', genre: 'Horror' },
//         { title: 'Teenz', date: '2024-07-28', imageUrl: 'fil10.jpg', copyright: 'U/A', duration: '2h 6m', genre: 'Adventure' }
//     ];

//     const Fil2JustReviewed = [
//         { title: 'Avengers End-Game', imageUrl: 'rev1.jpg' },
//         { title: 'Joker', imageUrl: 'rev2.jpg' },
//         { title: 'Loki', imageUrl: 'rev3.jpg' },
//         { title: 'Mimi', imageUrl: 'rev4.jpg' },
//         { title: 'Corpse Bride', imageUrl: 'rev5.jpg' },
//         { title: 'Taare Zameen Par', imageUrl: 'rev6.jpg' },
//         { title: 'Lapataa Ladies', imageUrl: 'rev7.jpg' },
//         { title: 'Ms Dhoni-(The Untold Story)', imageUrl: 'rev8.jpg' },
//         { title: '2018-(Everyone is Hero)', imageUrl: 'rev9.jpg' },
//         { title: 'Oh My Kadavule', imageUrl: 'rev10.jpg' }
//     ];

//     const [Fil2PopularReviews, setFil2PopularReviews] = useState([
//         { 
//             title: 'Deadpool & Wolverine', 
//             date: '2024-07-26', 
//             imageUrl: 'fil1.jpg', 
//             username: 'corey👻', 
//             rating: 5, 
//             reviewText: 'Guys will say they know a spot and then drive you into a tornado.',
//             likes: 12718 
//         },
//         { 
//             title: 'Raayan', 
//             date: '2024-07-12', 
//             imageUrl: 'fil2.jpg', 
//             username: 'Abhi😉', 
//             rating: 4, 
//             reviewText: 'An epic conclusion to a fantastic saga!',
//             likes: 15000 
//         },
//         { 
//             title: 'Bad Newz', 
//             date: '2024-07-19', 
//             imageUrl: 'fil3.jpg', 
//             username: 'Chirag Singh', 
//             rating: 5, 
//             reviewText: 'A brilliant and disturbing performance by Joaquin Phoenix.',
//             likes: 18000 
//         },
//         { 
//             title: 'Kalki 2898 AD', 
//             date: '2024-06-27', 
//             imageUrl: 'fil4.jpg', 
//             username: 'movieblogger', 
//             rating: 4, 
//             reviewText: 'A touching and heartfelt story with great performances.',
//             likes: 20000 
//         }
//     ]);

//     const Fil2SliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ]
//     };

//     const Fil2HandleLike = (index) => {
//         const updatedReviews = [...Fil2PopularReviews];
//         updatedReviews[index].likes += 1;
//         setFil2PopularReviews(updatedReviews);
//     };

//     return (
//         <div className="Fil2-watch-again">
//             <div className="Fil2-top-10-section">
//                 <h2>Popular This Week</h2>
//                 <Slider {...Fil2SliderSettings}>
//                     {Fil2Top10Films.map((film, index) => (
//                         <div key={index} className="Fil2-film-card">
//                             <img src={film.imageUrl} alt={film.title} className="Fil2-film-image" />
//                             <h3 className="Fil2-film-title">{film.title}</h3>
//                             <div className="Fil2-film-details">
//                                 <span className="Fil2-film-copyright">{film.copyright}</span>
//                                 <div className="Fil2-film-info">
//                                     <span className="Fil2-film-duration">Duration: {film.duration}</span>
//                                     <span className="Fil2-film-genre">Genre: {film.genre}</span>
//                                 </div>
//                                 <span className="Fil2-film-date">Released on: {film.date}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>

//             <div className="Fil2-just-reviewed-section">
//                 <h2>Just Reviewed</h2>
//                 <div className="Fil2-just-reviewed-cards">
//                     {Fil2JustReviewed.map((film, index) => (
//                         <div key={index} className="Fil2-review-card">
//                             <img src={film.imageUrl} alt={film.title} className="Fil2-review-image" />
//                             <h3 className="Fil2-review-title">{film.title}</h3>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="Fil2-popular-reviews-section">
//                 <h2>Popular Reviews This Week</h2>
//                 <div className="Fil2-popular-reviews-cards">
//                     {Fil2PopularReviews.map((review, index) => (
//                         <div key={index} className="Fil2-popular-review-card">
//                             <img src={review.imageUrl} alt={review.title} className="Fil2-review-image" />
//                             <div className="Fil2-review-content">
//                                 <h3 className="Fil2-review-title">{review.title}</h3>
//                                 <span className="Fil2-review-date">{review.date}</span>
//                                 <span className="Fil2-review-username">{review.username}</span>
//                                 <div className="Fil2-review-rating">
//                                     {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
//                                 </div>
//                                 <p className="Fil2-review-text">{review.reviewText}</p>
//                                 <div className="Fil2-review-actions">
//                                     <button className="Fil2-like-button" onClick={() => Fil2HandleLike(index)}>❤️</button>
//                                     <span className="Fil2-review-count">{review.likes} likes</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WatchAgain;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Filims.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function WatchAgain() {
    // Sample data for top 10 films
    const Fil2Top10Films = [
        { title: 'Deadpool & Wolverine', date: '2024-07-26', imageUrl: 'fil1.jpg', copyright: 'A', duration: '2h 10m', genre: 'Action/Comedy' },
        { title: 'Raayan', date: '2024-07-12', imageUrl: 'fil2.jpg', copyright: 'A', duration: '2h 27m', genre: 'Action/Drama' },
        { title: 'Bad Newz', date: '2024-07-19', imageUrl: 'fil3.jpg', copyright: 'U/A', duration: '2h 10m', genre: 'Comedy/Romance' },
        { title: 'Kalki 2898 AD', date: '2024-06-27', imageUrl: 'fil4.jpg', copyright: 'U/A', duration: '3h 1m', genre: 'Sci-fi' },
        { title: 'Kill', date: '2024-07-05', imageUrl: 'fil5.jpg', copyright: 'U/A', duration: '1h 55m', genre: 'Action' },
        { title: 'Level Cross', date: '2024-07-26', imageUrl: 'fil6.jpg', copyright: 'U/A', duration: '2h 0m', genre: 'Thrill' },
        { title: 'Twisters', date: '2024-07-16', imageUrl: 'fil7.jpg', copyright: 'U/A', duration: '2h 2m', genre: 'Action' },
        { title: 'Indian 2', date: '2024-07-24', imageUrl: 'fil8.jpg', copyright: 'U/A', duration: '3h 3m', genre: 'Political' },
        { title: 'Devadhoodhan', date: '2024-07-26', imageUrl: 'fil9.jpg', copyright: 'U/A', duration: '2h 47m', genre: 'Horror' },
        { title: 'Teenz', date: '2024-07-28', imageUrl: 'fil10.jpg', copyright: 'U/A', duration: '2h 6m', genre: 'Adventure' }
    ];

    // Sample data for just reviewed films
    const Fil2JustReviewed = [
        { title: 'Avengers End-Game', imageUrl: 'rev1.jpg' },
        { title: 'Joker', imageUrl: 'rev2.jpg' },
        { title: 'Loki', imageUrl: 'rev3.jpg' },
        { title: 'Mimi', imageUrl: 'rev4.jpg' },
        { title: 'Corpse Bride', imageUrl: 'rev5.jpg' },
        { title: 'Taare Zameen Par', imageUrl: 'rev6.jpg' },
        { title: 'Lapataa Ladies', imageUrl: 'rev7.jpg' },
        { title: 'Ms Dhoni-(The Untold Story)', imageUrl: 'rev8.jpg' },
        { title: '2018-(Everyone is Hero)', imageUrl: 'rev9.jpg' },
        { title: 'Oh My Kadavule', imageUrl: 'rev10.jpg' }
    ];

    // Sample data for popular reviews
    const [Fil2PopularReviews, setFil2PopularReviews] = React.useState([
        { 
            title: 'Deadpool & Wolverine', 
            date: '2024-07-26', 
            imageUrl: 'fil1.jpg', 
            username: 'corey👻', 
            rating: 5, 
            reviewText: 'Guys will say they know a spot and then drive you into a tornado.',
            likes: 12718 
        },
        { 
            title: 'Raayan', 
            date: '2024-07-12', 
            imageUrl: 'fil2.jpg', 
            username: 'Abhi😉', 
            rating: 4, 
            reviewText: 'An epic conclusion to a fantastic saga!',
            likes: 15000 
        },
        { 
            title: 'Bad Newz', 
            date: '2024-07-19', 
            imageUrl: 'fil3.jpg', 
            username: 'Chirag Singh', 
            rating: 5, 
            reviewText: 'A brilliant and disturbing performance by Joaquin Phoenix.',
            likes: 18000 
        },
        { 
            title: 'Kalki 2898 AD', 
            date: '2024-06-27', 
            imageUrl: 'fil4.jpg', 
            username: 'movieblogger', 
            rating: 4, 
            reviewText: 'A touching and heartfelt story with great performances.',
            likes: 20000 
        }
    ]);

    // Slider settings for the top 10 films section
    const Fil2SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    // Navigate to Main4 with selected film details
    const navigate = useNavigate();

    const handleJustReviewedClick = (title, imageUrl) => {
        navigate(`/main4/${encodeURIComponent(title)}/${encodeURIComponent(imageUrl)}`);
    };

    // Handle like button click
    const Fil2HandleLike = (index) => {
        const updatedReviews = [...Fil2PopularReviews];
        updatedReviews[index].likes += 1;
        setFil2PopularReviews(updatedReviews);
    };

    return (
        <div className="Fil2-watch-again">
            <div className="Fil2-top-10-section">
                <h2>Popular This Week</h2>
                <Slider {...Fil2SliderSettings}>
                    {Fil2Top10Films.map((film, index) => (
                        <div key={index} className="Fil2-film-card">
                            <img src={film.imageUrl} alt={film.title} className="Fil2-film-image" />
                            <h3 className="Fil2-film-title">{film.title}</h3>
                            <div className="Fil2-film-details">
                                <span className="Fil2-film-copyright">{film.copyright}</span>
                                <div className="Fil2-film-info">
                                    <span className="Fil2-film-duration">Duration: {film.duration}</span>
                                    <span className="Fil2-film-genre">Genre: {film.genre}</span>
                                </div>
                                <span className="Fil2-film-date">Released on: {film.date}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="Fil2-just-reviewed-section">
                <h2>Just Reviewed</h2>
                <div className="Fil2-just-reviewed-cards">
                    {Fil2JustReviewed.map((film, index) => (
                        <div key={index} className="Fil2-review-card" onClick={() => handleJustReviewedClick(film.title, film.imageUrl)}>
                            <img src={film.imageUrl} alt={film.title} className="Fil2-review-image" />
                            <h3 className="Fil2-review-title">{film.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="Fil2-popular-reviews-section">
                <h2>Popular Reviews This Week</h2>
                <div className="Fil2-popular-reviews-cards">
                    {Fil2PopularReviews.map((review, index) => (
                        <div key={index} className="Fil2-popular-review-card">
                            <img src={review.imageUrl} alt={review.title} className="Fil2-review-image" />
                            <div className="Fil2-review-content">
                                <h3 className="Fil2-review-title">{review.title}</h3>
                                <span className="Fil2-review-date">{review.date}</span>
                                <span className="Fil2-review-username">{review.username}</span>
                                <div className="Fil2-review-rating">
                                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                </div>
                                <p className="Fil2-review-text">{review.reviewText}</p>
                                <div className="Fil2-review-actions">
                                    <button className="Fil2-like-button" onClick={() => Fil2HandleLike(index)}>❤️</button>
                                    <span className="Fil2-review-likes">{review.likes} likes</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WatchAgain;
