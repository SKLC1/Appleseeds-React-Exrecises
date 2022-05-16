


class App extends React.Component {
  
  constructor() {
    super();

  }
  render() {
    return(
      <div>
        <Button name="important" bold="bold"></Button>
        <Button name="not important"></Button>
      </div>
    )}
}

const Button = (props) => {
  return(
    <button style={{fontWeight: props.bold}}> {props.name} </button>
  )
}

export default App 