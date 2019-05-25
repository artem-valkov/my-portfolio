import React from 'react';
import NavBar from './styled/NavBar'
import NavLi from './styled/NavLinks'
import NavA from './styled/NavA'
import { NavLink } from "react-router-dom";


export default class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
          <NavBar>
            <NavLink activeStyle={{ backgroundColor: '#545454', borderRadius: '5px' }} to='/home'>
              <NavLi>
                <NavA className="name-menu__links">Home</NavA>
              </NavLi>
            </NavLink>
            <NavLink activeStyle={{ backgroundColor: '#545454', borderRadius: '5px' }} to='/about'>
              <NavLi>
                <NavA className="name-menu__links"> About me</NavA>
              </NavLi>
            </NavLink>
            <NavLink activeStyle={{ backgroundColor: '#545454', borderRadius: '5px' }} to='/projects'>
              <NavLi>
                  <NavA className="name-menu__links"> Projects</NavA>
              </NavLi>
            </NavLink>
            <NavLink activeStyle={{ backgroundColor: '#545454', borderRadius: '5px' }} to='/contacts'>
              <NavLi>
                <NavA className="name-menu__links" href="#contacts"> Contacts</NavA>
              </NavLi>
            </NavLink>
          </NavBar>
      </React.Fragment>
    )
  }
}
