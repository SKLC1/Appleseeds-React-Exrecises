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
      return <Task itemProp={listItem}  key={listItem.id}/>
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
    this.state = {item: this.props}
  }

  render() {
    return(
      <div className="list-item">
         {this.props.itemProp.do}
        <div>
          <button>Delete
          </button>
          <button>Edit</button>
           <input type='text' placeholder="Edit"></input>
         </div>
       </div>
    )
  }
}
export default ToDo;