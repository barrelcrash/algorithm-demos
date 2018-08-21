import React, { Component } from 'react';
import ValuesInput from './valuesInput';
import {quicksort} from '../services/quicksort';
import '../styles/App.css';

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


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      algorithm: quicksort
    }

    // seed default values for algorithm and input
    this.defaultValues = [4, 8, 3, 0, 2, 8, 3, 7, 9, 5];
    this.state.algorithm.setValues(this.defaultValues);

    this.updateAndRun = this.updateAndRun.bind(this);
  }

  updateAndRun(values) {
    this.state.algorithm.setValues(values);
    this.state.algorithm.run();
    this.setState({
      firstStep: getArrayString(this.state.algorithm.getStep(0).getValue()),
      finalStep: getArrayString(this.state.algorithm.getFinalStep().getValue())
    });
  }

  componentDidMount() {
    this.state.algorithm.run();
    this.setState({
      firstStep: getArrayString(this.state.algorithm.getStep(0).getValue()),
      finalStep: getArrayString(this.state.algorithm.getFinalStep().getValue())
    });
  }

  // for debugging
  printSteps() {
    for (var i = 0; i < this.state.algorithm.getNumSteps(); i++) {
      console.log(getArrayString(this.state.algorithm.getStep(i).getValue()));
    }
  }

  render() {
    this.printSteps();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Algorithm Demos</h1>
        </header>
        <ValuesInput updateAndRun={this.updateAndRun} defaultValues={getArrayString(this.defaultValues)}/>
        <p className="App-intro">{this.state.firstStep}</p>
        <p className="App-intro">{this.state.finalStep}</p>
      </div>
    );
  }
}

export default App;
