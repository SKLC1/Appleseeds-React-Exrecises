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
        <DisplayAvatars mappedData={this.state.mappedData}this/>
      </div>
    </>
  )
  }
}
 function DisplayAvatars(props) {
   function appendAvatar() {
     props.mappedData.map((person)=> {
       return <div>asd</div>
     })
   }

 return(
   appendAvatar()
 )
}
export default App