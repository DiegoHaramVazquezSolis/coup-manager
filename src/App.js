import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <div className="container-fluid">
          <Routes />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
