import React, { Component } from 'react';
import CForm from './CForm'
import CValue from './CValue'
import ToDo from "./ToDo";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      a: 0,
      b: 0,
      result: 0
    };

    this.numberChangeHandler = this.numberChangeHandler.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }

  numberChangeHandler(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    let v = {};
    v[e.target.name] = e.target.value;
    this.setState(v);
  }

  calculateResult() {
    let r = parseInt(this.state.a) + parseInt(this.state.b);
    this.setState({result: r});
  }

  render() {
    return (
      <div className="App">
        <CForm valueA={this.state.a} valueB={this.state.b} valueHandler={this.numberChangeHandler} />
        <CValue result={this.state.result} clickHandler={this.calculateResult} />
        <hr/>
        <ToDo />
      </div>
    );
  }
}

export default App;
