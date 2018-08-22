import React, { Component } from 'react';

export default class ValuesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValues
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.updateAndRun(this.parseInput(this.state.value));
    event.preventDefault();
  }

  parseInput(text) {
    let inputs = text.split(',');
    inputs = inputs.map(x =>  x.trim());
    inputs = inputs.map(x => isNaN(parseInt(x, 10)) ? x : parseInt(x, 10));
    return inputs;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Sort values:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
