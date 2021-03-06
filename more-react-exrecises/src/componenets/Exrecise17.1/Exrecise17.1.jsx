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
    this.state = { contactsArr: [], newUserName: '', newUserPhone: '', newUserImg: '' }
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
      return <Contact details={contact} key={contact.id}
      handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
    })
  }
  handleInputChange=({ target })=>{
    this.setState({ [target.id]: target.value })
  }
  handleCreate = async() =>{
    const newContact = {name: this.state.newUserName, phone: this.state.newUserPhone, image: this.state.newUserImg}
    console.log(newContact);
    try{
      const postedData = await axios.post('https://628e804ba339dfef87af171e.mockapi.io/Contacts', newContact)
      this.setState((prev)=>{
        return{ contactsArr: [...prev.contactsArr, postedData.data],
        newUserName: '',
        newUserPhone: '',
        newUserImg: '',
       }
      })
    } catch(e) {
      console.log(e.message);
    }
  }
  handleDelete = async(id)=>{
    try{
      const deletedContact = await axios.delete(`https://628e804ba339dfef87af171e.mockapi.io/Contacts/${id}`)
      this.setState(prev=>{
        const newContactArr = prev.contactsArr.filter((c)=>(c.id !== id))
         return {contactsArr: newContactArr}
        })
    } catch (e) {
      console.log(e);
    }
    
  }
  handleUpdate= async(id, newName)=>{
    const updateContact = this.state.contactsArr.find(
      (contact) => contact.id === id
    );
    const updated = {...updateContact, name: newName }
    console.log(updated)
    const { data } = await axios.put(`https://628e804ba339dfef87af171e.mockapi.io/Contacts/${id}`, updated)
    this.setState((prev)=>{
      return prev.contactsArr.map((contact)=>{
        if (contact.id === id) {
             return data;
        }
        return contact;
      })
    })
  }
  render() { 
    return (
      <div className="wrapper">
        <input id="newUserName" onChange={this.handleInputChange} value={this.state.userName} placeholder="name"></input>
        <input id="newUserPhone" onChange={this.handleInputChange} value={this.state.userPhone} placeholder="phone"></input>
        <input id="newUserImg" onChange={this.handleInputChange} value={this.state.userImage} placeholder="img utl"></input>
        <button onClick={this.handleCreate}>Add</button>
         {this.insertContacts()}
      </div>
    );
  }
}
class Contact extends Component {
  state = { value: '' }
  handleOnChange=({target})=>{
    this.setState({ value: target.value })
  }
  render() { 
    return (
      <div>
        <div>{this.props.details.name}</div>
        <div>{this.props.details.phone}</div>
        <img src={this.props.details.image}></img>
        <button onClick={()=>this.props.handleDelete(this.props.details.id)}>Delete</button>
        <button onClick={()=>this.props.handleUpdate(this.props.details.id,this.state.value)}>Edit</button>
        <input onChange={this.handleOnChange} value={this.state.value}></input>
      </div>
    );
  }
}

 
export default Exrecise171;