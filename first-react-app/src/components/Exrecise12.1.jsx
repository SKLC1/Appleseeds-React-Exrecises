import './App.css';
import React from 'react';
import axios  from 'axios';

class App extends React.Component{
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return(
      <>
       <GetJoke/>
      </>
    )
  }
}

class GetJoke extends React.Component{
  constructor() {
    super()
    this.state = {
      joke: null,
      jokesArrRes: [],
      }
  }
  appendCategoryBtn =()=> {
     axios.get('https://api.chucknorris.io/jokes/categories').then((response)=>{
      const jokesArr = response.data;
      console.log(jokesArr)
      this.setState({jokesArrRes: jokesArr})
    })
  }
  getRandJoke=(category)=> {
    axios.get(`https://api.chucknorris.io/jokes/random`).then((response)=>{
      this.setState({joke: response.data.value})
    })
  }
  getCateJoke=(category)=> {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then((response)=>{
      this.setState({joke: response.data.value})
    })
  }
  render() {
    return(
      <>
        <div>
         <button onClick={()=>{this.getRandJoke()}}>Get random joke</button>
          <div>{this.state.joke}</div>
          <button onClick={()=>this.appendCategoryBtn()}>Get more categories</button>
          <div>{this.state.jokesArrRes.map((jokeCat)=>{
            return <button onClick={()=>this.getCateJoke(jokeCat)}>{jokeCat}</button>
          })}</div>
        </div>
      </>
    )
  }
}
export default App