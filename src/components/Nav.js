import React from 'react';
import NavBar from './styled/NavBar'
import NavLi from './styled/NavLinks'
import NavA from './styled/NavA'

export default class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
          <NavBar>
            <NavLi>
              <NavA href="#about-me"> About me</NavA>
            </NavLi>
            <NavLi>
              <NavA className="name-menu__links" href="#portfolio"> Portfolio</NavA>
            </NavLi>
            <NavLi>
              <NavA className="name-menu__links" href="#contacts"> Contacts</NavA>
            </NavLi>
          </NavBar>
      </React.Fragment>
    )
  }
}
