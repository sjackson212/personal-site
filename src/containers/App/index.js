import React, { Component } from 'react';
import './index.css';
import AboutMe from '../../components/AboutMe/index.js';
import AppHeader from '../../components/AppHeader/index.js';
import ContactMe from '../../components/ContactMe/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AboutMe />
        <ContactMe />
      </div>
    );
  }
}

export default App;
