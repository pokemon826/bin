// src/components/About.js
import React from 'react';
import './About.css';
import img1 from '../assets/about1.jpg'; // Left image 1
import img2 from '../assets/about2.jpg'; // Left image 2
import img3 from '../assets/about3.jpg'; // Right image 1
import img4 from '../assets/about4.jpeg'; // Right image 2

function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-container">
        
        {/* Left Images */}
        <div className="about-images">
          <img src={img1} alt="Coding" />
          <img src={img2} alt="Learning" />
        </div>

        {/* About Text */}
        <div className="about-text">
          <p>
            I'm a passionate and dedicated developer with a strong interest in building impactful digital experiences. With a solid foundation in web technologies and a creative problem-solving mindset, I enjoy turning ideas into clean, efficient, and user-friendly applications.I am an adventurous traveler who loves exploring new places and cultures. Besides my passion for traveling, I am also an avid bike racer, always excited by the thrill of speed and competition. In my free time, I enjoy playing football, which keeps me active and helps me bond with friends. I also have a deep appreciation for nature and make it a habit to plant trees occasionally, contributing to a greener and healthier environment.
          </p>
        </div>

        {/* Right Images */}
        <div className="about-images">
          <img src={img3} alt="Projects" />
          <img src={img4} alt="Ideas" />
        </div>

      </div>
    </section>
  );
}

export default About;
