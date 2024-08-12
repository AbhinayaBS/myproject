import React from 'react';
import './Main1.css';
import { Link } from 'react-router-dom';

const Main1 = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Track films you’ve watched. Save those you want to see.</h1>
        <h1></h1>
        <h1>Tell your friends what’s good.</h1>
        <button className="hero-button"><Link to ="/signup">Get started — it’s free!</Link></button>
      </div>
    </div>
  );
}

export default Main1;
