import React from 'react';
import HeaderText from './styled/HeaderText'
import HeaderDiv from './styled/HeaderDiv'
import HeaderSocials from './styled/HeaderSocials';
import HeaderSection from './styled/HeaderSection';
import HeaderBackground from './styled/HeaderBackground';


export default class Header extends React.Component {
  render (props) {
    let resumeData = this.props.resumeData;
    return (
      <HeaderSection>

        <HeaderBackground />

        <HeaderDiv>

          <HeaderText>{ resumeData.greeting }</HeaderText>
          <HeaderText>{ resumeData.greetingabout }</HeaderText>

          <HeaderSocials>
            {
              resumeData.socialLinks.map(social => {
                return <li key={ social.name }>
                         <a href={ social.url }> <img src={ social.imageUrl } /> </a>
                       </li>
              })
            }
          </HeaderSocials>

        </HeaderDiv>

      </HeaderSection>
    );
  };
};
