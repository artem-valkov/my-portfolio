import React from 'react';
import AboutBackground from './styled/AboutBackground'
import AboutText from './styled/AboutText'
import AboutTechnologiesItems from './styled/AboutTechnologiesIcons'

export default class About extends React.Component {
  render() {
    return (
      <AboutBackground>
        <AboutText> I am a skilled  Fullstack developer interested in new opportunities in Web Development.
          Have passion for front end design and/or web application development. I actively seek out new technologies and stay up-to-date on industry trends.
          Have got experience working with HTML/CSS, including adaptive cross-browser markup, also strong JS programming skills.
          <br />
          <br />
          Technologies:
          <AboutTechnologiesItems>
            <li> <img src={require('../images/html5.png')} alt=""/></li>
            <li> <img src={require('../images/css3.png')} alt=""/></li>
            <li> <img src={require('../images/github.png')} alt=""/></li>
            <li> <img src={require('../images/github.png')} alt=""/></li>
            <li> <img src={require('../images/github.png')} alt=""/></li>
            <li> <img src={require('../images/github.png')} alt=""/></li>
            <li> <img src={require('../images/github.png')} alt=""/></li>
          </AboutTechnologiesItems>
        </AboutText>
      </AboutBackground>
    );
  }
}

