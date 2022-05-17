

function App(){
  return(
    <div>
      <Colors aaa="mashu"/>
    </div>
  )
}
class Colors extends React.Component{
  constructor() {
    super()
    this.state = {
      favoriteColor: 'blue',
      isUpdate: false,
    }
  }
  componentDidMount() {
    console.log('mounted');
    setTimeout( ()=>{
      // time out takes this callback
      this.setState((prevState) => {
        return {favoriteColor:'red'}
      })
    } ,1000)
    console.log('timed out');
  }
  componentDidUpdate(pS, prevState,Sn) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      this.setState((lastState) =>{
        return { isUpdate: true }
      })
    }
  }
render() {
  return(
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div data-col='col'></div>
        <div>{this.state.isUpdate && 'The new color is'}
         <p>{this.state.isUpdate && this.state.favoriteColor}</p>
        </div>
      </div>
      )
    }
}
export default App