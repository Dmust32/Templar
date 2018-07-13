import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <LandingPage />
      </div>
    );
  }
}

export default App;
