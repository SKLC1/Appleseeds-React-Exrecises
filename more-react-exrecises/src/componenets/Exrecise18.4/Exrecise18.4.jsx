import { useState } from "react";

function Exrecise184() {
  const [boxArr, setBoxArr] = useState(["one", "two", "three", "four", "five"])
  const [isChecked, setIsChecked] = useState(boxArr.map((box,idx)=> {return {isChecked: false, index: idx }}))
  
  function insertCheckbox(){
    console.log(isChecked)
    return boxArr.map((box,idx)=>{
      return <div key={idx}>
        <input type='checkbox'/>{box}
      </div> 
    })

  }
  return ( 
    <div>      
       <button>Delete</button>
       <button>Reset</button>
       {insertCheckbox()}
    </div>
   );
}

export default Exrecise184;