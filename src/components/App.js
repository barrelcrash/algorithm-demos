import React, { Component } from 'react';
import {quicksort} from '../services/quicksort';
import '../styles/App.css';

var defaultSortArray = [ 
  4, 8, 3, 0, 2, 8, 3, 7, 9, 5
];

function getArrayString(array) {
  var arrayString = "";
  for (var [i, v] of array.entries()) {
    arrayString += v;
    if (i !== array.length - 1) {
      arrayString += ", ";
    }
  }
  return arrayString;
}

quicksort.setValues(defaultSortArray);
quicksort.initSort();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Algorithm Demos</h1>
        </header>
        <p className="App-intro">{getArrayString(quicksort.getStep(0).getValue())}</p>
        <p className="App-intro">{getArrayString(quicksort.getStep(quicksort.getNumSteps() - 1).getValue())}</p>
      </div>
    );
  }
}

export default App;
