import React, { Component } from 'react';
import ValuesInput from './valuesInput';
import SortChart from './SortChart';
import {quicksort} from '../services/quicksort';
import {createSortValue} from "../services/sortUtils";
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
      algorithm: quicksort,
      data: []
    }

    // seed default values for algorithm and input
    this.defaultValues = [4, 8, 3, 0, 2, 8, 3, 7, 9, 5];
    this.defaultValues = this.defaultValues.map(x => createSortValue(x));

    this.updateAndRun = this.updateAndRun.bind(this);
  }

  // used by ValuesInput to update the values & graph
  updateAndRun(values) {
    this.state.algorithm.setValues(values);
    this.state.algorithm.run();
    this.setState({
      data: this.state.algorithm.getStep(4).getValue(),
      firstStep: getArrayString(this.state.algorithm.getStep(0).getValue().map(x => x.value)),
      finalStep: getArrayString(this.state.algorithm.getFinalStep().getValue().map(x => x.value))
    });
  }

  componentDidMount() {
    this.updateAndRun(this.defaultValues);
  }

  // for debugging
  printSteps() {
    for (var i = 0; i < this.state.algorithm.getNumSteps(); i++) {
      let value = this.state.algorithm.getStep(i).getValue(); 
      console.log(value);
    }
  }

  render() {
    // this.printSteps();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Algorithm Demos</h1>
        </header>
        <ValuesInput updateAndRun={this.updateAndRun} defaultValues={getArrayString(this.defaultValues.map(x => x.value))}/>
        <p className="App-intro">{this.state.firstStep}</p>
        <p className="App-intro">{this.state.finalStep}</p>
        <SortChart chartData={this.state.data} />
      </div>
    );
  }
}

export default App;
