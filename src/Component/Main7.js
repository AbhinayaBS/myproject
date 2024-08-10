import React from 'react';
import './Main7.css';

const showdownsData = [
  {
    title: 'The Idea of You',
    description: 'Best films about fandom',
    image: 'rs1.jpg',
  },
  {
    title: 'Short Cuts',
    description: 'Best anthology films',
    image:'rs2.jpg',
  },
  {
    title: 'Chopping Mall',
    description: 'Best ‘80s horror films',
    image: 'rs3.jpg',
  },
];

const newsData = [
  {
    title: 'Summer of Sleaze',
    description: 'Katie Rife picks our August restoration, repertory and re-release highlights.',
    image: 'rn1.jpg',
  },
  {
    title: 'Buggin’ Out',
    description: 'Examining the critical lashing and cultural reappraisal of Starship Troopers.',
    image: 'rn2.jpg',
  },
  {
    title: 'The Official Michael Mann Watchlist',
    description: 'Letterboxd member Michael Mann discusses his favorite films.',
    image: 'rn3.jpg',
  },
];

const Main7 = () => {
  return (
    <div className="main7-wrapper">
      <div className="main7-section">
        <div className="main7-header">
          <h2>Recent Showdowns</h2>
          <a href="#" className="main7-more-link">More</a>
        </div>
        <div className="main7-cards">
          {showdownsData.map((item, index) => (
            <div key={index} className="main7-card">
              <img src={item.image} alt={item.title} className="main7-image" />
              <div className="main7-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="main7-section">
        <div className="main7-header">
          <h2>Recent News</h2>
          <a href="#" className="main7-more-link">More</a>
        </div>
        <div className="main7-cards">
          {newsData.map((item, index) => (
            <div key={index} className="main7-card">
              <img src={item.image} alt={item.title} className="main7-image" />
              <div className="main7-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main7;
