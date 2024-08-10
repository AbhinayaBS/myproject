import React from 'react';
import Slider from 'react-slick';
import './Ls2.css';

const VideoCarousel = () => {
  const videos = [
    {
      id: 1,
      title: 'Upcoming Movie 1',
      url: 'https://www.youtube.com/embed/aLPk8yRq9_c',
      thumbnail: 'https://img.youtube.com/vi/aLPk8yRq9_c/0.jpg',
    },
    {
      id: 2,
      title: 'Upcoming Movie 2',
      url: 'https://www.youtube.com/embed/qQJJWhh-XRo',
      thumbnail: 'https://img.youtube.com/vi/qQJJWhh-XRo/0.jpg',
    },
    {
      id: 3,
      title: 'Upcoming Movie 3',
      url: 'https://www.youtube.com/embed/Idh8n5XuYIA',
      thumbnail: 'https://img.youtube.com/vi/Idh8n5XuYIA/0.jpg',
    },
    {
      id: 4,
      title: 'Upcoming Movie 4',
      url: 'https://www.youtube.com/embed/wdok0rZdmx4',
      thumbnail: 'https://img.youtube.com/vi/wdok0rZdmx4/0.jpg',
    },
    {
      id: 5,
      title: 'Upcoming Movie 5',
      url: 'https://www.youtube.com/embed/PmG52HjrIDo',
      thumbnail: 'https://img.youtube.com/vi/PmG52HjrIDo/0.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="Ls2-card">
      <div className="Ls2-card-content">
        <div className="Ls2-carousel-wrapper">
          <div className="Ls2-video-carousel">
            <Slider {...settings}>
              {videos.map((video) => (
                <div key={video.id} className="Ls2-carousel-slide">
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img src={video.thumbnail} alt={video.title} className="Ls2-carousel-thumbnail" />
                  </a>
                  <h3 className="Ls2-carousel-title">{video.title}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
