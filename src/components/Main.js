import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from '../components/Header';
import About from './About'
import Projects from '../components/Projects';
import Contacts from "../components/Contacts";

export default class Main extends React.Component {
  render(props) {
    return (
      <main>
        <Switch>
          <Route path='/home' component={Header} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </main>
    )
  }
}

