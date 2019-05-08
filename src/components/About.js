import React from 'react';
//import './About.css';
import Background from '../images/background.jpg'
import HeaderText from './styled/HeaderText'
import HeaderSocials from './styled/HeaderSocials';
import HeaderSection from './styled/HeaderSection';
import HeaderBackground from './styled/HeaderBackground';
import HeaderDiv from './styled/HeaderDiv'

export default class About extends React.Component {
  render (props) {
    let resumeData = this.props.resumeData;
    return (
      <HeaderSection>
        <HeaderBackground/>
        <HeaderDiv>
          <HeaderText> Hello! My name is { resumeData.name }. </HeaderText>
          <HeaderText> { resumeData.aboutme }. </HeaderText>

          <HeaderSocials>
            {
              resumeData.socialLinks.map(item => {
                return <li key={ item.name }>
                         <a href={ item.url }> <img src={ item.imageUrl } /> </a>
                       </li>
              })
            }
          </HeaderSocials>

        </HeaderDiv>

      </HeaderSection>
    );
  };
};
