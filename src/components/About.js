import React from 'react';
import './About.css';
import Background from '../images/background.jpg'


function About() {
  return (
    <section id="about" className="about">
      <img className="about-background" src={Background} alt="Logo" />
      <div className="about-text">
        <h1> Hello! My name is Artem Valkov.</h1>
        <h2> I'm Front-end developer.</h2>
      </div>

    </section>
  );
};

export default About;