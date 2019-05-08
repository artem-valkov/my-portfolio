import React from 'react';
import './Header.css'


function Header() {
  return (
    <React.Fragment>
      <header id="header">
        <ul id="nav" className="nav">
          <li className="nav-menu">
            <a className="name-menu__links" href="#about-me"> About me</a>
          </li>
          <li className="nav-menu">
            <a className="name-menu__links" href="#portfolio"> Portfolio</a>
          </li>
          <li className="nav-menu">
            <a className="name-menu__links" href="#contacts"> Contacts</a>
          </li>
        </ul>
      </header>
    </React.Fragment>
  )
}

export default Header;