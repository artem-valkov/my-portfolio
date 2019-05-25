import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main'
import resumeData from './resumeData';

export default class App extends React.Component {
    render () {

  return (
    <div>
    <Nav resumeData={resumeData}/>
    <Main resumeData ={resumeData}/>
    </div>
  );
    }
}

