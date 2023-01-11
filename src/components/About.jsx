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
          I am an exuberant, open-minded, and dedicated software
          engineer interested in all aspects of computer science. I
          believe in hard work, smart work, and teamwork.
        </div>
      </div>
      <div className="about-gap" />
    </div>
  );
}

export default About;
