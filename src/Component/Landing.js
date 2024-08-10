// import React from 'react';
// import Slider from 'react-slick';
// import './Landing.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function Landing() {
//     const popularFilms = [
//         { title: 'Friends', rating: 4.5, date: '2024-07-01', imageUrl: 'pos11.jpg' },
//         { title: 'The Karate Kid', rating: 4.7, date: '2024-06-25', imageUrl: 'pos22.jpeg' },
//         { title: 'Wednesday', rating: 4.8, date: '2024-07-15', imageUrl: 'pos3.jpg' },
//         { title: 'Stranger Things', rating: 4.8, date: '2024-06-20', imageUrl: 'pos6.jpg' },
//         { title: 'The Nun', rating: 4.0, date: '2024-07-05', imageUrl: 'pos5.jpg' },
//     ];

//     const top10Films = [
//         { title: 'Manjumel Boys', rating: 4.9, date: '2024-07-10', imageUrl: 'car1.jpg' },
//         { title: 'Maharaja', rating: 4.7, date: '2024-07-12', imageUrl: 'car2.jpg' },
//         { title: 'Vaarnam Aayiram', rating: 4.6, date: '2024-07-14', imageUrl: 'car3.jpg' },
//         { title: 'Heeramandi', rating: 4.9, date: '2024-07-16', imageUrl: 'car4.jpg' },
//         { title: 'Aavesham', rating: 4.8, date: '2024-07-18', imageUrl: 'car5.jpg' },
//         { title: 'Laptaa Ladies ', rating: 4.9, date: '2024-07-20', imageUrl: 'car6.jpg' },
//         { title: 'OK Kanmani', rating: 4.8, date: '2024-07-22', imageUrl: 'car7.jpg' },
//         { title: 'Premalu', rating: 4.7, date: '2024-07-24', imageUrl: 'car8.jpg' },
//         { title: 'Jersy', rating: 4.8, date: '2024-07-26', imageUrl: 'car9.jpg' },
//         { title: 'Raayan', rating: 4.9, date: '2024-07-28', imageUrl: 'car10.jpg' },
//     ];

//     const upcomingMovies = [
//         { title: 'The Greatest Of All Time', rating: 4.5, date: '2024-08-01', imageUrl: 'ucm1.jpg' },
//         { title: 'Thangalaan', rating: 4.6, date: '2024-08-05', imageUrl: 'ucm2.jpg' },
//         { title: 'Lucky Bhaskar', rating: 4.4, date: '2024-08-10', imageUrl: 'ucm3.jpg' },
//         { title: 'It Ends With Us', rating: 4.7, date: '2024-08-12', imageUrl: 'ucm4.jpg' },
//         { title: 'NunaKuzhii', rating: 4.8, date: '2024-08-15', imageUrl: 'ucm5.jpg' },
//         { title: 'Saripodha Sanivaaram', rating: 4.3, date: '2024-08-18', imageUrl: 'ucm6.jpg' },
//         { title: 'Mr Bachan', rating: 4.6, date: '2024-08-22', imageUrl: 'ucm7.jpg' },
//         { title: 'The Demonte Colony', rating: 4.5, date: '2024-08-25', imageUrl: 'ucm8.jpg' },
//         { title: 'Ulajha', rating: 4.4, date: '2024-08-28', imageUrl: 'ucm9.jpg' },
//         { title: 'Adios Amigo', rating: 4.7, date: '2024-08-30', imageUrl: 'ucm10.jpeg' },
//     ];

//     const reviews = [
//         {
//             reviewerName: 'John Doe',
//             rating: 4.5,
//             date: '2024-07-01',
//             content: 'This movie was fantastic! The plot was engaging and the characters were well developed.',
//             imageUrl: 'dp1.jpg', // Add image URL for the reviewer
//         },
//         {
//             reviewerName: 'Jane Smith',
//             rating: 4.7,
//             date: '2024-07-05',
//             content: 'A very enjoyable film with great performances by the entire cast. Highly recommend!',
//             imageUrl: 'dp2.jpg', // Add image URL for the reviewer
//         },
//         {
//             reviewerName: 'Michael Brown',
//             rating: 4.6,
//             date: '2024-07-10',
//             content: 'An amazing cinematic experience. The visuals were stunning and the story was captivating.',
//             imageUrl: 'dp3.jpg', // Add image URL for the reviewer
//         }
//     ];
//     const latestNews = [
//         {
//             title: 'Happy Together',
//             content: 'For Art House Theater Day, filmmakers and industry folk, from Michael Mann to Flight of the Conchords and Daisy Ridley to Sean Fennessey, share eight community-building ideas to center the collective cinematic experience.',
//             link: 'https://letterboxd.com/journal/filmmakers-on-cinemas-community-and-moviegoing/',
//             imageUrl: 'ln1.jpg'
//         }
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
//             <div className="welcome-message">
//                 <h1>Welcome back, buddy!</h1>
//             </div>
//             <div className="popular-films-section">
//                 <h2>Popular Films</h2>
//                 <hr className="section-divider" />
//                 <div className="films-grid">
//                     {popularFilms.map((film, index) => (
//                         <div key={index} className="film-card">
//                             <img src={film.imageUrl} alt={film.title} className="film-image" />
//                             <h3 className="film-title">{film.title}</h3>
//                             <div className="film-details">
//                                 <span className="film-rating">⭐ {film.rating}</span>
//                                 <span className="film-date">Added on: {film.date}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="top-10-section">
//                 <h2>Watch Again...</h2>
//                 <Slider {...sliderSettings}>
//                     {top10Films.map((film, index) => (
//                         <div key={index} className="film-card">
//                             <img src={film.imageUrl} alt={film.title} className="film-image" />
//                             <h3 className="film-title">{film.title}</h3>
//                             <div className="film-details">
//                                 <span className="film-rating">⭐ {film.rating}</span>
//                                 <span className="film-date">Released on: {film.date}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//             <div className="upcoming-movies-section">
//                 <h2>Upcoming Movies</h2>
//                 <hr className="section-divider" />
//                 <div className="films-grid">
//                     {upcomingMovies.map((movie, index) => (
//                         <div key={index} className="film-card">
//                             <img src={movie.imageUrl} alt={movie.title} className="film-image" />
//                             <h3 className="film-title">{movie.title}</h3>
//                             <div className="film-details">
//                                 <span className="film-date">Release Date: {movie.date}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="latest-news-section">
//                 <h2>Latest News</h2>
//                 <hr className="section-divider" />
//                 <div className="news-cards">
//                     {latestNews.map((news, index) => (
//                         <div key={index} className="news-card">
//                             <img src={news.imageUrl} alt={news.title} className="news-image" />
//                             <div className="news-content">
//                                 <h3 className="news-title">{news.title}</h3>
//                                 <p className="news-text">{news.content}</p>
//                                 <a href={news.link} className="news-link">Read more</a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

            
//         </div>
//     );
// }

// export default Landing;



// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import './Landing.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function Landing() {
//     const [username, setUsername] = useState('buddy'); // Default to 'buddy'

//     useEffect(() => {
//         // Retrieve user data from localStorage
//         const user = JSON.parse(localStorage.getItem('user'));
//         if (user) {
//             setUsername(user.username); // Set username from stored data
//         }
//     }, []);

//     const popularFilms = [
//         { title: 'Friends', rating: 4.5, date: '2024-07-01', imageUrl: 'pos11.jpg' },
//         { title: 'The Karate Kid', rating: 4.7, date: '2024-06-25', imageUrl: 'pos22.jpeg' },
//         { title: 'Wednesday', rating: 4.8, date: '2024-07-15', imageUrl: 'pos3.jpg' },
//         { title: 'Stranger Things', rating: 4.8, date: '2024-06-20', imageUrl: 'pos6.jpg' },
//         { title: 'The Nun', rating: 4.0, date: '2024-07-05', imageUrl: 'pos5.jpg' },
//     ];

//     const top10Films = [
//         { title: 'Manjumel Boys', rating: 4.9, date: '2024-07-10', imageUrl: 'car1.jpg' },
//         { title: 'Maharaja', rating: 4.7, date: '2024-07-12', imageUrl: 'car2.jpg' },
//         { title: 'Vaarnam Aayiram', rating: 4.6, date: '2024-07-14', imageUrl: 'car3.jpg' },
//         { title: 'Heeramandi', rating: 4.9, date: '2024-07-16', imageUrl: 'car4.jpg' },
//         { title: 'Aavesham', rating: 4.8, date: '2024-07-18', imageUrl: 'car5.jpg' },
//         { title: 'Laptaa Ladies ', rating: 4.9, date: '2024-07-20', imageUrl: 'car6.jpg' },
//         { title: 'OK Kanmani', rating: 4.8, date: '2024-07-22', imageUrl: 'car7.jpg' },
//         { title: 'Premalu', rating: 4.7, date: '2024-07-24', imageUrl: 'car8.jpg' },
//         { title: 'Jersy', rating: 4.8, date: '2024-07-26', imageUrl: 'car9.jpg' },
//         { title: 'Raayan', rating: 4.9, date: '2024-07-28', imageUrl: 'car10.jpg' },
//     ];

//     const upcomingMovies = [
//         { title: 'The Greatest Of All Time', rating: 4.5, date: '2024-08-01', imageUrl: 'ucm1.jpg' },
//         { title: 'Thangalaan', rating: 4.6, date: '2024-08-05', imageUrl: 'ucm2.jpg' },
//         { title: 'Lucky Bhaskar', rating: 4.4, date: '2024-08-10', imageUrl: 'ucm3.jpg' },
//         { title: 'It Ends With Us', rating: 4.7, date: '2024-08-12', imageUrl: 'ucm4.jpg' },
//         { title: 'NunaKuzhii', rating: 4.8, date: '2024-08-15', imageUrl: 'ucm5.jpg' },
//         { title: 'Saripodha Sanivaaram', rating: 4.3, date: '2024-08-18', imageUrl: 'ucm6.jpg' },
//         { title: 'Mr Bachan', rating: 4.6, date: '2024-08-22', imageUrl: 'ucm7.jpg' },
//         { title: 'The Demonte Colony', rating: 4.5, date: '2024-08-25', imageUrl: 'ucm8.jpg' },
//         { title: 'Ulajha', rating: 4.4, date: '2024-08-28', imageUrl: 'ucm9.jpg' },
//         { title: 'Adios Amigo', rating: 4.7, date: '2024-08-30', imageUrl: 'ucm10.jpeg' },
//     ];

//     const reviews = [
//         {
//             reviewerName: 'John Doe',
//             rating: 4.5,
//             date: '2024-07-01',
//             content: 'This movie was fantastic! The plot was engaging and the characters were well developed.',
//             imageUrl: 'dp1.jpg', // Add image URL for the reviewer
//         },
//         {
//             reviewerName: 'Jane Smith',
//             rating: 4.7,
//             date: '2024-07-05',
//             content: 'A very enjoyable film with great performances by the entire cast. Highly recommend!',
//             imageUrl: 'dp2.jpg', // Add image URL for the reviewer
//         },
//         {
//             reviewerName: 'Michael Brown',
//             rating: 4.6,
//             date: '2024-07-10',
//             content: 'An amazing cinematic experience. The visuals were stunning and the story was captivating.',
//             imageUrl: 'dp3.jpg', // Add image URL for the reviewer
//         }
//     ];

//     const latestNews = [
//         {
//             title: 'Happy Together',
//             content: 'For Art House Theater Day, filmmakers and industry folk, from Michael Mann to Flight of the Conchords and Daisy Ridley to Sean Fennessey, share eight community-building ideas to center the collective cinematic experience.',
//             link: 'https://letterboxd.com/journal/filmmakers-on-cinemas-community-and-moviegoing/',
//             imageUrl: 'ln1.jpg'
//         }
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
//             <div className="welcome-message">
//                 <h1>Welcome back, {username}!</h1>
//             </div>
//             <div className="popular-films-section">
//                 <h2>Popular Films</h2>
//                 <hr className="section-divider" />
//                 <div className="films-grid">
//                     {popularFilms.map((film, index) => (
//                         <div key={index} className="film-card">
//                             <img src={film.imageUrl} alt={film.title} className="film-image" />
//                             <h3 className="film-title">{film.title}</h3>
//                             <div className="film-details">
//                                 <span className="film-rating">⭐ {film.rating}</span>
//                                 <span className="film-date">Added on: {film.date}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="top-10-section">
//                 <h2>Watch Again...</h2>
//                 <Slider {...sliderSettings}>
//                     {top10Films.map((film, index) => (
//                         <div key={index} className="film-card">
//                             <img src={film.imageUrl} alt={film.title} className="film-image" />
//                             <h3 className="film-title">{film.title}</h3>
//                             <div className="film-details">
//                                 <span className="film-rating">⭐ {film.rating}</span>
//                                 <span className="film-date">Released on: {film.date}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//             <div className="upcoming-movies-section">
//                 <h2>Upcoming Movies</h2>
//                 <hr className="section-divider" />
//                 <div className="films-grid">
//                     {upcomingMovies.map((movie, index) => (
//                         <div key={index} className="film-card">
//                             <img src={movie.imageUrl} alt={movie.title} className="film-image" />
//                             <h3 className="film-title">{movie.title}</h3>
//                             <div className="film-details">
//                                 <span className="film-rating">⭐ {movie.rating}</span>
//                                 <span className="film-date">Release date: {movie.date}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="latest-news-section">
//                 <h2>Latest News</h2>
//                 <hr className="section-divider" />
//                 <div className="news-grid">
//                     {latestNews.map((news, index) => (
//                         <div key={index} className="news-card">
//                             <img src={news.imageUrl} alt={news.title} className="news-image" />
//                             <h3 className="news-title">{news.title}</h3>
//                             <p className="news-content">{news.content}</p>
//                             <a href={news.link} className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Landing;


//ORIGINAL

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Landing.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Landing() {
    const [username, setUsername] = useState('buddy'); // Default to 'buddy'

    useEffect(() => {
        // Retrieve user data from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username) {
            setUsername(user.username); // Set username from stored data
        }
    }, []);

    const popularFilms = [
        { title: 'Friends', rating: 4.5, date: '2024-07-01', imageUrl: 'pos11.jpg' },
        { title: 'The Karate Kid', rating: 4.7, date: '2024-06-25', imageUrl: 'pos22.jpeg' },
        { title: 'Wednesday', rating: 4.8, date: '2024-07-15', imageUrl: 'pos3.jpg' },
        { title: 'Stranger Things', rating: 4.8, date: '2024-06-20', imageUrl: 'pos6.jpg' },
        { title: 'The Nun', rating: 4.0, date: '2024-07-05', imageUrl: 'pos5.jpg' },
    ];

    const top10Films = [
        { title: 'Manjumel Boys', rating: 4.9, date: '2024-07-10', imageUrl: 'car1.jpg' },
        { title: 'Maharaja', rating: 4.7, date: '2024-07-12', imageUrl: 'car2.jpg' },
        { title: 'Vaarnam Aayiram', rating: 4.6, date: '2024-07-14', imageUrl: 'car3.jpg' },
        { title: 'Heeramandi', rating: 4.9, date: '2024-07-16', imageUrl: 'car4.jpg' },
        { title: 'Aavesham', rating: 4.8, date: '2024-07-18', imageUrl: 'car5.jpg' },
        { title: 'Laptaa Ladies ', rating: 4.9, date: '2024-07-20', imageUrl: 'car6.jpg' },
        { title: 'OK Kanmani', rating: 4.8, date: '2024-07-22', imageUrl: 'car7.jpg' },
        { title: 'Premalu', rating: 4.7, date: '2024-07-24', imageUrl: 'car8.jpg' },
        { title: 'Jersy', rating: 4.8, date: '2024-07-26', imageUrl: 'car9.jpg' },
        { title: 'Raayan', rating: 4.9, date: '2024-07-28', imageUrl: 'car10.jpg' },
    ];

    const upcomingMovies = [
        { title: 'The Greatest Of All Time', rating: 4.5, date: '2024-08-01', imageUrl: 'ucm1.jpg' },
        { title: 'Thangalaan', rating: 4.6, date: '2024-08-05', imageUrl: 'ucm2.jpg' },
        { title: 'Lucky Bhaskar', rating: 4.4, date: '2024-08-10', imageUrl: 'ucm3.jpg' },
        { title: 'It Ends With Us', rating: 4.7, date: '2024-08-12', imageUrl: 'ucm4.jpg' },
        { title: 'NunaKuzhii', rating: 4.8, date: '2024-08-15', imageUrl: 'ucm5.jpg' },
        { title: 'Saripodha Sanivaaram', rating: 4.3, date: '2024-08-18', imageUrl: 'ucm6.jpg' },
        { title: 'Mr Bachan', rating: 4.6, date: '2024-08-22', imageUrl: 'ucm7.jpg' },
        { title: 'The Demonte Colony', rating: 4.5, date: '2024-08-25', imageUrl: 'ucm8.jpg' },
        { title: 'Ulajha', rating: 4.4, date: '2024-08-28', imageUrl: 'ucm9.jpg' },
        { title: 'Adios Amigo', rating: 4.7, date: '2024-08-30', imageUrl: 'ucm10.jpeg' },
    ];

    const reviews = [
        {
            reviewerName: 'John Doe',
            rating: 4.5,
            date: '2024-07-01',
            content: 'This movie was fantastic! The plot was engaging and the characters were well developed.',
            imageUrl: 'dp1.jpg',
        },
        {
            reviewerName: 'Jane Smith',
            rating: 4.7,
            date: '2024-07-05',
            content: 'A very enjoyable film with great performances by the entire cast. Highly recommend!',
            imageUrl: 'dp2.jpg',
        },
        {
            reviewerName: 'Michael Brown',
            rating: 4.6,
            date: '2024-07-10',
            content: 'An amazing cinematic experience. The visuals were stunning and the story was captivating.',
            imageUrl: 'dp3.jpg',
        }
    ];

    const latestNews = [
        {
            title: 'Happy Together',
            content: 'For Art House Theater Day, filmmakers and industry folk, from Michael Mann to Flight of the Conchords and Daisy Ridley to Sean Fennessey, share eight community-building ideas to center the collective cinematic experience.',
            link: 'https://letterboxd.com/journal/filmmakers-on-cinemas-community-and-moviegoing/',
            imageUrl: 'ln1.jpg'
        }
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

    return (
        <div className="landing-page-container">
            <div className="welcome-message">
                <h1>Welcome back, {username}!</h1>
            </div>
            <div className="popular-films-section">
                <h2>Popular Films</h2>
                <hr className="section-divider" />
                <div className="films-grid">
                    {popularFilms.map((film, index) => (
                        <div key={index} className="film-card">
                            <img src={film.imageUrl} alt={film.title} className="film-image" />
                            <h3 className="film-title">{film.title}</h3>
                            <div className="film-details">
                                <span className="film-rating">⭐ {film.rating}</span>
                                <span className="film-date">Added on: {film.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="top-10-section">
                <h2>Watch Again...</h2>
                <Slider {...sliderSettings}>
                    {top10Films.map((film, index) => (
                        <div key={index} className="film-card">
                            <img src={film.imageUrl} alt={film.title} className="film-image" />
                            <h3 className="film-title">{film.title}</h3>
                            <div className="film-details">
                                <span className="film-rating">⭐ {film.rating}</span>
                                <span className="film-date">Released on: {film.date}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="upcoming-movies-section">
                <h2>Upcoming Movies</h2>
                <hr className="section-divider" />
                <div className="films-grid">
                    {upcomingMovies.map((movie, index) => (
                        <div key={index} className="film-card">
                            <img src={movie.imageUrl} alt={movie.title} className="film-image" />
                            <h3 className="film-title">{movie.title}</h3>
                            <div className="film-details">
                                <span className="film-rating">⭐ {movie.rating}</span>
                                <span className="film-date">Release date: {movie.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="reviews-section">
                <h2>Latest Reviews</h2>
                <hr className="section-divider" />
                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <img src={review.imageUrl} alt={review.reviewerName} className="reviewer-image" />
                            <div className="review-content">
                                <h3 className="reviewer-name">{review.reviewerName}</h3>
                                <div className="review-rating">⭐ {review.rating}</div>
                                <p className="review-text">{review.content}</p>
                                <div className="review-date">Reviewed on: {review.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="latest-news-section">
                <h2>Latest News</h2>
                <hr className="section-divider" />
                <div className="news-grid">
                    {latestNews.map((news, index) => (
                        <div key={index} className="news-card">
                            <img src={news.imageUrl} alt={news.title} className="news-image" />
                            <div className="news-content">
                                <h3 className="news-title">{news.title}</h3>
                                <p className="news-text">{news.content}</p>
                                <a href={news.link} className="news-link">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Landing;



