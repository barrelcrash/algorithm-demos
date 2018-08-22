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

var BarChart = require("react-chartjs").Bar;

var data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,0.8)",
			highlightFill: "rgba(151,187,205,0.75)",
			highlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 86, 27, 90]
		}
	]
};

var options = {
	//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
	scaleBeginAtZero : true,

	//Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,

	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",

	//Number - Width of the grid lines
	scaleGridLineWidth : 1,

	//Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines: true,

	//Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines: true,

	//Boolean - If there is a stroke on each bar
	barShowStroke : true,

	//Number - Pixel width of the bar stroke
	barStrokeWidth : 2,

	//Number - Spacing between each of the X value sets
	barValueSpacing : 5,

	//Number - Spacing between data sets within X values
	barDatasetSpacing : 1,
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
    // this.printSteps();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Algorithm Demos</h1>
        </header>
        <ValuesInput updateAndRun={this.updateAndRun} defaultValues={getArrayString(this.defaultValues)}/>
        <p className="App-intro">{this.state.firstStep}</p>
        <p className="App-intro">{this.state.finalStep}</p>
        <BarChart data={data} options={options} width="600" height="250"/>
      </div>
    );
  }
}

export default App;
