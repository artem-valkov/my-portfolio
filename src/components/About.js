import React from 'react';
import './About.css';
import Background from '../images/background.jpg'


export default class App extends React.Component {
  render (props) {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" className="about">
        <img className="about-background" src={Background} alt="Artem Valkov"/>
        <div className="about-text">
          <h1> Hello! My name is {resumeData.name}.</h1>
          <h1> {resumeData.aboutme} </h1>
          <h2> {resumeData.roleDescription} </h2>
          <ul className="socials">
            {
              resumeData.socialLinks.map(item => {
                return <li key={item.name}>
                         <a href={item.url}> <img src={item.imageUrl} /> </a>
                       </li>
              })
            }
          </ul>

        </div>

      </section>
    );
  };
};
