import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


  export default class App extends React.Component {
    render () {
  return (
    <div>
    <Header />
    <About />
    <Portfolio />
    <Contacts />
    <Footer />
    </div>
  );
    }
}

