import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';


function App(){
  return(
    <div>
      <Box/>
      <Box/>
      <Box/>
    </div>
  )
}
class Box extends React.Component{
  constructor() {
    super()
    this.state = {
      isBox: 'box',
      boxLocation: 'translateX(-100%)',
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState((prevState) => {
        return { boxLocation: 'translateX(0%)' }
      })
    },2000)
  }
  componentDidUpdate(pProp,pState) {
    console.log(this.state.isBox);
    console.log(pState.isBox);
    if(this.state.isBox == pState.isBox) {
    setTimeout((lastState)=>{
        console.log('activated delete')
        this.setState(()=>{
          return { isBox: 'none' }
        })
      },4000)
    }
  }
  render() {
    return(
      <div>
        <div className='box' style={{transform: this.state.boxLocation, display: this.state.isBox}}></div>
      </div>
    )
  }
}

export default App