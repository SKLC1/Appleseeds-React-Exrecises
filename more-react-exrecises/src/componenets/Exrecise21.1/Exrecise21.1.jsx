import { useEffect, useRef, useState } from "react";

function Exrecise211() {
  const [isEdit, setIsEdit] = useState(false)
  
  function hide(){
    setIsEdit(false)
  }

  if(!isEdit) {
    return ( 
      <div>
      <button onClick={()=>setIsEdit(true)}>Edit</button>
    </div>
   )
  } else {
    return(
      <div>
        <EditUnit hide={hide}/>
      </div>
    )
  }
}

function EditUnit(props) {
  const inputRef = useRef()
  useEffect(()=>{
    focus()
  },[])
  function focus(){
    inputRef.current.focus()
  }
  return ( 
    <div>
      <input ref={inputRef}/>
      <button onClick={()=>props.hide()}>Save</button>
    </div>
   );
}

export default Exrecise211;