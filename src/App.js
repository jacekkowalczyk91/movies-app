import React, { Component } from 'react';
import './App.css';
import Movies from "./Components/Movies/Movies";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Movies/>
      </div>
    );
  }
}

export default App;
