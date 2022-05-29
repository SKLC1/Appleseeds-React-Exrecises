import React, { useState} from "react";
import './Exrecise18.2.css'

function Exrecise182() {
  const [data,setData] = useState(
    [
      { name: "CSS", completed: true },
      { name: "JavaScript", completed: true },
      { name: "Learn React", completed: false },
      { name: "Learn mongoDB", completed: false },
      { name: "Learn Node JS", completed: false },
    ])
  
  function getList(){
    console.log(data);
    return data.map(item=>{
      return <div className="item" onClick={()=>toggleTask(item)} key={data.indexOf(item)}>
        <div>{item.name}</div><div>{isCompleted(item.completed)}</div>
        </div>
    })
  }
  function isCompleted(completed){
    if (completed) {
      return <span>&#10003;</span> 
    } else if(!completed){
      return <div> X </div>
    }
  }
  function toggleTask(item) {
    if (item.completed) {
      setData((prev)=>{ 
        console.log(prev);
        return [ ...prev, item.completed = false]
      })
    } else {
      setData((prev)=>{ 
        console.log(prev);
        return [ ...prev, item.completed = true]
      })
    }
  }
  return ( 
    <>
      <div>
        {getList()}
      </div>
    </>
   )
}
export default Exrecise182