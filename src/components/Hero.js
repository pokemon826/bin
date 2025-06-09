// src/components/Hero.js
import React from 'react';
import './Hero.css';
import profilePic from '../assets/bindu.jpg';
import resume from '../assets/bindu.pdf'; // Import the PDF file

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <img src={profilePic} alt="My Profile" className="profile-img" />
      <h1>Hello, I'm Bhanupriya</h1>
      <p>Welcome to my personal portfolio.</p>
      <a href={resume} download className="download-btn">
        click here to see my complete profile
      </a>
    </section>
  );
}

export default Hero;
