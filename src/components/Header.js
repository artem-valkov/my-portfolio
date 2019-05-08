import React from 'react';
import NavBar from './styled/NavBar'
import NavLi from './styled/NavLinks'
import NavA from './styled/NavA'

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header id="header">
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
        </header>
      </React.Fragment>
    )
  }
}
