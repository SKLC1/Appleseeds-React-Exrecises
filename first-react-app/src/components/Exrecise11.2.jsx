


class Check extends React.Component{
   state = {
      c1:false,
      c2:true,
      c3:true,
      c4:true,
   }
  render() {
    return(
      <div>
        <Checkbox text="terms1" checked={this.state.c1}/>
        <Checkbox text="terms1" checked={this.state.c2}/>
        <Checkbox text="terms1" checked={this.state.c3}/>
        <Checkbox text="terms1" checked={this.state.c4}/>
      </div>
    )
  }
}

function Checkbox({text}) {
  return(
    <>
      <input type='checkbox' checked={this.props.checked}/>
      <label>{text}</label>
    </>
  )
}