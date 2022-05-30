import { useState } from "react";

function Exrecise184() {
  const [boxArr, setBoxArr] = useState(["one", "two", "three", "four", "five"])
  

  function insertCheckbox(){
    return boxArr.map((box,idx)=>{
      return <div key={idx}>
        <input type='checkbox' id={box} onClick={(e)=>boxClick(e.target)}/>{box}
      </div> 
    })
  }
  function boxClick(target){
    const match = boxArr.find(b=> target.id == b)
    const arrOfDelete = []
    if (target.checked) {
      arrOfDelete.push(match)
      console.log(arrOfDelete)
    } else {
      arrOfDelete.filter(d=> d !== match)
      console.log(arrOfDelete)
    }
    setBoxArr()
  }
  function deleteChecked() {
    
  }
  return ( 
    <div>      
       <button onClick={()=>deleteChecked()}>Delete</button>
       <button>Reset</button>
       {insertCheckbox()}
    </div>
   );
}

export default Exrecise184;