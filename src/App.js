import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import PortfolioData from './PotrfolioData'


function App() {
  return (
    <div>
    <Header PortfolioData={PortfolioData} />
    <About PortfolioData={PortfolioData} />
    <Portfolio />
    <Contacts />
    <Footer />
    </div>
  );
}

export default App;
