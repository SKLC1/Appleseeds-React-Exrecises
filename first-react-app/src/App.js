import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';


function App(){
  return(
    <div>
      <Box/>
    </div>
  )
}
class Box extends React.Component{
  constructor() {
    super()
    this.state = {
      // back: `rgb(${Math.floor(Math.random *120)},${Math.floor(Math.random *120)},${Math.floor(Math.random *120)})`,
      back: 'red',
    }
  }

  render() {
    return(
      <div>
        <div className='box' style={{backgroundColor: this.state.back}}>
        </div>
      </div>
    )
  }
}

export default App