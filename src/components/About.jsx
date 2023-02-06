import React from 'react';

function About() {
  return (
    <div id="about" className="about">
      <div className="about-gap" />
      <div className="about-pic-container">
        <img
          className="about-pic"
          alt="Me"
          src="./me.jpg"
        />
      </div>
      <div className="about-bio-container">
        <div className="about-bio-title">Bio</div>
        <div className="about-bio-desc">
          I am a software engineer currently studying at UC Santa Barbara.
          I enjoy working with cutting edge technologies to solve groundbreaking problems.
          My current interests include data infrastructure, blockchain design,
          and various topics in theoretical computer science.
        </div>
      </div>
      <div className="about-gap" />
    </div>
  );
}

export default About;
