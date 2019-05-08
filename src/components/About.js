import React from 'react';
import './About.css';
import Background from '../images/background.jpg'
import HeaderText from './styled/HeaderText'





export default class About extends React.Component {
  render (props) {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" className="about">
        <img className="about-background" src={Background} alt="Artem Valkov"/>
        <div className="about-text">
          <HeaderText> Hello! My name is { resumeData.name }.</HeaderText>
          <HeaderText> { resumeData.aboutme } </HeaderText>

          <ul className="socials">
            {
              resumeData.socialLinks.map(item => {
                return <li key={ item.name }>
                         <a href={ item.url }> <img src={ item.imageUrl } /> </a>
                       </li>
              })
            }
          </ul>

        </div>

      </section>
    );
  };
};
