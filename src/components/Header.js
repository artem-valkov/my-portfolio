import React from 'react';
import HeaderText from './styled/HeaderText'
import HeaderDiv from './styled/HeaderDiv'
import HeaderSocials from './styled/HeaderSocials';
import HeaderSection from './styled/HeaderSection';
import HeaderBackground from './styled/HeaderBackground';


export default class Header extends React.Component {
  render (props) {
    return (
      <HeaderSection>

        <HeaderBackground />

        <HeaderDiv>

          <HeaderText>Hello my name is Artem Valkov</HeaderText>
          <HeaderText>I'm Fullstack Developer</HeaderText>

          <HeaderSocials>

            <li> <a href="https://www.linkedin.com/in/artem-valkov/"> <img src={require('../images/linkendin.png')} className="social-icon" alt="linkendin"/> </a> </li>
            <li> <a href="https://github.com/artem-valkov"> <img src={require('../images/github.png')} className="social-icon" alt="github"/> </a> </li>
            <li> </li>

{/*            {
              resumeData.socialLinks.map(social => {
                return <li key={ social.name }>
                         <a href={ social.url }> <img src={ social.imageUrl } /> </a>
                       </li>
              })
            }*/}
          </HeaderSocials>

        </HeaderDiv>

      </HeaderSection>
    );
  };
};
