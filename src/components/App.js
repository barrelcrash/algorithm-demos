import React, { Component } from 'react';
import ValuesInput from './valuesInput';
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

var BarChart = require("react-chartjs").Bar;

var data = {
  labels: ["", "", "", "", "", "", ""],
	datasets: [
		{
			label: "My First dataset",
			fillColor: ["rgba(220,220,220,0.5)", "rgba(220,0,220,0.5)"],
			strokeColor: "rgba(220,220,220,0.8)",
			data: [65, 70, 80, 81, 56, 55, 40]
		}
	]
};

var options = {
  scaleBeginAtZero : true,
	scaleShowGridLines : false,
  barShowStroke : true, // stroke = outline
	barStrokeWidth : 2,
  barValueSpacing : 5, 
  barDatasetSpacing : 1, // N/A
  // {% raw %}
	//String - A legend template
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
  // {% endraw %}
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      algorithm: quicksort
    }

    // seed default values for algorithm and input
    this.defaultValues = [4, 8, 3, 0, 2, 8, 3, 7, 9, 5];
    this.defaultValues = this.defaultValues.map(x => createSortValue(x));
    this.state.algorithm.setValues(this.defaultValues);

    this.updateAndRun = this.updateAndRun.bind(this);
  }

  updateAndRun(values) {
    this.state.algorithm.setValues(values);
    this.state.algorithm.run();
    this.setState({
      firstStep: getArrayString(this.state.algorithm.getStep(0).getValue().map(x => x.value)),
      finalStep: getArrayString(this.state.algorithm.getFinalStep().getValue().map(x => x.value))
    });
  }

  componentDidMount() {
    this.state.algorithm.run();
    this.setState({
      firstStep: getArrayString(this.state.algorithm.getStep(0).getValue().map(x => x.value)),
      finalStep: getArrayString(this.state.algorithm.getFinalStep().getValue().map(x => x.value))
    });
  }

  // for debugging
  printSteps() {
    for (var i = 0; i < this.state.algorithm.getNumSteps(); i++) {
      let value = this.state.algorithm.getStep(i).getValue(); 
      console.log(value);
    }
  }

  render() {
    this.printSteps();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Algorithm Demos</h1>
        </header>
        <ValuesInput updateAndRun={this.updateAndRun} defaultValues={getArrayString(this.defaultValues.map(x => x.value))}/>
        <p className="App-intro">{this.state.firstStep}</p>
        <p className="App-intro">{this.state.finalStep}</p>
        <BarChart data={data} options={options} width="600" height="250"/>
      </div>
    );
  }
}

export default App;
