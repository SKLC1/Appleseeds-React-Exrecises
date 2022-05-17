import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';



function App(){
  return(
    <div>
      <Timer/>
    </div>
  )
}
class Timer extends React.Component{
  constructor() {
    super()
    this.state = {timerFinished: false}
  }
  componentDidMount() {
    setTimeout((prevState) => {
      this.setState(()=>{return {timerFinished: true}})
      console.log('a');
    }, 3000);
  }
  renderContent() {
    if (!this.state.timerFinished) {
      return(
        <div>
          <div id="loading"></div>
        </div>
      )
    } else {
      return(
        <div>
          <div>timerFinished</div>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
       {this.renderContent()}
      </div>
      )
  }
}
export default App