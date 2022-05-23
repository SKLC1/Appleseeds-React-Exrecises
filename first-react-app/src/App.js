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
       <FetchAvatars/>
      </>
    )
  }
}

class FetchAvatars extends React.Component{
  constructor() {
    super()
    this.state = { avatarArr: [] }
  }
  getAvatars= async ()=> {
      const response = await axios.get('https://randomuser.me/api/?results=10')
      const avatars = response.data.results
      console.log(avatars)
      return this.setState({avatarArr: avatars})
  }
  componentDidMount() {
    this.getAvatars()
  }
  render() {
    return(
      <div>
        <MapAvatars avatars={this.state.avatarArr}/>
      </div>
    )
  }
}
class MapAvatars extends React.Component {
  constructor() {
    super()
    this.state = {didUpdate: false, mappedData: []}
  }
  getRelevantData = ()=>{
    let newMappedData = this.props.avatars.map((person)=> {
      return {person: {
        first: person.name.first,
        last: person.name.last,       
        id: person.phone,       
        img: person.picture,       
      }}
    })
    console.log(newMappedData)
    this.setState({mappedData: newMappedData})
  }
  async componentDidUpdate() {
    if(!this.state.didUpdate){
      this.getRelevantData()
      this.setState({didUpdate: true})
    }
  }
  render() {
    return(
    <>
      <div>
        <FilterAvatars mappedData={this.state.mappedData}/>
        <DisplayAvatars mappedData={this.state.mappedData}this/>
      </div>
    </>
  )
  }
}
 function DisplayAvatars(props) {

 return(
   <div>
     {props.mappedData.map((person)=> {
    return <div className='avatar-box'>
             <div className='avatar' key={person.person.id}>
               <div>{person.person.first}</div>
               <div>{person.person.last}</div>
               <img src={person.person.img.medium}/>
              </div>
           </div>
    })}
    </div>
 )
}

function FilterAvatars(props) {
  function filterAll(value) {
    props.mappedData.map((person)=>{
      if (person.person.first.toLowerCase().includes(value.toLowerCase())) {
        console.log(person.person.first)
      }
    })

  }
  return(
    <div>
      <input type='text' onChange={(e)=>filterAll(e.target.value)}></input>
      <button>Find</button>
    </div>
  )
}
export default App
