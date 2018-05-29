import React, { Component } from 'react';
import quicksort from '../services/quicksort';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Algorithm Demos</h1>
        </header>
        <p className="App-intro">{quicksort.getStartArray()}</p>
        <p className="App-intro">{quicksort.getResultArray()}</p>
      </div>
    );
  }
}

export default App;
