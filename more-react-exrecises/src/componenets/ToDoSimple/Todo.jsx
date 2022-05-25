import { Component } from "react";
import "./style.css"

class ToDo extends Component {
  constructor() {
    super()
    this.state ={}
  }
  render() { 
    return (
      <div>
        <List/>
      </div>
    );
  }
}
class List extends Component {
  constructor(){
    super()
    this.state={
      toDoList: [
        {do: 'Meditate', id: 1},
        {do: 'Eat', id: 2},
        {do: 'Groceries', id: 3},
      ]
    }
  }
  insertList(){
    return this.state.toDoList.map((listItem)=>{
      return <Task itemProp={listItem}  key={listItem.id}
      handleDelete={this.handleDelete}
      handleUpdate={this.handleUpdate}/>
    })
  }
  setAddedValue(target){
    this.setState({toBeAdded: target.value})
  }
  addTask(value){
    const newItem = {
      do: this.state.toBeAdded,
      id: Math.random()
    }
    this.setState((prevState) => {
      return { toDoList: [...prevState.toDoList, newItem], toBeAdded: ''}
    })
  }
  handleDelete=(id)=>{
    console.log(id);
    this.setState((prevState) => {  
      const toDoListAfterDelete = prevState.toDoList.filter((obj) => 
        obj.id !== id
      );
      return { toDoList: toDoListAfterDelete };
    });
  }
  handleUpdate = (id, newTitle) => {
    const newArrOfObj = this.state.toDoList.map((obj) => {
      if (obj.id === id) {
        return { ...obj, do: newTitle };
      }
      return obj;
    });
    console.log(newArrOfObj);
    this.setState({ toDoList: newArrOfObj });
  }
  render() {
    return(
      <div>
        <div>
          {this.insertList()}
        </div>
          <div>
            <h1>Add Task:</h1>
            <input onChange={(e)=>this.setAddedValue(e.target)} type='text'></input>
            <button onClick={()=>this.addTask(this.state.toBeAdded)}>Add</button>
          </div>
      </div>
    )
  }
}
// --------------- 

class Task extends Component {
  constructor(){
    super()
    this.state = {title:''}
  }
  handleUpdateChange(value){
    this.setState({ title: value },()=>{console.log(value);})
  }
  render() {
    return(
      <div className="list-item">
         {this.props.itemProp.do}
        <div>
          <button onClick={()=>this.props.handleDelete(this.props.itemProp.id)}>Delete
          </button>
          <button onClick={()=>this.props.handleUpdate(this.props.itemProp.id,this.state.title)}>Edit</button>
           <input onChange={(e)=>this.handleUpdateChange(e.target.value)} type='text' placeholder="Edit"></input>
         </div>
       </div>
    )
  }
}
export default ToDo;