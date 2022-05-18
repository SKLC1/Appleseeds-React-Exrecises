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
  changeColor=(color)=>{
    this.setState(()=>{return {res: color}})
  }
  assignColors() {
    const colorRes = this.state.colors.map(colorProp => {
      return <ColorBtn color={colorProp} changeFunc={this.changeColor}/>
    });
    return colorRes
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
       <button onClick={()=>this.props.changeFunc(this.props.color)}
        style={{backgroundColor: this.props.color}}>
         {this.props.color}
       </button>
      </div>
    )
  }
}
export default App
