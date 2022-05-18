

import './App.css';
import React from 'react';
// import { useState } from 'react';

class App extends React.Component{
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return(
      <>
       <CheckBox/>
       <CheckBox/>
       <CheckBox/>
      </>
    )
  }
}

class CheckBox extends React.Component{
  render() {
    return(
      <input type="checkbox">{text}</input>
    )
  }
}