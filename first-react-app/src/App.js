import './App.css';
import React from 'react';
// import { useState } from 'react';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      res: null,
      colors: ["yellow","red","blue"],
    }
  }
  assignColors() {
    const colorRes = this.state.colors.map(colorProp => {
      console.log(colorProp);
      return <ColorBtn color={colorProp} changeColor={this.changeColor}/>
    });
    return colorRes
  }
  changeColor(color){
    console.log(color);
    console.log(this);
    this.setState((prevState)=>{return {res: color}})
  }
  render() {
    return (
      <div>
        {this.assignColors()}
       <div>{this.state.res}</div>
      </div>
    )
  }
}
class ColorBtn extends React.Component{

  render() {
    return(
      <div>
       <button onClick={()=>this.props.changeColor(this.props.color)}
        style={{backgroundColor: this.props.color}}>
         {this.props.color}
       </button>
      </div>
    )
  }
}
export default App
