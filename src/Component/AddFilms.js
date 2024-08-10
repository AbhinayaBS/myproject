




// import React from 'react';
// import Slider from 'react-slick';
// import './AddFilms.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function Landing() {
//     const top10Films = [
//         { title: 'Manjumel Boys', rating: 4.9,imageUrl: 'car1.jpg' },
//         { title: 'Maharaja', rating: 4.7, imageUrl: 'car2.jpg' },
//         { title: 'Vaarnam Aayiram', rating: 4.6,  imageUrl: 'car3.jpg' },
//         { title: 'Heeramandi', rating: 4.9,  imageUrl: 'car4.jpg' },
//         { title: 'Aavesham', rating: 4.8, imageUrl: 'car5.jpg' },
//         { title: 'Laptaa Ladies ', rating: 4.9,  imageUrl: 'car6.jpg' },
//         { title: 'OK Kanmani', rating: 4.8,  imageUrl: 'car7.jpg' },
//         { title: 'Premalu', rating: 4.7,  imageUrl: 'car8.jpg' },
//         { title: 'Jersy', rating: 4.8,  imageUrl: 'car9.jpg' },
//         { title: 'Raayan', rating: 4.9,  imageUrl: 'car10.jpg' },
//     ];

//     const sliderSettings = {
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

//     return (
//         <div className="landing-page-container">
//             <div className="top-10-section">
//                 <h2>Watch Again...</h2>
//                 <Slider {...sliderSettings}>
//                     {top10Films.map((film, index) => (
//                         <div key={index} className="top10-film-card">
//                             <img src={film.imageUrl} alt={film.title} className="top10-film-image" />
//                             <h3 className="top10-film-title">{film.title}</h3>
//                             <div className="top10-film-details">
//                                 <span className="top10-film-rating">⭐ {film.rating}</span>
//                             </div>
//                             <button className="top10-add-button">+</button>
//                             <div className="top10-film-actions">
//                                 <button className="top10-film-button">
//                                     <span>🔄</span> Watch Options
//                                 </button>
//                                 <button className="top10-film-button">
//                                     <span>▶️</span> Trailer
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// }

// export default Landing;


import React, { useState } from 'react';
import Slider from 'react-slick';
import './AddFilms.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Landing() {
    const [reviews, setReviews] = useState({});

    const top10Films = [
        { title: 'Manjumel Boys', rating: 4.9, date: '2024-07-10', imageUrl: 'car1.jpg' },
        { title: 'Maharaja', rating: 4.7, date: '2024-07-12', imageUrl: 'car2.jpg' },
        { title: 'Vaarnam Aayiram', rating: 4.6, date: '2024-07-14', imageUrl: 'car3.jpg' },
        { title: 'Heeramandi', rating: 4.9, date: '2024-07-16', imageUrl: 'car4.jpg' },
        { title: 'Aavesham', rating: 4.8, date: '2024-07-18', imageUrl: 'car5.jpg' },
        { title: 'Laptaa Ladies', rating: 4.9, date: '2024-07-20', imageUrl: 'car6.jpg' },
        { title: 'OK Kanmani', rating: 4.8, date: '2024-07-22', imageUrl: 'car7.jpg' },
        { title: 'Premalu', rating: 4.7, date: '2024-07-24', imageUrl: 'car8.jpg' },
        { title: 'Jersy', rating: 4.8, date: '2024-07-26', imageUrl: 'car9.jpg' },
        { title: 'Raayan', rating: 4.9, date: '2024-07-28', imageUrl: 'car10.jpg' },
    ];

    const sliderSettings = {
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

    const handleReviewSubmit = (event, title) => {
        event.preventDefault();
        const review = event.target.elements.review.value;
        if (review) {
            setReviews((prevReviews) => ({
                ...prevReviews,
                [title]: [...(prevReviews[title] || []), review]
            }));
            event.target.elements.review.value = '';
        }
    };

    return (
        <div className="landing-page-container">
            <div className="top-10-section">
                <h2>Watch Again...</h2>
                <Slider {...sliderSettings}>
                    {top10Films.map((film, index) => (
                        <div key={index} className="top10-film-card">
                            <img src={film.imageUrl} alt={film.title} className="top10-film-image" />
                            <h3 className="top10-film-title">{film.title}</h3>
                            <div className="top10-film-details">
                                <span className="top10-film-rating">⭐ {film.rating}</span>
                                <span className="top10-film-date">Released on: {film.date}</span>
                            </div>
                            <div className="top10-film-actions">
                                <button><span role="img" aria-label="watch options">📺</span> Watch Options</button>
                                <button><span role="img" aria-label="trailer">▶️</span> Trailer</button>
                            </div>
                            <form onSubmit={(e) => handleReviewSubmit(e, film.title)}>
                                <input type="text" name="review" placeholder="Add a review..." />
                                <button type="submit">Submit</button>
                            </form>
                            <div className="reviews">
                                {reviews[film.title] && reviews[film.title].map((review, i) => (
                                    <div key={i} className="review">{review}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Landing;
