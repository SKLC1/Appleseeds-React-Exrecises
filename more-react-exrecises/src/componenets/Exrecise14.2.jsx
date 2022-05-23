import React from "react";


class Exrecise142 extends React.Component{
  constructor(){
    super()
    this.inputRef=React.createRef()
  }
  getText=()=>{
    let textToCopy = this.inputRef.current.value
    navigator.clipboard.writeText(textToCopy)
  }

  render() {
    return(
      <div>
        <h1>Why are we still here? <p>-Kazuhira Miller(Metal Gear Solid V)</p></h1>
        <input ref={this.inputRef} type="text"/>
        <button onClick={this.getText}>Get Text</button>
      </div>
    )
  }
}
export default Exrecise142