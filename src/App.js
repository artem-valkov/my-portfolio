import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import resumeData from './resumeData';

  export default class App extends React.Component {
    render () {
  return (
    <div>
    <Header resumeData={resumeData}/>
    <About resumeData={resumeData} />
    <Portfolio />
    <Contacts />
    <Footer />
    </div>
  );
    }
}

