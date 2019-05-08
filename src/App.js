import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import resumeData from './resumeData';

  export default class App extends React.Component {
    render () {
  return (
    <div>
    <Nav resumeData={resumeData}/>
    <Header resumeData={resumeData} />
    <Portfolio />
    <Contacts />
    <Footer />
    </div>
  );
    }
}

