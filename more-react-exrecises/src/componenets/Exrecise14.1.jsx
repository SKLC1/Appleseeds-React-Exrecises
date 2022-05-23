import React from "react";


class Exrecise141 extends React.Component{
  constructor(){
    super()
    this.inputRef = React.createRef();
  }
  focusOnInput=()=>{
    this.inputRef.current.focus()
  }
  componentDidMount() {
    this.focusOnInput()
  }
  render() {
    return(
      <div>
        <input ref={this.inputRef} type="text" ></input>
      </div>
    )
  }
}
export default Exrecise141