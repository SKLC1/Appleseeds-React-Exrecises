

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
      <Create/>
      </>
    )
  }
}

class Create extends React.Component{
  constructor() {
    super()
    this.state = {
      firstName: null,
      lastName: null,
      age: null,
      text: null,
      review: false,
    }
  }
  setFirst=(value)=>{
    this.setState({ firstName: value })
  }
  setLast=(value)=>{
    this.setState({ lastName: value })
  }
  setSelect=(value)=>{
    this.setState({ age: value })
  }
  setText=(value)=>{
    this.setState({ text: value })
  }
  reviewForm=()=>{
    this.setState({ review: true })
  }

  render() {
    if(!this.state.review) {
    return(
      <div className='form-box'>
       <form>
        <label>First Name</label>
        <input type="text" onChange={(e)=> this.setFirst(e.target.value)}/>
        <label>Last Name</label>
        <input type="text" onChange={(e)=> this.setLast(e.target.value)}/>
        <select onChange={(e)=> this.setSelect(e.target.value)}>
          <option value="0-15">0-15</option>
          <option value="15-30">15-30</option>
        </select>
        <label>Free text</label>
        <input onChange={(e)=> this.setText(e.target.value)} type="text"/>
        <button type='button' onClick={()=> this.reviewForm()}>Continue</button>
       </form>
      </div>
    )
  } else {
    return(
      <div>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.age}</p>
        <p>{this.state.text}</p>
        <button type='submit'>Submit</button>
      </div>
      )
    }
  }
}
export default App