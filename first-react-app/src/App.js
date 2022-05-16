import logo from './logo.svg';
import './App.css';
import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';


class App extends React.Component {
  constructor(props) {
    super(props)

     this.state = {
       res: 0,
     }
  }
  render() {
    return(
      <div>
        <Counter total={this.state.res}></Counter>
      </div>
    )}
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }
  count() {
    this.setState(this.res++)
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.count()}>Counter</button>
        <div>{this.props.total}</div>
      </div>
    )
  }
}

export default App 