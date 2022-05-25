import axios from "axios";
import {Component} from "react"
import data from "../React Router/data";

class Exrecise171 extends Component {
  render() { 
    return (
      <div>
        <h1>My Contacts:</h1>
        <ContactList/>
      </div>
    );
  }
}
class ContactList extends Component {
  constructor(){
    super()
    this.state = { contactsArr: [] }
  }

  async componentDidMount(){
    try{
      const {data} = await axios.get('https://628e804ba339dfef87af171e.mockapi.io/Contacts')
      this.setState({ contactsArr: data})
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  insertContacts=()=>{
    return this.state.contactsArr.map((contact)=>{
      return <Contact details={contact}/>
    })
  }
  render() { 
    return (
      <div>
         {this.insertContacts()}
      </div>
    );
  }
}
class Contact extends Component {
  render() { 
    return (
      <div>
        <div>{this.props.details.name}</div>
        <div>{this.props.details.phone}</div>
        <img src={this.props.details.image}></img>
      </div>
    );
  }
}

 
export default Exrecise171;