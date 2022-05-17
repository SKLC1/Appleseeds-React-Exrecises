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
      back: 'blue',
      counter: 0,
      rad: 0,
    }
  }
  componentDidMount() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
      setTimeout(()=>{
      this.setState(()=>{return{back: `#${randomColor}`}})
    },500)
  }
  componentDidUpdate(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
      setTimeout(()=>{
      this.setState(()=>{return{back: `#${randomColor}`,counter: this.state.counter + 1 }})
      console.log('updated');
      console.log(this.state.counter);
      if (this.state.counter === 5) {
        {this.state.rad = '50%'}
        console.log(this.state.rad);
      }
    },500)
  }
  render() {
    return(
      <div>
        <div className='box8' style={{backgroundColor: this.state.back, borderRadius: this.state.rad}}>
        </div>
      </div>
    )
  }
}

export default App