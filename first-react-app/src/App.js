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
    this.state = {didUpdate: false}
  }
  getRelevantData = ()=>{
    this.state.avatars.map((person,idx)=>{
      this.setState({
        person: {name: person.name.first}
      })
    })
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
      </div>
    </>
  )
  }
}
export default App