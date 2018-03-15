import React, { Component } from 'react';
import './App.css';
import Movies from "./Components/Movies/Movies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>app</p>
        <Movies/>
      </div>
    );
  }
}

export default App;
