import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-content">
        <ul >
          <li><a href="/" className="first-ul-list">Home</a></li>
          <li><a href="/hotels" className="ul-list">Hotels</a></li>
          <li><a href="/about-us" className="ul-list">About Us</a></li>
          <li><a href="/gallery" className="ul-list">Gallery</a></li>
          <li><a href="/news" className="ul-list">News</a></li>
          <li><a href="/contact" className="ul-list">Contact</a></li>
        </ul>
      </div>
      <button className="close-button" onClick={onClose}><i class="bi bi-x"></i></button>
    </div>
  );
};

export default HamburgerMenu;