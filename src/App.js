import React, { Component } from 'react';
import Home from './Home'
import AppBar from './Layout/AppBar/AppBar';

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh'}}>
        <Home />
        <AppBar />
      </div>
    );
  }
}

export default App;
