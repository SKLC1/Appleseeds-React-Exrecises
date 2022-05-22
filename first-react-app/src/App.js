import './App.css';
import React from 'react';
import axios  from 'axios';
import { data } from './components/Exrecise 12.2 react data/data.js';

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
      myData: data,
      allNames: [],
      allBefore1990: [],
    }
  }
  getAllNames=()=> {
    let newNames = this.state.myData.map(person=>{
      if(this.state.allNames.length < this.state.myData.length){
        for (const key in person) {
          if(key === 'name') {
            return person[key]
          }
        }
      }
    })
    console.log(newNames)
    return this.setState({allNames: newNames})
  }
  getAllBornBefore1990=()=> {
    let newAllBornBeforeArr = this.state.myData.map(person=>{
      if(!this.state.allBefore1990.includes(person)){
        for (const key in person) {
          if(key === 'birthday' && person[key].slice(person[key].length - 4) < 1990) {
            return person
          }
        }
      }
    })
    console.log(this.state.allBefore1990)
    return this.setState({allBefore1990: newAllBornBeforeArr})
  }
  componentDidMount(){    
    this.getAllNames()
    this.getAllBornBefore1990()
  }
  render() {
    return(
      <div>
         <Name arr={this.state.allNames}/>
         <Card data={this.state.allBefore1990}/>
     </div>
    )
  }
}

function Name (props){

  return(
    <div>
      <div>test</div>
      <div>
        {props.arr.map((name,idx)=>{return <div key={idx}>{name}</div>})}
      </div>
    </div>
  )
}
function Card (props){
  return(
    <div>
      <div>
        {props.data.map((person,idx)=>{return <div><h1>{person.name}</h1></div>})}
      </div>
    </div>
  )
}

export default App