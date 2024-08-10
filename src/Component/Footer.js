import React from 'react';
import './Footer.css'; // Ensure the path is correct for your project

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="C:\\Users\\Abhi\\OneDrive\\Desktop\\Movie-Review-System\\movie_review\\src\\NaveBar\\logo.jpg"  /> {/* Replace with your logo */}
      </div>
      <nav className="footer-links">
        <a href="/about" className="footer-link">About Us</a>
        <a href="/contact" className="footer-link">Contact</a>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
        <a href="/terms" className="footer-link">Terms of Service</a>
      </nav>
      <div className="footer-social">
        <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MovieNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
