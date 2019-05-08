import React from 'react';
import './About.css';
import Background from '../images/background.jpg'


export default class App extends React.Component {
  render () {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" className="about">
        <img className="about-background" src={Background} alt="Artem Valkov"/>
        <div className="about-text">
          <h1> Hello! My name is {resumeData.name}.</h1>
          <h1> {resumeData.aboutme} </h1>
          <h2> {resumeData.roleDescription} </h2>
        </div>

      </section>
    );
  };
};
